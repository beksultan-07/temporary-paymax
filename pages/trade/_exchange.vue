<template>
  <v-card class="ma-1" elevation="0" height="500">

    <!-- Start: trading view -->
    <v-app-bar class="toolbar-px-zero" color="transparent" flat height="50">
      <v-slide-group multiple show-arrows>
        <v-slide-item>
          <ul class="header-line">
            <li>{{ exchange.toUpperCase() }}</li>
            <li v-if="ohlc24h.last">
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
            <li v-if="ohlc24h.last">
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
            <li v-if="ohlc24h.last">
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
            <li v-if="ohlc24h.last">
              <small class="grey--text">{{ $decimal.format(minPrice24h) }}</small>
            </li>
          </ul>
        </v-slide-item>
        <v-slide-item>
          <div class="mx-3"></div>
        </v-slide-item>
        <v-slide-item>
          <ul class="header-line">
            <li><small>{{ $vuetify.lang.t('$vuetify.lang_69') }}({{ exchange.split('-')[0].toUpperCase() }})</small></li>
            <li v-if="ohlc24h.last">
              <small class="grey--text">{{ $decimal.format(volume24h) }}</small>
            </li>
          </ul>
        </v-slide-item>
        <v-slide-item>
          <div class="mx-3"></div>
        </v-slide-item>
        <v-slide-item>
          <ul class="header-line">
            <li><small>{{ $vuetify.lang.t('$vuetify.lang_69') }}({{ exchange.split('-')[1].toUpperCase() }})</small></li>
            <li v-if="ohlc24h.last">
              <small class="grey--text">{{ $decimal.format($decimal.mul(volume24h, minPrice24h)) }}</small>
            </li>
          </ul>
        </v-slide-item>
      </v-slide-group>
    </v-app-bar>
    <!-- End: trading view -->

    <v-divider/>
    <div id="charting-library" class="pa-2 charting" style="height: 448px"></div>
    <v-overlay :color="$vuetify.theme.dark ? 'grey darken-4' : 'white'" :value="overlay" absolute opacity="0.8">
      <v-progress-circular color="yellow darken-3" indeterminate size="50"/>
    </v-overlay>
  </v-card>
</template>

<script>

  import Datafeed from "../../libs/datafeed";

  export default {
    name: 'exchange',
    data() {
      return {
        exchange: undefined,
        overlay: true,
        ohlc24h: {}
      }
    },
    head() {
      return {
        title: (this.exchange ? this.exchange.toUpperCase() : 'Loading') + ' | ' + (this.priceLast ? this.$decimal.format(this.priceLast) : 0)
      }
    },
    async asyncData({params}) {
      const exchange = params.exchange
      return {exchange}
    },
    watch: {
      $route(e) {
        this.getChart(
          e.params.exchange
        );
      }
    },
    mounted() {
      this.getChart(
        this.exchange
      );
    },
    methods: {

      /**
       * @param symbol
       */
      getChart(symbol) {
        this.overlay = true;
        this.exchange = symbol;

        /**
         * @type {Window.TradingView.widget}
         */
        window.tvWidget = new window.TradingView.widget({
          symbol: symbol,
          theme: (this.$vuetify.theme.dark ? "Dark" : "Light"),
          locale: this.$vuetify.lang.current,
          container_id: 'charting-library',
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
          user_id: 'public_user_id',
          fullscreen: false,
          autosize: true
        });
      }
    },
    computed: {

      /**
       * @returns {number|*}
       */
      priceLast() {
        if (this.ohlc24h.last) {
          return this.ohlc24h.last;
        }
        return 0;
      },

      /**
       * @returns {number|*}
       */
      priceFirst() {
        if (this.ohlc24h.first) {
          return this.ohlc24h.first;
        }
        return 0;
      },

      /**
       * @returns {number|*}
       */
      pricePrevious() {
        if (this.ohlc24h.previous) {
          return this.ohlc24h.previous;
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
        if (this.ohlc24h.volume) {
          return this.ohlc24h.volume;
        }
        return 0;
      },

      /**
       * @returns {number}
       */
      maxPrice24h() {
        return this.ohlc24h.high;
      },

      /**
       * @returns {number}
       */
      minPrice24h() {
        return this.ohlc24h.low;
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
