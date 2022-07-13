<template>
  <section class="pa-0" role="main">

    <v-row class="ma-1" no-gutters>

      <!-- Start: order book component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-order-book :unit="unit" />
      </v-col>
      <!-- End: order book component -->

      <!-- Start: pair trade chart component -->
      <v-col cols="12" md="6" sm="6">
        <nuxt-child />
      </v-col>
      <!-- End: pair trade chart component -->

      <!-- Start: list of trading pairs market component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-market :unit="unit" />
      </v-col>
      <!-- End: list of trading pairs market component -->

      <!-- Start: trade book component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-trade-book :unit="unit" />
      </v-col>
      <!-- End: trade book component -->

      <!-- Start: buy order form component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-order-form :unit="unit" assigning="buy" />
      </v-col>
      <!-- End: order form component -->

      <!-- Start: sell order form component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-order-form :unit="unit" assigning="sell" />
      </v-col>
      <!-- End: order form component -->

      <!-- Start: common component -->
      <v-col cols="12" md="3" sm="6">
        <v-component-common />
      </v-col>
      <!-- End: common component -->

    </v-row>

  </section>
</template>

<script>

  import Api from "../libs/api";
  import Market from '../components/Trade/Market';
  import OrderForm from '../components/Trade/OrderForm';
  import OrderBook from "../components/Trade/OrderBook";
  import TradeBook from "../components/Trade/TradeBook";
  import Common from "../components/Trade/Common";

  export default {
    auth: false,
    components: {
      'v-component-market': Market,
      'v-component-order-form': OrderForm,
      'v-component-order-book': OrderBook,
      'v-component-trade-book': TradeBook,
      'v-component-common': Common
    },
    data() {
      return {
        unit: undefined
      }
    },

    /**
     * @param $axios
     * @param $api
     * @param params
     * @param error
     * @returns {Promise<{unit: *}>}
     */
    async asyncData({ $axios, $api, params, error }) {
      let unit = params.unit;
      return $axios.$post($api.exchange.getSymbol, {base_unit: unit.split('-')[0], quote_unit: unit.split('-')[1]}).then(() => {
        return { unit }
      }).catch(e => {
        error(e)
      });
    },

    beforeDestroy() {
      this.$publish.unbind(['trade/graph:0', 'order/status', 'order/create', 'order/cancel']);
    }
  }
</script>

<style scoped>

</style>
