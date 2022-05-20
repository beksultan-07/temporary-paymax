<template>
  <div class="mx-4 mt-3">

    <!-- Start: fees info -->
    <v-row class="mb-2" align="center">
      <v-col cols="12" md="6">
        <v-card height="250" outlined rounded="lg">
          <v-card-title>
            {{ $vuetify.lang.t('$vuetify.lang_148') }}
          </v-card-title>
          <v-card-subtitle>
            {{ asset.fees_trade }}%
          </v-card-subtitle>
          <v-divider />
          <v-card-text>
            {{ $vuetify.lang.t('$vuetify.lang_150') }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">
        <v-card height="250" outlined rounded="lg">
          <v-card-title>
            {{ $vuetify.lang.t('$vuetify.lang_149') }}
          </v-card-title>
          <v-card-subtitle>
            {{ asset.fees_discount ? $decimal.truncate($decimal.sub(asset.fees_trade, asset.fees_discount)) : 0 }}%
          </v-card-subtitle>
          <v-divider />
          <v-card-text>
            {{ $vuetify.lang.t('$vuetify.lang_147') }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- End: fees info -->

  </div>
</template>

<script>
  import Api from "@/libs/api";

  export default {
    name: "fees",
    data() {
      return {
        asset: {
          fees_trade: 0,
          fees_discount: 0
        }
      }
    },
    mounted() {
      this.getAsset();
    },
    methods: {

      /**
       *
       */
      getAsset() {
        this.$axios.$post(Api.exchange.getAsset, {unit: this.$route.params.unit}).then((response) => {
          this.asset = response.currencies.lastItem ?? {};
        }).catch(e => {
          console.log(e)
        });
      }
    }
  }
</script>

<style scoped>

</style>