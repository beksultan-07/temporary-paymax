<template>
  <v-card class="ma-1" height="500" elevation="0">

    <!-- Start: filter assigning tab element -->
    <v-app-bar color="transparent" height="50" flat>
      <template v-if="hover">
        <v-row no-gutters>
          <v-col cols="4">
            <small :class="$vuetify.theme.dark ? 'grey--text' : ''">{{ $vuetify.lang.t('$vuetify.lang_52') }}<b>({{ query.split('-')[1].toUpperCase() }})</b></small>
          </v-col>
          <v-col class="text-right" cols="4">
            <small :class="$vuetify.theme.dark ? 'grey--text' : ''">{{ $vuetify.lang.t('$vuetify.lang_53') }}<b>({{ query.split('-')[0].toUpperCase() }})</b></small>
          </v-col>
          <v-col class="text-right" cols="4">
            <small :class="$vuetify.theme.dark ? 'grey--text' : ''">{{ $vuetify.lang.t('$vuetify.lang_56') }}<b>({{ query.split('-')[1].toUpperCase() }})</b></small>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <v-tabs fixed-tabs :color="replayColor" v-model="eyelet" icons-and-text>
          <v-tab @click="getOrders(0)">
            <small>{{ $vuetify.lang.t('$vuetify.lang_57') }}</small>
            <v-icon>
              mdi-alpha-b-circle-outline
            </v-icon>
          </v-tab>
          <v-tab @click="getOrders(1)">
            <small>{{ $vuetify.lang.t('$vuetify.lang_58') }}</small>
            <v-icon>
              mdi-alpha-s-circle-outline
            </v-icon>
          </v-tab>
          <v-tab @click="getOrders(2)">
            <small>{{ $vuetify.lang.t('$vuetify.lang_64') }}</small>
            <v-icon>
              mdi-alpha-a-circle-outline
            </v-icon>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <!-- End: filter assigning tab element -->

    <v-divider />

    <!-- Start: orders list element -->
    <template v-if="orders.length">
      <v-virtual-scroll @mouseover="hover = true" @mouseleave="hover = false" :class="hover ? '' : 'overflow-y-hidden'" bench="0" :items="orders" height="393" item-height="30">
        <template v-slot:default="{ item }">
          <v-component-shift-item :width="Number($decimal.div($decimal.mul(item.value, 100), item.quantity).toFixed(0))" :assigning="item.assigning ? 1 : 0" :key="item.id">
            <v-row no-gutters>
              <v-col cols="4">
                <span :class="(item.assigning ? 'red' : 'teal') + '--text'">{{ $decimal.truncate(item.price) }}</span>
              </v-col>
              <v-col :class="'text-right ' + ($vuetify.theme.dark ? 'grey--text' : '')" cols="4">
                {{ $decimal.truncate(item.value) }}
              </v-col>
              <v-col :class="'text-right ' + ($vuetify.theme.dark ? 'grey--text' : '')" cols="4">
                {{ $decimal.truncate($decimal.mul(item.value, item.price)) }}
              </v-col>
            </v-row>
          </v-component-shift-item>
        </template>
      </v-virtual-scroll>
    </template>
    <template v-else-if="!overlay">
      <v-layout style="height: 393px" wrap>
        <v-flex/>
        <v-flex class="text-center mx-5" align-self-center>
          <div>
            <v-icon size="50">
              mdi-database-remove-outline
            </v-icon>
          </div>
          <h4 class="text-overline">{{ $vuetify.lang.t('$vuetify.lang_62') }}</h4>
        </v-flex>
        <v-flex/>
      </v-layout>
    </template>
    <!-- End: orders list element -->

    <!-- Start: price and value element -->
    <template v-if="!overlay">
      <v-divider />
      <v-card-actions style="height: 56px;">
        <v-row justify="center" no-gutters>
          <v-col cols="6">
            <div class="mx-2">
              <v-icon v-if="priceConcurrency === 'red'" :class="priceConcurrency + '--text'">
                mdi-call-received
              </v-icon>
              <v-icon v-else-if="priceConcurrency === 'teal'" :class="priceConcurrency + '--text'">
                mdi-call-made
              </v-icon>
              <v-icon v-else>
                mdi-keyboard-tab
              </v-icon>
              <span :class="priceConcurrency + '--text'">{{ priceCurrent ? $decimal.format(priceCurrent) : $vuetify.lang.t('$vuetify.lang_61') }}</span>
            </div>
          </v-col>
          <v-col class="text-right" cols="6">
            <small class="mx-2">
              {{ eyelet === 1 ? $decimal.truncate(volume) : $decimal.truncate($decimal.mul(volume, priceCurrent)) }}<b>({{ eyelet === 1 ? query.split('-')[0].toUpperCase() : query.split('-')[1].toUpperCase() }})</b>
            </small>
          </v-col>
        </v-row>
      </v-card-actions>
    </template>
    <!-- End: price and value element -->

    <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
      <v-progress-circular color="yellow darken-3" indeterminate size="50" />
    </v-overlay>

  </v-card>
