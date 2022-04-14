<template>
  <div>
    <v-divider class="mt-5 pb-5"/>
    <v-row>
      <div id="history-scroll">
        <v-expansion-panels flat accordion>
          <v-expansion-panel v-for="item in transactions" :key="item.id">
            <v-expansion-panel-header class="py-4">
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
              </v-list>
              <v-divider/>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
      <v-container class="max-width">
        <v-row justify="center">
          <v-col cols="8">
            <v-pagination v-model="page" @input="getMore()" :length="length"></v-pagination>
          </v-col>
        </v-row>
      </v-container>
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
        count: 0,
        length: 0,
        page: 1
      }
    },
    mounted() {
      this.getTransactions();
    },
    created() {
      this.$nuxt.$on('my-custom-event', (test) => {
        console.log("my-custom-event", test);
      });
    },
    methods: {
      getTransactions() {
        this.$axios.$post(Api.exchange.getTransactions, {
          unit: this.$route.params.unit,
          transaction_type: 2,
          limit: 8,
          page: this.page
        }).then((response) => {
          this.transactions = response.transactions ?? [];
          this.count = response.count ?? 0;
          this.length = Math.ceil(this.count/8);
        });
      },
      getMore() {
        this.getTransactions();
      }
    },
    beforeDestroy() {
      this.$nuxt.$off('my-custom-event');
    }
  }
</script>

<style scoped>
  #history-scroll{
    overflow-y: auto;
    width: 100%;
    max-height: 620px;
  }
  #history-scroll::-webkit-scrollbar {
    width: 0;
  }
</style>
