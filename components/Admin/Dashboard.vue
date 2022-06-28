<template>
  <div class="pa-4">

    <!-- Start: dashboard info -->
    <v-row align="center">
      <v-col v-if="dashboard.accounts" cols="12" md="3">
        <v-card outlined rounded="lg">
          <v-card-title>
            Accounts status
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.accounts.disable ? dashboard.accounts.disable : 0 }}</h2>
                <small class="red--text">Disable</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.accounts.enable ? dashboard.accounts.enable : 0 }}</h2>
                <small class="teal--text">Enable</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-if="dashboard.chains" cols="12" md="3">
        <v-card outlined rounded="lg">
          <v-card-title>
            Chains status
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.chains.disable ? dashboard.chains.disable : 0 }}</h2>
                <small class="red--text">Disable</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.chains.enable ? dashboard.chains.enable : 0 }}</h2>
                <small class="teal--text">Enable</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-if="dashboard.currencies" cols="12" md="3">
        <v-card outlined rounded="lg">
          <v-card-title>
            Currencies status
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.currencies.disable ? dashboard.currencies.disable : 0 }}</h2>
                <small class="red--text">Disable</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.currencies.enable ? dashboard.currencies.enable : 0 }}</h2>
                <small class="teal--text">Enable</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-if="dashboard.pairs" cols="12" md="3">
        <v-card outlined rounded="lg">
          <v-card-title>
            Pairs status
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.pairs.disable ? dashboard.pairs.disable : 0 }}</h2>
                <small class="red--text">Disable</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.pairs.enable ? dashboard.pairs.enable : 0 }}</h2>
                <small class="teal--text">Enable</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-if="dashboard.transactions" cols="12" md="6">
        <v-card outlined rounded="lg">
          <v-card-title>
            Transactions stats
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.transactions.filled ? dashboard.transactions.filled : 0 }}</h2>
                <small class="red--text">Filled</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.transactions.pending ? dashboard.transactions.pending : 0 }}</h2>
                <small class="teal--text">Pending</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col v-if="dashboard.orders" cols="12" md="6">
        <v-card outlined rounded="lg">
          <v-card-title>
            Orders pending stats
          </v-card-title>
          <v-divider />
          <v-card-text>
            <v-layout fill-height wrap>
              <v-flex class="text-center">
                <h2>{{ dashboard.orders.buy ? dashboard.orders.buy : 0 }}</h2>
                <small class="teal--text">Buy</small>
              </v-flex>
              <v-divider vertical />
              <v-flex class="text-center">
                <h2>{{ dashboard.orders.sell ? dashboard.orders.sell : 0 }}</h2>
                <small class="red--text">Sell</small>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
    <!-- End: dashboard info -->

  </div>
</template>

<script>
  import Api from "@/libs/api";

  export default {
    name: "v-component-dashboard",
    data() {
      return {
        dashboard: {},
      }
    },
    mounted() {
      this.getDashboard();
    },
    methods: {
      getDashboard() {

        /**
         * {
         *     "dashboard": {
         *         "account": {
         *             "enable": 3
         *         },
         *         "chain": {
         *             "disable": 1,
         *             "enable": 3
         *         },
         *         "currency": {
         *             "disable": 3,
         *             "enable": 8
         *         },
         *         "pair": {
         *             "disable": 3,
         *             "enable": 12
         *         },
         *         "transaction": {
         *             "pending": 1
         *         },
         *         "order": {
         *             "buy": 58,
         *             "sell": 81
         *         },
         *         "reserves": [
         *             {
         *                 "symbol": "link"
         *             },
         *             {
         *                 "symbol": "btc"
         *             },
         *             {
         *                 "symbol": "omg"
         *             },
         *             {
         *                 "symbol": "trx"
         *             },
         *             {
         *                 "symbol": "gbp"
         *             },
         *             {
         *                 "symbol": "aave"
         *             },
         *             {
         *                 "symbol": "bnb"
         *             },
         *             {
         *                 "symbol": "usdt",
         *                 "value": 1500,
         *                 "charged": 1.2208006949999586
         *             },
         *             {
         *                 "symbol": "eth",
         *                 "value": 1,
         *                 "charged": 1.9430811422568
         *             },
         *             {
         *                 "symbol": "eur"
         *             },
         *             {
         *                 "symbol": "uah"
         *             }
         *         ]
         *     }
         * }
         */

        this.$axios.$post(Api.admin.getDashboard).then((response) => {
          console.log(response.dashboard);
          this.dashboard = response.dashboard
        });
      }
    }
  }
</script>

<style scoped>

</style>