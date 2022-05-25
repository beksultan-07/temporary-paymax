<template>
  <div>
    <template v-if="orders.length">
      <div class="orders">

        <!-- Start: data table -->
        <v-data-table :headers="headlines.top" :items="orders" :page.sync="page" item-key="id" :items-per-page="limit" hide-default-footer show-expand single-expand>
          <template v-slot:item.data-table-expand="{ item, expand, isExpanded }">
            <template v-if="isExpanded">
              <v-icon @click="getTransfers(item.id, item.assigning, expand(!isExpanded))">
                mdi-chevron-up
              </v-icon>
            </template>
            <template v-else>
              <v-icon @click="getTransfers(item.id, item.assigning, expand(!isExpanded))">
                mdi-chevron-down
              </v-icon>
            </template>
          </template>
          <template v-slot:item.assigning="{ item }">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <template v-if="item.assigning">
                  <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'red lighten-5 red--text') + ' pa-1 rounded-xl text-center'" v-bind="attrs" v-on="on">
                    <v-icon color="red" size="15">
                      mdi-arrow-top-left
                    </v-icon>
                    {{ $vuetify.lang.t('$vuetify.lang_140') }}
                  </div>
                </template>
                <template v-else>
                  <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'blue lighten-5 blue--text') + ' pa-1 rounded-xl text-center'" v-bind="attrs" v-on="on">
                    <v-icon color="blue" size="15">
                      mdi-arrow-bottom-left
                    </v-icon>
                    {{ $vuetify.lang.t('$vuetify.lang_141') }}
                  </div>
                </template>
              </template>
              <span>{{ $vuetify.lang.t('$vuetify.lang_139') }}: {{ item.id }}</span>
            </v-tooltip>
          </template>
          <template v-slot:item.unit="{ item }">
            <b class="text-uppercase">{{ item.base_unit }}/{{ item.quote_unit }}</b>
          </template>
          <template v-slot:item.quantity="{ item }">
            {{ $decimal.truncate(item.quantity) }} {{ item.base_unit.toUpperCase() }}
          </template>
          <template v-slot:item.price="{ item }">
            {{ item.price }} {{ item.quote_unit.toUpperCase() }}
          </template>
          <template v-slot:item.total="{ item }">
            {{ $decimal.truncate($decimal.mul(item.quantity, item.price)) }} {{ item.quote_unit.toUpperCase() }}
          </template>
          <template v-slot:item.status="{ item }">
            <template v-if="item.status === 'PENDING'">
              <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
                {{ $vuetify.lang.t('$vuetify.lang_131') }}
              </div>
            </template>
            <template v-if="item.status === 'FILLED'">
              <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
                {{ $vuetify.lang.t('$vuetify.lang_129') }}
              </div>
            </template>
            <template v-if="item.status === undefined">
              <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
                {{ $vuetify.lang.t('$vuetify.lang_130') }}
              </div>
            </template>
          </template>
          <template v-slot:item.create_at="{ item }">
            <div>
              {{ $moment(item.create_at).format('DD MMM') }}
            </div>
            <div>
              <small class="grey--text">{{ $moment(item.create_at).format('hh:mm:ss') }}</small>
            </div>
          </template>
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-card class="my-4" outlined elevation="0">
                <v-data-table :headers="headlines.child" :items="transfers" :hide-default-header="!transfers.length" hide-default-footer>
                  <template v-slot:item.quantity="{ item }">
                    <template v-if="item.assigning">
                      - {{ $decimal.truncate(item.quantity) }} {{ item.base_unit.toUpperCase() }}
                    </template>
                    <template v-else>
                      + {{ $decimal.truncate(item.quantity) }} {{ item.base_unit.toUpperCase() }}
                    </template>
                  </template>
                  <template v-slot:item.fees="{ item }">
                    {{ getFees(item) }} {{ item.assigning ? item.quote_unit.toUpperCase() : item.base_unit.toUpperCase() }}
                  </template>
                  <template v-slot:item.price="{ item }">
                    {{ item.price }} {{ item.quote_unit.toUpperCase() }}
                  </template>
                  <template v-slot:item.total="{ item }">
                    {{ $decimal.truncate($decimal.sub($decimal.mul(item.quantity, item.price), getFees(item))) }} {{ item.quote_unit.toUpperCase() }}
                  </template>
                  <template v-slot:item.create_at="{ item }">
                    <div>
                      {{ $moment(item.create_at).format('DD MMM') }}
                    </div>
                    <div>
                      <small class="grey--text">{{ $moment(item.create_at).format('hh:mm:ss') }}</small>
                    </div>
                  </template>
                </v-data-table>
              </v-card>
            </td>
          </template>
        </v-data-table>
        <!-- End: data table -->

        <v-divider />

        <!-- Start: pagination -->
        <v-container v-if="length > 1" class="max-width">
          <v-row justify="center">
            <v-col cols="8">
              <v-pagination v-model="page" @input="getMore()" :length="length"></v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <!-- End: pagination -->

      </div>
    </template>
    <template v-else-if="!overlay">
      <div class="mx-4" :style="'height:90%;width: 100%;'">
        <v-layout fill-height wrap>
          <v-flex/>
          <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
            <v-img class="ma-auto" width="250" src="/asset/3.png" />
            <h2>{{ $vuetify.lang.t('$vuetify.lang_123') }}</h2>
            {{ $vuetify.lang.t('$vuetify.lang_135') }}
          </v-flex>
          <v-flex/>
        </v-layout>
      </div>
    </template>

    <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
      <v-progress-circular color="yellow darken-3" indeterminate size="50" />
    </v-overlay>

  </div>
