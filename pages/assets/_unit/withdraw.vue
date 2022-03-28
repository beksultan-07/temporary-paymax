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
              <v-card class="mb-4" elevation="0" outlined>
                <v-card-title class="text-uppercase">
                  {{ $vuetify.lang.t('$vuetify.lang_111') }}: {{ item.name }}
                  <v-icon class="green--text" v-if="item.status">
                    mdi-check-circle-outline
                  </v-icon>
                  <v-icon class="red--text" v-else>
                    mdi-close-circle-outline
                  </v-icon>
                </v-card-title>
                <v-card-subtitle v-if="item.network">
                  {{ $vuetify.lang.t('$vuetify.lang_112') }}: {{ item.network }}
                </v-card-subtitle>
                <v-divider />
                <v-card-subtitle>
                  {{ $vuetify.lang.t('$vuetify.lang_113') }}: <b>{{ item.platform }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                  {{ $vuetify.lang.t('$vuetify.lang_87').replace(/%1/g, item['confirmation']) }}
                </v-card-text>
              </v-card>

              <template v-if="!item.status">
              <v-card class="mb-4" elevation="0" outlined>
                <v-card-subtitle>
                  <b class="red--text">{{ $vuetify.lang.t('$vuetify.lang_99') }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text class="red--text">
                  {{ $vuetify.lang.t('$vuetify.lang_98') }}
                </v-card-text>
              </v-card>
              </template>
              <template v-else>

                <template v-if="getReserve(item)">
                  <v-card class="mb-4" elevation="0" outlined>
                    <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                      <v-icon>mdi-fingerprint</v-icon> {{ $vuetify.lang.t('$vuetify.lang_110') }}
                    </v-card-text>
                  </v-card>

                  <v-text-field v-model="to" color="yellow darken-3" :label="$vuetify.lang.t('$vuetify.lang_104')" outlined :rules="rulesAddress" required>
                    <template #message="{ message }">
                      {{ $vuetify.lang.t(message) }}
                    </template>
                  </v-text-field>

                  <v-text-field v-model="value" color="yellow darken-3" :label="$vuetify.lang.t('$vuetify.lang_106')" outlined :rules="rulesValue" required>
                    <template v-slot:append>
                      <span class="my-1" @click="getBalance(item)" style="cursor: pointer;">
                        <span class="orange--text">MAX</span> <v-divider class="mx-1" vertical /> <span class="grey--text">{{ getReserveBalance(item) }} {{ asset.symbol.toUpperCase() }}</span>
                      </span>
                    </template>
                    <template #message="{ message }">
                      {{ $vuetify.lang.t(message) }}
                    </template>
                  </v-text-field>
                </template>
                <template v-else>
                  <v-card elevation="0" outlined>
                    <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                      {{ $vuetify.lang.t('$vuetify.lang_86') }}
                    </v-card-text>
                  </v-card>
                </template>

              </template>

              {{ $vuetify.lang.t('$vuetify.lang_103') }}
              {{ $vuetify.lang.t('$vuetify.lang_105') }}
              {{ $vuetify.lang.t('$vuetify.lang_107') }}
            </v-col>
            <v-col md="6">
              <v-card class="mb-4" elevation="0" outlined>
                <v-card-subtitle>
                  <b class="blue--text">{{ $vuetify.lang.t('$vuetify.lang_101') }}</b>
                </v-card-subtitle>
                <v-divider />
                <v-card-text class="blue--text">
                  {{ $vuetify.lang.t('$vuetify.lang_102').replace(/%1/g, item['time_withdraw']) }}
                </v-card-text>
              </v-card>
              <v-card elevation="0" outlined>
                <v-card-subtitle :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                  <b>{{ $vuetify.lang.t('$vuetify.lang_20') }}:</b> {{ item['fees_withdraw'] }}%
                </v-card-subtitle>
                <v-divider />
                <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                  <b>{{ $vuetify.lang.t('$vuetify.lang_100') }}:</b> {{ asset['min_withdraw'] }} <b>{{ asset.symbol.toUpperCase() }}</b>
                </v-card-text>
                <v-divider />
                <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                  <b>{{ $vuetify.lang.t('$vuetify.lang_108') }}:</b> {{ getMaxWithdraw(item) }} <b>{{ asset.symbol.toUpperCase() }}</b>
                </v-card-text>
                <v-divider />
                <v-card-text :class="$vuetify.theme.dark ? 'white--text' : 'black--text'">
                  <b>{{ $vuetify.lang.t('$vuetify.lang_109') }}:</b> {{ getReserve(item) }} <b>{{ asset.symbol.toUpperCase() }}</b>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>

        </template>
        <template v-else>
          <v-layout fill-height style="height:200px;" wrap>
            <v-flex/>
            <v-flex align-self-center class="text-center" md4 mx5 sm6 xl3>
              <v-btn block color="black--text yellow darken-1 text-capitalize" elevation="0" large @click="setAsset(item.platform, item.protocol, index)">{{ $vuetify.lang.t('$vuetify.lang_90') }}</v-btn>
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
        value: '',
        eyelet: 0,
        to: ''
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
       * @param protocol
       * @param index
       */
      setAsset(platform, protocol, index) {
        this.$axios.$post(Api.exchange.setAsset, {unit: this.$route.params.unit, platform: platform, protocol: protocol}).then((response) => {
          this.asset.chains[index].address = response.address;
          this.$forceUpdate();
        });
      },

      /**
       * @param item
       */
      getBalance(item) {
        this.value = this.getReserveBalance(item);
      },

      /**
       * @param item
       * @returns {number|*}
       */
      getMaxWithdraw(item) {
        let number = item['reserve'] > this.asset['max_withdraw'] ? this.asset['max_withdraw'] : item['reserve'];
        if (!isNaN(number)) {
          return number;
        }
        return 0
      },

      /**
       * @param item
       * @returns {number|*}
       */
      getReserve(item) {
        let number = item['reserve'];
        if (!isNaN(number)) {
          return number;
        }
        return 0
      },

      /**
       * @param item
       * @returns {number|*}
       */
      getReserveBalance(item) {
        //balance > this.asset['max_withdraw'] ? this.asset['max_withdraw'] : balance;
        let number = item['reserve'];
        let balance = this.asset.balance ?? 0;
        if (number >= balance) {
          return (balance > this.asset['max_withdraw'] ? this.asset['max_withdraw'] : balance)
        }
        return number
      }
    },
    computed: {
      rulesAddress() {
        return [
          (v) => !!v || '$vuetify.lang_114',
          (v) => v.length >= 30 || '$vuetify.lang_115'
        ]
      },
      rulesValue() {
        return [
          (v) => !!v || '$vuetify.lang_116',
          (v) => v > 0 || '$vuetify.lang_117'
        ]
      }
    }
  }
</script>

<style scoped>

</style>
