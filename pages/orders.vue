<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: assets list component -->
      <v-col cols="12" md="3" sm="6">
        <v-card class="ma-1" elevation="0">
        <v-component-fullscreen>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item>
                <v-list-item-content>
                  Открытые
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Выполненные
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-component-fullscreen>
        </v-card>
      </v-col>
      <!-- End: assets list component -->

      <!-- Start: child container -->
      <v-col cols="12" md="9" sm="6">
        <v-card class="ma-1" elevation="0">
          <v-component-fullscreen  @v-height="getHeight">
            <div class="orders" :style="'height:' + height + 'px'">
            <v-expansion-panels flat accordion>
              <v-expansion-panel v-for="item in orders" :key="item.id">
                <v-expansion-panel-header @click="getTradestats(item.id)">
                  <v-row justify="center" no-gutters>
                    <v-col align-self="center" cols="12" sm="1">
                      <template v-if="item.assigning">
                        <div style="width: 90px;" class="red lighten-5 red--text pa-1 rounded-xl text-center">
                          <v-icon color="red" size="15">
                            mdi-arrow-top-left
                          </v-icon>
                          {{ $vuetify.lang.t('$vuetify.lang_58') }}
                        </div>
                      </template>
                      <template v-else>
                        <div style="width: 90px;" class="blue lighten-5 blue--text pa-1 rounded-xl text-center">
                          <v-icon color="blue" size="15">
                            mdi-arrow-bottom-left
                          </v-icon>
                          {{ $vuetify.lang.t('$vuetify.lang_57') }}
                        </div>
                      </template>
                    </v-col>
                    <v-col align-self="center" class="text-center" cols="12" sm="2">
                      <b class="text-uppercase">{{ item.base_unit }}/{{ item.quote_unit }}</b>
                    </v-col>
                    <v-col align-self="center" cols="12" sm="2">
                      <div class="grey--text">{{ $vuetify.lang.t('$vuetify.lang_53') }}:</div>
                      <div>{{ $decimal.truncate(item.quantity, $decimal.decimal(item.quantity)) }} {{ item.base_unit.toUpperCase() }}</div>
                    </v-col>
                    <v-col align-self="center" cols="12" sm="2">
                      <div class="grey--text">{{ $vuetify.lang.t('$vuetify.lang_52') }}:</div>
                      <div>{{ item.price }} {{ item.quote_unit.toUpperCase() }}</div>
                    </v-col>
                    <v-col align-self="center" cols="12" sm="2">
                      <div class="grey--text">{{ $vuetify.lang.t('$vuetify.lang_56') }}:</div>
                      <div>{{ $decimal.truncate(item.quantity * item.price, 8) }} {{ item.quote_unit.toUpperCase() }}</div>
                    </v-col>
                    <v-col align-self="center" cols="12" sm="2">
                      <template v-if="item.status === 'PENDING'">
                        <div style="width: 120px;" class="grey lighten-3 brown--text pa-1 rounded-xl text-center">
                          {{ $vuetify.lang.t('$vuetify.lang_131') }}
                        </div>
                      </template>
                      <template v-if="item.status === 'FILLED'">
                        <div style="width: 120px;" class="grey lighten-3 brown--text pa-1 rounded-xl text-center">
                          {{ $vuetify.lang.t('$vuetify.lang_129') }}
                        </div>
                      </template>
                      <template v-if="item.status === undefined">
                        <div style="width: 120px;" class="grey lighten-3 brown--text pa-1 rounded-xl text-center">
                          {{ $vuetify.lang.t('$vuetify.lang_130') }}
                        </div>
                      </template>
                    </v-col>
                    <v-col cols="12" sm="1">
                      <div class="ml-2 mb-1">
                        {{ $moment(item.create_at).format('DD MMM') }}
                      </div>
                      <div class="ml-2">
                        <small class="grey--text">{{ $moment(item.create_at).format('hh:mm:ss') }}</small>
                      </div>
                    </v-col>
                  </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <ul>
                    <li v-for="child in tradestats" :key="child.id">
                      {{ child.assigning }}
                    </li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>

            <!-- Start: pagination -->
            <v-container v-if="length > 1" class="max-width">
              <v-row justify="center">
                <v-col cols="8">
                  <v-pagination v-model="page" circle @input="getMore()" :length="length"></v-pagination>
                </v-col>
              </v-row>
            </v-container>
            <!-- End: pagination -->

            </div>
          </v-component-fullscreen>
        </v-card>
      </v-col>
    </v-row>

  </section>
</template>

<script>
  import Api from "@/libs/api";
  import Fullscreen from "@/components/Common/Fullscreen";

  export default {
    auth: true,
    name: "orders",
    components: {
      'v-component-fullscreen': Fullscreen
    },
    data() {
      return {
        orders: [],
        tradestats: [],
        overlay: true,
        count: 0,
        length: 0,
        page: 1,
        height: 0
      }
    },
    mounted() {
      this.getOrders();
    },
    methods: {

      /**
       * @param h
       */
      getHeight(h) {
        this.height = h;
      },

      /**
       *
       */
      getOrders() {
        this.$axios.$post(Api.exchange.getOrders, {
          owner: true,
          assigning: 3,
          limit: 12,
          page: this.page
        }).then((response) => {
          this.orders = response.orders ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/12);
          this.overlay = false;
        });
      },

      /**
       * @param id
       */
      getTradestats(id) {
        this.$axios.$post(Api.exchange.getTradestats, {
          order_id: id,
          owner: true,
          assigning: 3,
          limit: 100,
        }).then((response) => {
          console.log(response);
          this.tradestats = response.tradestats ?? [];
        });
      },

      /**
       *
       */
      getMore() {
        this.getOrders();
      },

    }
  }
</script>

<style scoped>
  .orders {
    overflow-y: auto;
    width: 100%;
  }
  .orders::-webkit-scrollbar {
    width: 0;
  }
</style>