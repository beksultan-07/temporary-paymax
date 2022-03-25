<template>
  <div class="ma-4">

    <!-- Start: tabs bar -->
    <v-tabs v-model="eyelet" color="yellow darken-3">
      <v-tab v-for="item in asset.chains" :key="item.id">{{ item.protocol ? item.protocol : 'mainnet' }}</v-tab>
    </v-tabs>
    <!-- End: tabs bar -->

    <!-- Start: tabs items -->
    <v-tabs-items v-model="eyelet" class="mt-4">
      <v-tab-item v-for="(item, index) in asset.chains" :key="item.id" :transition="false">

        <template v-if="item.address">

          <v-row>
            <v-col md="6">
              1
            </v-col>
            <v-col md="6">
              2
            </v-col>
          </v-row>

        </template>
        <template v-else>
          <v-layout fill-height style="height:200px;" wrap>
            <v-flex/>
            <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
              <v-btn block color="black--text yellow darken-1 text-capitalize" elevation="0" large @click="setAsset(item.platform, index)">{{ $vuetify.lang.t('$vuetify.lang_90') }}</v-btn>
            </v-flex>
            <v-flex/>
          </v-layout>
        </template>

      </v-tab-item>
    </v-tabs-items>
    <!-- End: tabs items -->

  </div>
</template>

<script>
  import Api from "@/libs/api";

  export default {
    name: "withdraw",
    data() {
      return {
        asset: {
          chains: []
        },
        eyelet: 0
      }
    },
    watch: {
      $route() {
        this.getAsset();
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
      },

      /**
       * @param platform
       * @param index
       */
      setAsset(platform, index) {
        this.$axios.$post(Api.exchange.setAsset, {unit: this.$route.params.unit, platform: platform}).then((response) => {
          this.asset.chains[index].address = response.address;
          this.$forceUpdate();
        });
      }
    }
  }
</script>

<style scoped>

</style>
