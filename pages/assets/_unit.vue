<template>
  <v-card class="ma-1" elevation="0">
    <v-component-fullscreen>
      <template v-if="unit">

        <!-- Start: tabs bar -->
        <v-tabs v-model="eyelet" color="yellow darken-3">
          <v-tab :to="'/assets/' + unit.toLowerCase() + '/deposit'">{{ $vuetify.lang.t('$vuetify.lang_91') }}</v-tab>
          <v-tab :to="'/assets/' + unit.toLowerCase() + '/withdraw'">{{ $vuetify.lang.t('$vuetify.lang_92') }}</v-tab>
          <v-tab :to="'/assets/' + unit.toLowerCase() + '/history'">{{ $vuetify.lang.t('$vuetify.lang_93') }}</v-tab>
        </v-tabs>
        <!-- End: tabs bar -->

        <v-divider />

        <!-- Start: info bar -->
        <div class="mx-4 mt-4">
          <v-row align="center">
            <v-col md="3">
              <v-card height="118" outlined rounded="lg">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title class="text-h5">
                      {{ asset.symbol.toUpperCase() }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ asset.name }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar size="100">
                    <v-img :src="$storages(['icon'], unit)" width="100"/>
                  </v-list-item-avatar>
                </v-list-item>
              </v-card>
            </v-col>
            <v-col md="3">
              <v-card height="118" outlined rounded="lg">
                <v-card-text class="mt-2 text-center">
                  <div><small>{{ $vuetify.lang.t('$vuetify.lang_56') }}</small></div>
                  <div class="text-h5">{{ $decimal.format(asset.balance, $decimal.decimal(asset.balance)) }}</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="3">
              <v-card height="118" outlined rounded="lg">
                <v-card-text class="mt-2 text-center">
                  <div><small>{{ $vuetify.lang.t('$vuetify.lang_94') }}</small></div>
                  <div class="text-h5">{{  $decimal.format(asset.volume, $decimal.decimal(asset.volume)) }}</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col md="3">
              <v-card height="118" outlined rounded="lg">
                <v-card-text class="mt-2 text-center">
                  <div><small>{{ $vuetify.lang.t('$vuetify.lang_81') }}</small></div>
                  <div class="text-h5">
                    <template v-if="asset.status">
                      <span class="green--text">{{ $vuetify.lang.t('$vuetify.lang_95') }}</span>
                    </template>
                    <template v-else>
                      <span class="red--text">{{ $vuetify.lang.t('$vuetify.lang_96') }}</span>
                    </template>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <!-- End: info bar -->

        <!-- Start: child container -->
        <nuxt-child />
        <!-- End: child container -->

      </template>

      <!-- Start: select asset -->
      <template v-else>
        <v-layout fill-height wrap>
          <v-flex/>
          <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
            <v-img src="/asset/1.png" />
            {{ $vuetify.lang.t('$vuetify.lang_97') }}
          </v-flex>
          <v-flex/>
        </v-layout>
      </template>
      <!-- End: select asset -->

    </v-component-fullscreen>
  </v-card>
</template>

<script>

  import Fullscreen from "../../components/Common/Fullscreen";
  import Api from "../../libs/api";

  export default {
    name: "unit",
    components: {
      'v-component-fullscreen': Fullscreen
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