</template>

<script>

  import Api from "../../libs/api";
  import ShiftItem from "./ShiftItem";

  export default {
    name: "v-component-order-book",
    components: {
      'v-component-shift-item': ShiftItem
    },
    props: {
      exchange: {
        type: String
      }
    },
    data() {
      return {
        hover: false,
        query: '--:--',
        overlay: true,
        eyelet: 2,
        orders: [],
        volume: 0,
      }
    },
    watch: {
      $route(e) {
        this.getQuery(
          e.params.exchange
        );
        this.getOrders(2);
      }
    },
    mounted() {

      this.getQuery(this.exchange);

      /**
       * Отслеживаем статус ордера.
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
      this.$publish.bind('order/status', (data) => {

        let index = this.orders.map((o) => o.id).indexOf(data.id);
        let matching = this.orders.some((o) => o.id === data.id);

        if (

          // Сверяем принадлежат ли новые события к данному активу,
          // если аргументы совпадают то привязываем полученные данные из события к данному активу.
          data.base_unit === this.query.split('-')[0] &&
          data.quote_unit === this.query.split('-')[1] &&

          // Проверяем есть ли в массиве объект по идентификатору.
          matching

        ) {

          switch (data.status) {
            case 1:

              // Удаляем ордер с массива по идентификатору.
              this.orders.splice(index, 1);

              break;
            case 2:

              // Обновляем количество монет ордера.
              this.orders[index].value = data.value;

              break

          }

          // Получаем текущий объем в ордерах.
          this.getVolume(this.eyelet);
        }

      });

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
      this.$publish.bind('order/create', (data) => {
        data.assigning = data.assigning ?? 0;

        if (this.eyelet === data.assigning || this.eyelet === 2) {
          this.orders.unshift(Object.assign({}, data));

          // Получаем текущий объем в ордерах.
          this.getVolume(this.eyelet);
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
      this.$publish.bind('order/cancel', (data) => {

        // Удаляем ордер с массива по идентификатору.
        this.orders.splice(this.orders.map((o) => o.id).indexOf(data.id), 1);

        // Получаем текущий объем в ордерах.
        this.getVolume(this.eyelet);

      });

      this.getOrders(2);
    },
    methods: {

      /**
       * Перезаписываем адрес запроса.
       * @param query
       */
      getQuery(query) {
        this.query = query;
      },

      /**
       * @param assigning
       */
      getOrders(assigning) {
        this.overlay = true;

        this.$axios.$post(Api.exchange.getOrders, {
          // Назначение [sell:1] - [buy:0].
          assigning: assigning,
          // Имя актива (symbol-base).
          base_unit: this.query.split('-')[0],
          // Имя актива (symbol-quote).
          quote_unit: this.query.split('-')[1],
          // Показывать записи если они со статусом в ожидании.
          status: 2
        }).then((response) => {

          this.volume = response.volume ?? 0;

          // Записываем список ордеров в ожидании в массив.
          this.orders = response.orders ?? [];
          this.orders.map(item => {
            item.id = Number(item.id); return item;
          });

          this.overlay = false;
        });
      },

      /**
       * @param assigning
       */
      getVolume(assigning) {
        this.$axios.$post(Api.exchange.getOrders, {
          // Назначение [sell:1] - [buy:0].
          assigning: assigning,
          // Имя актива (symbol-base).
          base_unit: this.query.split('-')[0],
          // Имя актива (symbol-quote).
          quote_unit: this.query.split('-')[1],
          // Показывать записи если они со статусом в ожидании.
          status: 2,
          // Количество объектов для вывода.
          limit: 1
        }).then((response) => {
          this.volume = response.volume ?? 0;
        });
      }
    },
    computed: {

      /**
       * @returns {string}
       */
      replayColor() {
        switch (this.eyelet) {
          case 0:
            return 'teal'
          case 1:
            return 'red';
          case 2:
            return 'primary';
        }
      },

      /**
       * @returns {number|*}
       */
      priceCurrent() {
        if (this.orders.length) {
          return this.orders[0].price;
        }
        return 0;
      },

      /**
       * @returns {number|*}
       */
      pricePrevious() {
        if (this.orders.length > 1) {
          return this.orders[1].price;
        }
        return 0;
      },

      /**
       * @returns {string|string}
       */
      priceConcurrency() {

        if (this.orders.length !== 1) {

          if (this.priceCurrent > this.pricePrevious) {
            return 'teal'
          }
          if (this.priceCurrent < this.pricePrevious) {
            return 'red'
          }

        }

        return this.$vuetify.theme.dark ? 'grey' : ''
      }
    }
  }
</script>

<style scoped>

</style>
