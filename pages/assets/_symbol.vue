<template>
  <v-card class="ma-1" elevation="0">
    <v-component-inner>
      <template v-if="symbol">

        <!-- Start: tabs bar -->
        <v-tabs v-model="eyelet" color="primary" show-arrows>
          <v-tab :to="'/assets/' + symbol + '/deposit'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_91') }}</v-tab>
          <v-tab :to="'/assets/' + symbol + '/withdraw'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_92') }}</v-tab>
          <v-tab :to="'/assets/' + symbol + '/history'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_93') }}</v-tab>
          <v-tab :to="'/assets/' + symbol + '/fees'" class="text-capitalize">{{ $vuetify.lang.t('$vuetify.lang_151') }}</v-tab>
        </v-tabs>
        <!-- End: tabs bar -->

        <v-divider />

        <!-- Start: header bar -->
        <v-component-header :asset="asset" :symbol="symbol" />
        <!-- End: header bar -->

        <!-- Start: child container -->
        <nuxt-child />
        <!-- End: child container -->

      </template>

      <!-- Start: analysis asset -->
      <template v-else>
        <v-component-analysis />
      </template>
      <!-- End: select asset -->

    </v-component-inner>

  </v-card>
</template>

<script>

  import Header from "../../components/Asset/Header";
  import Inner from "../../components/Common/Inner";
  import Analysis from "../../components/Asset/Analysis";
  import Api from "../../libs/api";

  export default {
    components: {
      'v-component-header': Header,
      'v-component-inner': Inner,
      'v-component-analysis': Analysis
    },
    data() {
      return {
        symbol: undefined,
        asset: undefined,
        eyelet: 0
      }
    },

    /**
     * @param $axios
     * @param params
     * @param error
     * @returns {Promise<{symbol: *, asset: *}|{symbol: *}>}
     */
    async asyncData({ $axios, params, error }) {
      let symbol = params.symbol;
      if (symbol) {
        return $axios.$post(Api.exchange.getAsset, {symbol: symbol}).then((response) => {
          let asset = response.currencies.lastItem
          asset.volume = asset.volume ?? 0;
          asset.balance = asset.balance ?? 0;
          return { symbol, asset }
        }).catch(e => {
          error(e)
        });
      }
      return { symbol };
    }
  }
</script>

<style scoped>

</style>