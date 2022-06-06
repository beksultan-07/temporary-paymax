<template>
  <v-card class="ma-1" elevation="0">
    <v-component-fullscreen @v-height="getHeight">

      <!-- Start: search asset element -->
      <v-card-title class="pa-2">
        <v-text-field v-model="search" :label="$vuetify.lang.t('$vuetify.lang_84')" color="primary" dense height="40" hide-details outlined prepend-inner-icon="mdi-layers-search-outline" />
      </v-card-title>
      <!-- Start: search asset element -->

      <v-divider />

      <!-- Start: list assets element -->
      <template v-if="assets.length">
        <template v-if="items.length">
          <v-hover v-slot="{ hover }">
            <v-virtual-scroll :class="hover ? '' : 'overflow-y-hidden'" :height="height" :items="items" bench="0" item-height="50">
              <template v-slot:default="{ item }">
                <v-hover v-slot:default="{ hover }">
                  <v-list-item :color="$vuetify.theme.dark ? 'grey darken-3' : 'deep-purple lighten-5'" :key="item.id" :class="active(item.symbol) ? 'v-list-item--active ' + ($vuetify.theme.dark ? 'grey--text text--darken-3' : 'blue--text text--lighten-5') : ''" :to="'/assets/' + item.symbol + '/deposit'" dense>
                    <v-list-item-avatar size="30">
                      <v-img :src="$storages(['icon'], item.symbol)"/>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title><span :class="($vuetify.theme.dark ? 'white' : 'black') + '--text'">{{ item.symbol.toUpperCase() }}</span></v-list-item-title>
                      <v-list-item-subtitle>{{ item.name }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action class="d-block text-right">
                      <template v-if="hover">
                        <small v-if="$decimal.truncate(item.balance)" class="teal--text">
                          ≈ ${{ item.price ? $decimal.truncate($decimal.mul(item.balance, item.price)) : $decimal.truncate(item.balance) }}
                        </small>
                      </template>
                      <template v-else>
                        <small v-if="$decimal.truncate(item.balance)" class="teal--text">
                          {{ $decimal.truncate(item.balance) }}
                        </small>
                      </template>
                    </v-list-item-action>
                  </v-list-item>
                </v-hover>
              </template>
            </v-virtual-scroll>
          </v-hover>
        </template>
        <template v-else>
          <v-layout :style="'height: '+ (height) +'px'" wrap>
            <v-flex/>
            <v-flex align-self-center class="text-center mx-5">
              <div>
                <v-icon size="50">
                  mdi-database-remove-outline
                </v-icon>
              </div>
              <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_49') }}</h4>
            </v-flex>
            <v-flex/>
          </v-layout>
        </template>
      </template>
      <template v-else-if="!overlay">
        <v-layout wrap>
          <v-flex/>
          <v-flex align-self-center class="text-center mx-5">
            <div>
              <v-icon size="50">
                mdi-database-remove-outline
              </v-icon>
            </div>
            <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_78') }}</h4>
          </v-flex>
          <v-flex/>
        </v-layout>
      </template>
      <!-- End: list assets element -->

      <v-overlay :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" :value="overlay" absolute opacity="0.8">
        <v-progress-circular color="yellow darken-3" indeterminate size="50" />
      </v-overlay>

    </v-component-fullscreen>
  </v-card>
</template>

<script>

  import Fullscreen from "../Common/Fullscreen";
  import Api from "../../libs/api";

  export default {
    name: "v-component-assets",
    components: {
      'v-component-fullscreen': Fullscreen
    },
    data() {
      return {
        overlay: true,
        search: null,
        assets: [],
        height: 0
      }
    },
    mounted() {
      this.getAssets();

      /**
       * @event 'withdraw/cancel'
       * @object {unit: string},
       * @object {value: float64}
       */
      this.$nuxt.$on('withdraw/cancel', (data) => {
        this.assets.map(item => {
          if(item.symbol === data[0].unit) {
            item.balance += data[0].value; return item;
          }
        });
      });

      /**
       * @event 'withdraw/create'
       * @object {unit: string},
       * @object {value: float64}
       */
      this.$nuxt.$on('withdraw/create', (data) => {
        this.assets.map(item => {
          if(item.symbol === data.unit) {
            item.balance -= data.value; return item;
          }
        });
      });
    },
    methods: {

      /**
       * @param h
       */
      getHeight(h) {
        this.height = h - 57;
      },

      /**
       * Получаем список всех активов.
       */
      getAssets() {
        this.overlay = true;
        this.$axios.$post(Api.exchange.getAssets).then((response) => {

          this.assets = response.currencies ?? [];
          this.assets.map(item => {
            this.$axios.$get(Api.exchange.getPrice + '?base_unit=' + item.symbol + '&quote_unit=usdt').then((response) => {
              item.price = response.price;
            });
          });
          this.overlay = false;

          // Sort assets by index.
          this.sort();
        });
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
      },

      /**
       * @param unit
       * @returns {boolean}
       */
      active(unit) {
        if (this.$route.params.unit === null) {
          return false
        }

        return this.$route.params.unit === unit;
      }
    },
    computed: {

      /**
       * @returns {[]|*[]}
       */
      items() {
        if(this.search) {
          return this.assets.filter((item) => {
            return item.symbol.toUpperCase().includes(this.search.toUpperCase()) || item.name.toUpperCase().includes(this.search.toUpperCase())
          });
        } else {
          return this.assets;
        }
      }
    }
  }
</script>

<style scoped>

</style>