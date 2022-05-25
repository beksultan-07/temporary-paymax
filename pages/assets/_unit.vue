<template>
  <v-card class="ma-1" elevation="0">
    <v-component-fullscreen>
      <template v-if="unit">

        <!-- Start: tabs bar -->
        <v-tabs v-model="eyelet" color="primary" show-arrows>
          <v-tab :to="'/assets/' + unit + '/deposit'">{{ $vuetify.lang.t('$vuetify.lang_91') }}</v-tab>
          <v-tab :to="'/assets/' + unit + '/withdraw'">{{ $vuetify.lang.t('$vuetify.lang_92') }}</v-tab>
          <v-tab :to="'/assets/' + unit + '/history'">{{ $vuetify.lang.t('$vuetify.lang_93') }}</v-tab>
          <v-tab :to="'/assets/' + unit + '/fees'">{{ $vuetify.lang.t('$vuetify.lang_151') }}</v-tab>
        </v-tabs>
        <!-- End: tabs bar -->

        <v-divider />

        <!-- Start: header bar -->
        <v-component-header :asset="asset" :unit="unit" />
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

    </v-component-fullscreen>

  </v-card>
</template>

<script>

  import Header from "../../components/Asset/Header";
  import Fullscreen from "../../components/Common/Fullscreen";
  import Analysis from "../../components/Asset/Analysis";
  import Api from "../../libs/api";

  export default {
    name: "unit",
    components: {
      'v-component-header': Header,
      'v-component-fullscreen': Fullscreen,
      'v-component-analysis': Analysis
    },
    data() {
      return {
        unit: undefined,
        asset: undefined,
        eyelet: 0
      }
    },

    /**
     * @param $axios
     * @param params
     * @param error
     * @returns {Promise<{unit: *, asset: *}|{unit: *}>}
     */
    async asyncData({ $axios, params, error }) {
      let unit = params.unit;
      if (unit) {
        return $axios.$post(Api.exchange.getAsset, {unit: unit}).then((response) => {
          let asset = response.currencies.lastItem
          asset.volume = asset.volume ?? 0;
          asset.balance = asset.balance ?? 0;
          return { unit, asset }
        }).catch(e => {
          error(e)
        });
      }
      return { unit };
    }
  }
</script>

<style scoped>

</style>