<template>
  <div>
    <template v-if="transactions.length">
      <div class="history">

        <!-- Start: data table -->
        <v-data-table :headers="headlines.top" :items="transactions" :page.sync="page" item-key="id" :items-per-page="15" hide-default-footer show-expand single-expand>
          <template v-slot:item.data-table-expand="{ item, expand, isExpanded }">
            <template v-if="isExpanded">
              <v-icon @click="expand(!isExpanded)">
                mdi-chevron-up
              </v-icon>
            </template>
            <template v-else>
              <v-icon @click="expand(!isExpanded)">
                mdi-chevron-down
              </v-icon>
            </template>
          </template>
          <template v-slot:item.type="{ item }">
            <template v-if="item.type === 'WITHDRAWS'">
              <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'red lighten-5 red--text') + ' pa-1 rounded-xl text-center'">
                <v-icon :color="item.status === 'PENDING' ? 'light-blue' : 'green'" size="15">
                  mdi-arrow-top-left
                </v-icon>
                {{ $vuetify.lang.t('$vuetify.lang_92') }}
              </div>
            </template>
            <template v-else>
              <div style="width: 120px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'blue lighten-5 blue--text') + ' pa-1 rounded-xl text-center'">
                <v-icon :color="item.status === 'PENDING' ? 'light-blue' : 'green'" size="15">
                  mdi-arrow-bottom-left
                </v-icon>
                {{ $vuetify.lang.t('$vuetify.lang_91') }}
              </div>
            </template>
          </template>
          <template v-slot:item.unit="{ item }">
            {{ item.unit.toUpperCase() }}
          </template>
          <template v-slot:item.value="{ item }">
            -{{ item.value }} <b>{{ item.unit.toUpperCase() }}</b>
          </template>
          <template v-slot:item.status="{ item }">
            <template v-if="item.status === 'PENDING'">
              <div style="width: 150px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
                {{ $vuetify.lang.t('$vuetify.lang_131') }}
              </div>
            </template>
            <template v-if="item.status === 'FILLED'">
              <div style="width: 150px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
                {{ $vuetify.lang.t('$vuetify.lang_129') }}
              </div>
            </template>
            <template v-if="item.status === undefined">
              <div style="width: 150px;" :class="($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-3 brown--text') + ' pa-1 rounded-xl text-center'">
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
                <v-list two-line>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_105') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        -{{ item.value }} {{ item.unit.toUpperCase() }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_20') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        {{ item.fees }} {{ item.unit.toUpperCase() }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_107') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        {{ item.value }} {{ item.unit.toUpperCase() }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_104') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        {{ item.to }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-title>
                        <v-btn-toggle class="text-uppercase" dense>
                          <v-btn color="blue white--text">
                            {{ $vuetify.lang.t('$vuetify.lang_113') }}: {{ item.platform }}({{ item.unit.toUpperCase() }})
                          </v-btn>
                          <v-btn color="amber white--text">
                            {{ $vuetify.lang.t('$vuetify.lang_125') }}: {{ item.protocol ? item.protocol : 'MAINNET' }}
                          </v-btn>
                        </v-btn-toggle>
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_118') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        {{ $moment(item.create_at).format('DD/M/YYYY hh:mm:ss') }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item>
                    <v-item-group>
                      <v-list-item-subtitle>
                        {{ $vuetify.lang.t('$vuetify.lang_119') }}
                      </v-list-item-subtitle>
                      <v-list-item-title>
                        {{ item.id }}
                      </v-list-item-title>
                    </v-item-group>
                  </v-list-item>
                  <v-list-item v-if="item.status === 'PENDING' && item.type === 'WITHDRAWS'">
                    <v-btn color="white--text red text-capitalize" @click="cancelWithdraw(item.id)" large block elevation="0">{{ $vuetify.lang.t('$vuetify.lang_124') }}</v-btn>
                  </v-list-item>
                </v-list>
              </v-card>
            </td>
          </template>
        </v-data-table>
        <!-- End: data table -->

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

    <!-- Start: no history -->
    <template v-else-if="!overlay">
      <div class="mx-4" style="width: 100%;height: 620px;">
        <v-layout fill-height wrap>
          <v-flex/>
          <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
            <v-img class="ma-auto" width="250" src="/asset/2.png" />
            <h2>{{ $vuetify.lang.t('$vuetify.lang_123') }}</h2>
            {{ $vuetify.lang.t('$vuetify.lang_122') }}
          </v-flex>
          <v-flex/>
        </v-layout>
      </div>
    </template>
    <!-- End: no history -->

    <v-overlay absolute :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" opacity="0.8" :value="overlay">
      <v-progress-circular color="yellow darken-3" indeterminate size="50" />
    </v-overlay>

  </div>
</template>

<script>

  import Api from "@/libs/api";

  export default {
    name: "type",
    data() {
      return {
        transactions: [],
        overlay: true,
        count: 0,
        length: 0,
        page: 1
      }
    },
    watch: {
      /**
       * @param params
       */
      $route(params) {
        this.getTransactions();
      }
    },
    mounted() {
      this.getTransactions();
    },
    methods: {

      /**
       *
       */
      getTransactions() {
        this.overlay = true;

        this.$axios.$post(Api.exchange.getTransactions, {
          unit: this.$route.params.unit,
          transaction_type: this.type,
          limit: 10,
          page: this.page
        }).then((response) => {
          this.transactions = response.transactions ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/10);
          this.overlay = false;
        });
      },

      /**
       *
       */
      getMore() {
        this.getTransactions();
      },

      /**
       * @param id
       */
      cancelWithdraw(id) {
        this.$axios.$post(Api.exchange.cancelWithdraw, {
          // Идентификатор вывода для удаления.
          id: id
        }).then(() => {
          this.$nuxt.$emit('withdraw/cancel', this.transactions.filter(item => item.id === id).map(item => item));

          this.transactions.map(item => {
            if(item.id === id) {
              item.status = undefined; return item;
            }
          });

        }).catch((error) => {
          this.$snackbar.open({content: `${error.response.data.code}: ${error.response.data.message}`, color: 'red darken-2'});
        });
      }
    },
    computed: {

      /**
       * @returns {number}
       */
      type() {
        switch (this.$route.params.type) {
          case 'deposit':
            return 0
          case 'withdraw':
            return 1
          default:
            return 2
        }
      },

      /**
       * @returns {{top: [{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string},{text: string, sortable: boolean, align: string, value: string}]}}
       */
      headlines() {
        return {
          top: [
            {
              text: this.$vuetify.lang.t('$vuetify.lang_82'),
              align: 'start',
              sortable: false,
              value: 'type'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_142'),
              align: 'start',
              sortable: false,
              value: 'unit'
            }, {
              text: this.$vuetify.lang.t('$vuetify.lang_53'),
              align: 'start',
              sortable: true,
              value: 'value'
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
          ]
        }
      }
    }
  }
</script>

<style scoped>
  .history {
    overflow-y: auto;
    width: 100%;
    max-height: 620px;
  }
  .history::-webkit-scrollbar {
    width: 0;
  }
</style>
