<template>
  <v-card class="ma-1" height="500" elevation="0">

    <!-- Start: app bar element -->
    <v-app-bar color="transparent" height="50" flat>
      <v-tabs color="yellow darken-3" v-model="eyelet" show-arrows>
        <v-tab v-show="$auth.loggedIn">{{ $vuetify.lang.t('$vuetify.lang_79') }}</v-tab>
        <v-tab>{{ $vuetify.lang.t('$vuetify.lang_80') }}</v-tab>
        <v-tab>{{ $vuetify.lang.t('$vuetify.lang_82') }}</v-tab>
        <v-tab>{{ $vuetify.lang.t('$vuetify.lang_83') }}</v-tab>
      </v-tabs>
    </v-app-bar>
    <!-- End: app bar element -->

    <v-divider />

    <!-- Start: assets list element -->
    <v-tabs-items v-model="eyelet">
      <v-tab-item style="height: 449px">
        <template v-if="assets.length">
          <v-hover v-slot="{ hover }">
            <v-virtual-scroll :class="'bg-state ' + (hover ? '' : 'overflow-y-hidden')" bench="0" :items="assets" height="393" item-height="50">
              <template v-slot:default="{ item }">
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :color="$vuetify.theme.dark ? 'grey darken-3' : 'deep-purple lighten-5'" :to="'/assets/' + item.symbol + '/deposit'" :key="item.id" dense>
                    <v-list-item-avatar size="30">
                      <v-img :src="$storages(['icon'], item.symbol)"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.symbol.toUpperCase() }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <template v-if="hover">
                        <small v-if="item.balance > 0" class="teal--text">
                          ≈ ${{ item.convert }}
                        </small>
                      </template>
                      <template v-else>
                        <small class="teal--text">
                          {{ item.balance ? $decimal.truncate(item.balance, $decimal.decimal(item.balance)) : '' }}
                        </small>
                      </template>
                    </v-list-item-action>
                  </v-list-item>
                </v-hover>
              </template>
            </v-virtual-scroll>
          </v-hover>
        </template>
        <template v-else-if="!overlay">
          <v-layout style="height: 393px" wrap>
            <v-flex/>
            <v-flex class="text-center mx-5" align-self-center>
              <div>
                <v-icon color="yellow darken-3" size="50">
                  mdi-layers-outline
                </v-icon>
              </div>
              <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_78') }}</h4>
            </v-flex>
            <v-flex/>
          </v-layout>
        </template>
      </v-tab-item>
      <v-tab-item style="height: 449px">
        <v-component-soon />
      </v-tab-item>
      <v-tab-item style="height: 449px">
        <v-component-soon />
      </v-tab-item>
      <v-tab-item style="height: 449px">
        <v-component-soon />
      </v-tab-item>
      <v-tab-item style="height: 449px">
        <v-component-soon />
      </v-tab-item>
    </v-tabs-items>
    <!-- End: assets list element -->

    <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
      <v-progress-circular color="yellow darken-3" indeterminate size="50" />
    </v-overlay>

  </v-card>
</template>

<script>

  import Api from "../../libs/api";
  import Soon from "../../components/Soon"

  export default {
    name: "v-component-common",
    components: {
      'v-component-soon': Soon
    },
    data() {
      return {
        overlay: true,
        eyelet: 0,
        assets: []
      }
    },
    mounted() {
      if (this.$auth.loggedIn) {
        this.getAssets();

        /**
         * Отслеживаем события нового ордера.
         * @return {callback}:
         * @object {base_unit: string},
         * @object {id: int},
         * @object {assigning: string}
         * @object {price: float},
         * @object {quantity: float},
         * @object {quote_unit: string},
         * @object {create_at: int},
         * @object {user_id: int},
         * @object {value: float}
         */
        this.$publish.bind('exchange/order/create', (data) => {
          data.assigning = data.assigning ? 1 : 0;

          if (

            // Сверяем локальный штат пользователя
            // это у нас пользовательский [id] с полученным из события пользовательским [user_id],
            // если аргументы совпадают то это значит что ордер сработал частично или полностью.
            data.user_id === Number(this.$auth.$state.user.id)

          ) {
            this.setBalance(data.assigning ? data.base_unit : data.quote_unit);
          }

        });

        /**
         * Отслеживаем события удаленного ордера.
         * @return {callback}:
         * @object {base_unit: string},
         * @object {id: int},
         * @object {price: float},
         * @object {quantity: float},
         * @object {quote_unit: string},
         * @object {create_at: int},
         * @object {user_id: int},
         * @object {value: float},
         */
        this.$publish.bind('exchange/order/cancel', (data) => {
          data.assigning = data.assigning ? 1 : 0;

          if (

            // Сверяем локальный штат пользователя
            // это у нас пользовательский [id] с полученным из события пользовательским [user_id],
            // если аргументы совпадают то это значит что ордер сработал частично или полностью.
            data.user_id === Number(this.$auth.$state.user.id)

          ) {
            this.setBalance(data.assigning ? data.base_unit : data.quote_unit);
          }
        });
      } else {
        this.overlay = false;
      }
    },
    methods: {

      /**
       * Получаем список всех активов.
       */
      getAssets() {
        this.overlay = true;
        this.$axios.$post(Api.exchange.getAssets).then((response) => {

          this.assets = response.currencies ?? [];
          this.assets.map(item => {
            this.$axios.$get(Api.exchange.getPrice + '?base_unit=' + item.symbol + '&quote_unit=usdt').then((response) => {
              item.convert = this.$decimal.truncate(response.price ? (item.balance ? response.price * item.balance : 0) : (item.balance ? item.balance : 0), 8)
            });
          });
          this.overlay = false;

          // Sort assets by index.
          this.sort();
        });
      },

      /**
       * Обновляем текущий баланс актива.
       * @param unit
       */
      setBalance(unit) {

        let index = this.assets.map((o) => o.symbol).indexOf(unit);

        this.$axios.$post(Api.exchange.getAsset, {unit: unit}).then((response) => {
          this.assets[index].balance = response.currencies[0].balance ? ((response.currencies[0].balance).toFixed(8) > 0 ? response.currencies[0].balance : 0) : 0;

          // Sort assets by index.
          this.sort();
        });
      },

      /**
       * @param unit
       * @param balance
       * @returns {*|number}
       */
      getPrice(unit, balance) {

      },

      /**
       *
       */
      sort() {
        this.assets.sort((a, b) => {
          if (!a.balance) {
            a.balance = 0
          }
          if (!b.balance) {
            b.balance = 0
          }
          return b.balance - a.balance;
        });
      }
    }
  }
</script>

<style scoped>

</style>
