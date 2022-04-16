<template>
  <div>

    <!-- Start: tabs bar -->
    <v-tabs class="px-4 my-4" color="yellow darken-3">
      <v-tab exact to="?type=2">{{ $vuetify.lang.t('$vuetify.lang_64') }}</v-tab>
      <v-tab exact to="?type=1">{{ $vuetify.lang.t('$vuetify.lang_121') }}</v-tab>
      <v-tab exact to="?type=0">{{ $vuetify.lang.t('$vuetify.lang_120') }}</v-tab>
    </v-tabs>
    <!-- End: tabs bar -->

    <v-divider class="pb-5"/>
    <v-row>

      <template v-if="transactions.length">

        <!-- Start: history list -->
        <div class="history">
          <v-expansion-panels flat accordion>
            <v-expansion-panel v-for="item in transactions" :key="item.id">
              <v-expansion-panel-header class="py-2">
                <v-row justify="center" no-gutters>
                  <v-col cols="12" sm="3">
                    <v-row justify="center" no-gutters>
                      <v-col align-self="center" cols="12" sm="2">
                        <template v-if="item.type === 'WITHDRAWS'">
                          <v-icon :color="item.status === 'PENDING' ? 'light-blue' : 'green'" size="48">
                            mdi-arrow-down-bold-circle-outline
                          </v-icon>
                        </template>
                        <template v-else>
                          <v-icon :color="item.status === 'PENDING' ? 'light-blue' : 'green'" size="48">
                            mdi-arrow-up-bold-circle-outline
                          </v-icon>
                        </template>
                      </v-col>
                      <v-col align-self="center" cols="12" sm="10">
                        <div class="ml-2 mb-1">
                          {{ $moment(item.create_at).format('DD MMM') }}
                        </div>
                        <div class="ml-2">
                          <small class="grey--text">{{ $moment(item.create_at).format('hh:mm:ss') }}</small>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                  <v-col align-self="center" cols="12" sm="3">
                    Asset: <b>{{ item.unit.toUpperCase() }}</b>
                  </v-col>
                  <v-col align-self="center" cols="12" sm="3">
                    Quantity: -{{ item.value }} <b>{{ item.unit.toUpperCase() }}</b>
                  </v-col>
                  <v-col align-self="center" cols="12" sm="3">
                    <template v-if="item.status === 'PENDING'">
                      <div style="width: 150px;" class="light-blue lighten-2 white--text pa-1 rounded text-center">
                        PENDING
                      </div>
                    </template>
                    <template v-if="item.status === 'FILLED'">
                      <div style="width: 150px;" class="green lighten-2 white--text pa-1 rounded text-center">
                        FILLED
                      </div>
                    </template>
                    <template v-if="item.status === undefined">
                      <div style="width: 150px;" class="red lighten-2 white--text pa-1 rounded text-center">
                        CANCEL
                      </div>
                    </template>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
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
                        {{ item.value + item.fees }} {{ item.unit.toUpperCase() }}
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
                    <v-btn color="white--text red darken-1 text-capitalize" large block elevation="0">{{ $vuetify.lang.t('$vuetify.lang_124') }}</v-btn>
                  </v-list-item>
                </v-list>
                <v-divider/>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <!-- End: history list -->

        <!-- Start: pagination -->
        <v-container v-if="length > 1" class="max-width">
          <v-row justify="center">
            <v-col cols="8">
              <v-pagination v-model="page" circle @input="getMore()" :length="length"></v-pagination>
            </v-col>
          </v-row>
        </v-container>
        <!-- End: pagination -->

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

    </v-row>
  </div>
</template>

<script>

  import Api from "@/libs/api";

  export default {
    name: "history",
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
      $route(params) {
        this.getTransactions(Number(params.query.type));
      }
    },
    mounted() {
      this.getTransactions(2);
    },
    methods: {
      getTransactions(type) {
        this.overlay = true;

        this.$axios.$post(Api.exchange.getTransactions, {
          unit: this.$route.params.unit,
          transaction_type: type,
          limit: 8,
          page: this.page
        }).then((response) => {
          this.transactions = response.transactions ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/8);
          this.overlay = false;
        });
      },
      getMore() {
        this.getTransactions(2);
      }
    }
  }
</script>

<style scoped>
  .history{
    overflow-y: auto;
    width: 100%;
    max-height: 620px;
  }
  .history::-webkit-scrollbar {
    width: 0;
  }
</style>
