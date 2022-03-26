<template>
  <div class="ma-4">

    <!-- Start: tabs bar -->
    <v-tabs v-model="eyelet" color="yellow darken-3">
      <v-tab v-for="item in asset.chains" :key="item.id">{{ item.protocol ? item.protocol : 'mainnet' }}</v-tab>
    </v-tabs>
    <!-- End: tabs bar -->

    <!-- Start: tabs items -->
    <v-tabs-items v-model="eyelet" class="mt-3">
      <v-tab-item v-for="(item, index) in asset.chains" :key="item.id" :transition="false" class="mt-1">

        <template v-if="item.address">

          <v-row>
            <v-col md="6">
              <v-row align="center">
                <v-col md="4">
                  <v-component-qrcode :content="item.address.toString()" :width="200" />
                </v-col>
                <v-col md="8">
                  {{ $vuetify.lang.t('$vuetify.lang_85') }}
                </v-col>
              </v-row>
              <v-text-field :disabled="!item.status" :value="item.address" class="mt-4" color="yellow darken-3" outlined>
                <template v-slot:append>
                  <v-icon v-if="item.status" style="cursor: pointer;" @click="$copyText(item.address)">
                    mdi-clipboard-text-multiple-outline
                  </v-icon>
                  <v-icon v-else>
                    mdi-lock-outline
                  </v-icon>
                </template>
              </v-text-field>
            </v-col>
            <v-col md="6">
              <v-card class="mb-4" elevation="0" outlined>
                <v-card-text>
                  {{ $vuetify.lang.t('$vuetify.lang_110') }}
                </v-card-text>
              </v-card>
              <v-card v-if="!item.status" class="mb-4" elevation="0" outlined>
                <v-card-subtitle>
                  <b class="red--text">{{ $vuetify.lang.t('$vuetify.lang_99') }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text class="red--text">
                  {{ $vuetify.lang.t('$vuetify.lang_98') }}
                </v-card-text>
              </v-card>
              <v-card class="mb-4" elevation="0" outlined>
                <v-card-subtitle>
                  <b class="blue--text">{{ item.platform }} - {{ $vuetify.lang.t('$vuetify.lang_86').replace(/%1/g, item['confirmation']) }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text>
                  {{ $vuetify.lang.t('$vuetify.lang_87').replace(/%1/g, item['confirmation']) }}
                </v-card-text>
              </v-card>
              <v-card elevation="0" outlined>
                <v-card-subtitle>
                  <b class="red--text">{{ $vuetify.lang.t('$vuetify.lang_88').replace(/%1/g, asset['min_deposit']).replace(/%2/g, asset['symbol'].toUpperCase()) }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text>
                  {{ $vuetify.lang.t('$vuetify.lang_89') }}
                </v-card-text>
              </v-card>
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

  import Qrcode from "../../../components/Qrcode";
  import Api from "../../../libs/api";

  export default {
    name: "deposit",
    components: {
      'v-component-qrcode': Qrcode
    },
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
