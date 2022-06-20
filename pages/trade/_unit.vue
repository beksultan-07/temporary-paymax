<template>
  <v-card class="ma-1" elevation="0" height="500">

    <template v-if="liquidity && status">

      <!-- Start: trading view -->
      <v-app-bar class="toolbar-px-zero" color="transparent" flat height="50">
        <v-slide-group multiple show-arrows>
          <v-slide-item>
            <ul class="header-line">
              <li>{{ unit.toUpperCase() }}</li>
              <li v-if="graph_day.last">
                <small :class="priceConcurrency + '--text'">
                  <v-icon v-if="priceConcurrency === 'red'" :class="priceConcurrency + '--text'" small>
                    mdi-call-received
                  </v-icon>
                  <v-icon v-else-if="priceConcurrency === 'teal'" :class="priceConcurrency + '--text'" small>
                    mdi-call-made
                  </v-icon>
                  <v-icon v-else small>
                    mdi-keyboard-tab
                  </v-icon>
                  {{ $decimal.format(priceLast) }}
                </small>
              </li>
            </ul>
          </v-slide-item>
          <v-slide-item>
            <v-divider class="mx-3" vertical />
          </v-slide-item>
          <v-slide-item>
            <ul class="header-line">
              <li><small>{{ $vuetify.lang.t('$vuetify.lang_66') }}</small></li>
              <li v-if="graph_day.last">
                <small :class="changeColor">{{ change24h }}</small>
              </li>
            </ul>
          </v-slide-item>
          <v-slide-item>
            <div class="mx-3"></div>
          </v-slide-item>
          <v-slide-item>
            <ul class="header-line">
              <li><small>{{ $vuetify.lang.t('$vuetify.lang_67') }}</small></li>
              <li v-if="graph_day.last">
                <small class="grey--text">{{ $decimal.format(maxPrice24h) }}</small>
              </li>
            </ul>
          </v-slide-item>
          <v-slide-item>
            <div class="mx-3"></div>
          </v-slide-item>
          <v-slide-item>
            <ul class="header-line">
              <li><small>{{ $vuetify.lang.t('$vuetify.lang_68') }}</small></li>
              <li v-if="graph_day.last">
                <small class="grey--text">{{ $decimal.format(minPrice24h) }}</small>
              </li>
            </ul>
          </v-slide-item>
          <v-slide-item>
            <div class="mx-3"></div>
          </v-slide-item>
          <v-slide-item>
            <ul class="header-line">
              <li><small>{{ $vuetify.lang.t('$vuetify.lang_69') }}({{ unit.split('-')[0].toUpperCase() }})</small></li>
              <li v-if="graph_day.last">
                <small class="grey--text">{{ $decimal.format(volume24h) }}</small>
              </li>
            </ul>
          </v-slide-item>
          <v-slide-item>
            <div class="mx-3"></div>
          </v-slide-item>
          <v-slide-item>
            <ul class="header-line">
              <li><small>{{ $vuetify.lang.t('$vuetify.lang_69') }}({{ unit.split('-')[1].toUpperCase() }})</small></li>
              <li v-if="graph_day.last">
                <small class="grey--text">{{ $decimal.format($decimal.mul(volume24h, minPrice24h)) }}</small>
              </li>
            </ul>
          </v-slide-item>
        </v-slide-group>
      </v-app-bar>
      <!-- End: trading view -->

      <v-divider/>

    </template>
    <template v-else-if="!overlay">
      <v-layout class="bg-image" fill-height wrap>
        <v-flex/>
        <v-flex align-self-center class="text-center grey--text" md4 mx5 sm6 xl3>
          <div>
            <v-icon color="grey">
              mdi-alert-circle-outline
            </v-icon>
          </div>
          <div>
            {{ $vuetify.lang.t('$vuetify.lang_213') }}
          </div>
        </v-flex>
        <v-flex/>
      </v-layout>
    </template>

    <div v-show="liquidity && status" id="charting-library" class="pa-2 charting" style="height: 448px"></div>
    <v-overlay :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" :value="overlay" absolute opacity="0.8">
      <v-progress-circular color="yellow darken-3" indeterminate size="50"/>
    </v-overlay>

  </v-card>