</template>

<script>
  import Api from "@/libs/api";
  import Fullscreen from "@/components/Common/Fullscreen";

  export default {
    name: "assigning",
    components: {
      'v-component-fullscreen': Fullscreen
    },
    data() {
      return {
        orders: [],
        transfers: [],
        overlay: true,
        limit: 15,
        count: 0,
        length: 0,
        page: 1
      }
    },
    watch: {
      $route() {
        this.getOrders();
      }
    },
    mounted() {
      this.getOrders();
    },
    methods: {

      /**
       *
       */
      getOrders() {
        this.$axios.$post(Api.exchange.getOrders, {
          owner: true,
          assigning: this.assigning,
          status: this.status,
          limit: this.limit,
          page: this.page
        }).then((response) => {
          this.orders = response.orders ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/this.limit);
          this.overlay = false;
        });
      },

      /**
       * TODO: проверить назначения assigning.
       * @param id
       * @param assigning
       * @param callback
       */
      getTransfers(id, assigning, callback) {
        this.$axios.$post(Api.exchange.getTransfers, {
          order_id: id,
          owner: true,
          assigning: assigning,
          limit: 100,
        }).then((response) => {
          this.transfers = response.transfers ?? [];
          if (typeof callback === 'function') {
            callback();
          }
        });
      },

      /**
       *
       */
      getMore() {
        this.getOrders();
      },

      /**
       * @param item
       * @returns {*|number}
       */
      getFees(item) {
        if (item.assigning) {
          return this.$decimal.truncate(this.$decimal.mul(this.$decimal.div(this.$decimal.mul(item.quantity, item.price), 100), item.fees));
        } else {
          return this.$decimal.truncate(this.$decimal.mul(this.$decimal.div(item.quantity, 100), item.fees));
        }
      }
    },
    computed: {

      /**
       * @returns {number}
       */
      status() {
        switch (this.$route.params.status) {
          case 'all':
            return 3
          case 'pending':
            return 2
          case 'filled':
            return 1
        }
      },

      /**
       * @returns {number}
       */
      assigning() {
        switch (this.$route.params.assigning) {
          case 'purchase':
            return 0
          case 'sale':
            return 1
          default:
            return 3
        }
      },

      /**
       * @returns {{top: [{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},null,null], child: [{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string}]}}
       */
      headlines() {
        return {
          top: [
            {
              text: this.$vuetify.lang.t('$vuetify.lang_132'),
              align: 'start',
              sortable: true,
              value: 'assigning'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_133'),
              align: 'start',
              sortable: false,
              value: 'unit'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_53'),
              align: 'start',
              sortable: true,
              value: 'quantity'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_52'),
              align: 'start',
              sortable: true,
              value: 'price'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_56'),
              align: 'start',
              sortable: false,
              value: 'total'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_81'),
              align: 'start',
              sortable: true,
              value: 'status'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_118'),
              align: 'start',
              sortable: true,
              value: 'create_at'
            }
          ],
          child: [
            {
              text: this.$vuetify.lang.t('$vuetify.lang_53'),
              align: 'start',
              sortable: true,
              value: 'quantity'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_20'),
              align: 'start',
              sortable: true,
              value: 'fees'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_52'),
              align: 'start',
              sortable: true,
              value: 'price'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_56'),
              align: 'start',
              sortable: false,
              value: 'total'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_118'),
              align: 'start',
              sortable: true,
              value: 'create_at'
            }
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .orders {
    overflow-y: auto;
    width: 100%;
    max-height: 850px;
  }
  .orders::-webkit-scrollbar {
    width: 0;
  }
</style>