</template>

<script>

  import Datafeed from "../../libs/datafeed";
  import Api from "/libs/api";

  export default {
    data() {
      return {
        unit: undefined,
        overlay: true,
        graph_day: {},
        liquidity: false,
        status: 0
      }
    },
    head() {
      return {
        title: (this.unit ? this.unit.toUpperCase() : 'Loading') + ' | ' + (this.priceLast ? this.$decimal.format(this.priceLast) : 0)
      }
    },
    async asyncData({params}) {
      const unit = params.unit
      return { unit }
    },
    watch: {
      $route(e) {
        this.getGraph(e.params.unit);
      }
    },
    mounted() {
      this.getGraph(this.unit);
    },
    methods: {

      /**
       * @param unit
       */
      getGraph(unit) {
        this.overlay = true;

        this.$axios.$post(Api.exchange.getPair, {base_unit: unit.split('-')[0], quote_unit: unit.split('-')[1]}).then((response) => {

          this.liquidity = response.pairs[0].liquidity ?? false;
          this.status = response.pairs[0].status ?? 0;

          if (this.status || this.liquidity) {

            /**
             * @type {IChartingLibraryWidget}
             */
            window.tvWidget = new window.TradingView.widget({
              symbol: unit,
              theme: (this.$vuetify.theme.dark ? "Dark" : "Light"),
              locale: this.$vuetify.lang.current,
              container: 'charting-library',
              datafeed: new Datafeed(this),
              interval: '15',
              library_path: '/js/charting_library/',
              disabled_features: [
                "use_localstorage_for_settings",
                "header_symbol_search",
                "symbol_search_hot_key",
                "header_undo_redo",
                "compare_symbol",
                "header_compare",
                "header_saveload",
                "timeframes_toolbar",
              ],
              client_id: 'tradingview.com',
              charts_storage_api_version: "1.1",
              user_id: 'public_user_id',
              fullscreen: false,
              autosize: true
            });

            return
          }
          this.overlay = false;
        }).catch(e => {
          console.log(e)
        });
      }
    },
    computed: {

      /**
       * @returns {number|*}
       */
      priceLast() {
        if (this.graph_day.last) {
          return this.graph_day.last;
        }
        return 0;
      },

      /**
       * @returns {number|*}
       */
      priceFirst() {
        if (this.graph_day.first) {
          return this.graph_day.first;
        }
        return 0;
      },

      /**
       * @returns {number|*}
       */
      pricePrevious() {
        if (this.graph_day.previous) {
          return this.graph_day.previous;
        }
        return 0;
      },

      /**
       * @returns {string|string}
       */
      priceConcurrency() {

        if (this.priceLast > this.pricePrevious) {
          return 'teal'
        }
        if (this.priceLast < this.pricePrevious) {
          return 'red'
        }

        return this.$vuetify.theme.dark ? 'grey' : ''
      },

      /**
       * @returns {*}
       */
      volume24h() {
        if (this.graph_day.volume) {
          return this.graph_day.volume;
        }
        return 0;
      },

      /**
       * @returns {number}
       */
      maxPrice24h() {
        return this.graph_day.high;
      },

      /**
       * @returns {number}
       */
      minPrice24h() {
        return this.graph_day.low;
      },

      /**
       * @returns {string}
       */
      change24h() {
        let ratio = this.$decimal.sub(this.priceLast, this.priceFirst);
        if (Math.sign(ratio) === -1) {
          return (ratio).toFixed(2)
        }
        return `+${(ratio).toFixed(2)}`
      },

      /**
       * @returns {string}
       */
      changeColor() {
        let ratio = this.$decimal.sub(this.priceLast, this.priceFirst);
        if (Math.sign(ratio) === -1) {
          return 'red--text'
        }
        return 'teal--text'
      }
    },
    beforeDestroy() {
      window.tvWidget = undefined;
    }
  }
</script>

<style scoped>

  .bg-image::after {
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(/asset/4.png);
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    display: block;
    opacity: 0.1;
  }

</style>