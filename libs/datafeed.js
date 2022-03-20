import Api from "./api";

export default class Datafeed {

  $init = false;

  /**
   * @param self
   */
  constructor(self) {
    this.$self = self;
    this.$subscribers = {};
  }

  /**
   * @param cb
   */
  onReady(cb) {
    setTimeout(() => cb({
      supported_resolutions: ['5', '10', '15', '30', '1h', '4h', '1d', '1w']
    }), 0)
  }

  /**
   * @param symbolName
   * @param onSymbolResolvedCallback
   */
  resolveSymbol(symbolName, onSymbolResolvedCallback) {

    let split_data = symbolName.split(/[-/]/);
    let symbol_stub = {
      name: split_data[0].toUpperCase() + '/' + split_data[1].toUpperCase(),
      description: '',
      type: 'crypto',
      session: '24x7',
      timezone: 'Etc/UTC',
      ticker: symbolName,
      minmov: 1,
      pricescale: 100000000,
      has_intraday: true,
      //supported_resolution: ['5', '10', '15', '30', '1h', '4h', '1d', '1w'],
      volume_precision: 8,
      data_status: 'streaming',
    }

    if (split_data[1].match(/USD|EUR|RUB|UAH|JPY|AUD|GBP|KRW|CNY/)) {
      symbol_stub.pricescale = 100;
    }

    setTimeout(() => {
      onSymbolResolvedCallback(symbol_stub)
    }, 0);
  }

  /**
   * @param symbolInfo
   * @param resolution
   * @param from
   * @param to
   * @param onHistoryCallback
   */
  getBars(symbolInfo, resolution, from, to, onHistoryCallback) {

    let symbol = symbolInfo.name.split('/');
    let query = {
      base_unit: symbol[0].toLowerCase(),
      quote_unit: symbol[1].toLowerCase(),
      resolution: this.interval(resolution),
      from: from,
      to: to
    };

    this.send(query).then((response) => {

      let ohlc = [];
      let item = {};

      response.ohlc = response.ohlc ?? [];

      for (let i = response.ohlc.length - 1; i > 0; i--) {

        item.open = item.close ? item.close : response.ohlc[i].open;
        item.high = response.ohlc[i].high;
        item.low = response.ohlc[i].low;
        item.close = response.ohlc[i].close;
        item.time = Number(response.ohlc[i].time) * 1000;
        item.volume = response.ohlc[i].volume ?? NaN;

        ohlc.push(Object.assign({}, item));
      }

      this.$self.ohlc24h = response.ohlc24h;

      onHistoryCallback(ohlc.length ? ohlc : [], {noData: !ohlc.length});
    });

    if (!this.$init) {

      /**
       * Отслеживаем события бегущей строки, данные об торгах.
       * @return {callback}:
       * @object {base_unit: string},
       * @object {close: float},
       * @object {high: float},
       * @object {low: float},
       * @object {open: float},
       * @object {price: float},
       * @object {quote_unit: string},
       * @object {time: int}
       */
      this.$self.$publish.bind('exchange/kline', (data) => {
        if (data.ohlc) {
          if (symbol[0] === data.ohlc.lastItem.base_unit && symbol[1] === data.ohlc.lastItem.quote_unit) {

            this.send(Object.assign(query, {limit: 2})).then((response) => {
              response.ohlc = response.ohlc ?? [];

              if (data.ohlc.length) {
                this.record(response.ohlc[0]);
              }

              this.$self.ohlc24h = response.ohlc24h;
            });

          }

          this.$init = true;
        }
      });

    }
  }

  /**
   * @param symbolInfo
   * @param resolution
   * @param onRealtimeCallback
   * @param subscriberUID
   */
  subscribeBars(symbolInfo, resolution, onRealtimeCallback, subscriberUID) {
    if (this.$subscribers[subscriberUID]) {
      return;
    }
    this.$subscribers[subscriberUID] = {
      lastBar: null,
      listener: onRealtimeCallback,
      resolution: resolution,
      symbolInfo: symbolInfo,
    };
    this.$self.overlay = false;
  }

  /**
   * @param subscriberUID
   */
  unsubscribeBars(subscriberUID) {
    if (!this.$subscribers[subscriberUID]) {
      return;
    }
    this.$self.$publish.client['_events'].message.splice(-1);
    this.$self.ohlc = {};
    delete this.$subscribers[subscriberUID];
  }

  /**
   * @param symbolInfo
   * @param startDate
   * @param endDate
   * @param onDataCallback
   * @param resolution
   */
  getTimeScaleMarks(symbolInfo, startDate, endDate, onDataCallback, resolution) {
    console.log('=====getTimeScaleMarks running', symbolInfo, resolution)
  }

  /**
   * @param resolution
   * @param resolutionBack
   * @param intervalBack
   * @returns {*}
   */
  calculateHistoryDepth(resolution, resolutionBack, intervalBack) {
    return this.interval(resolution)
  }

  /**
   * @param callback
   */
  getServerTime(callback) {
    this.$self.$axios.$get(Api.timestamp).then((response) => {
      callback(Math.floor(response / 1000));
    });
  }

  /**
   * @param resolution
   * @returns {*}
   */
  interval(resolution) {
    const interval = {
      '1': 60,      // 1 minutes
      '5': 300,     // 5 minutes
      '10': 600,    // 10 minutes
      '15': 900,    // 15 minutes
      '30': 1800,   // 30 minutes
      '1h': 3600,   // 1 hour
      '4h': 14400,  // 4 hours
      '1d': 86400,  // 1 day
      '1w': 604800  // 1 week
    };

    if (interval[resolution]) {
      return interval[resolution]
    }

    return interval[1]
  }

  /**
   * @param bar
   */
  record(bar) {
    for (let listenerGuid in this.$subscribers) {

      let record = this.$subscribers[listenerGuid];
      let previous = record.lastBar
      let current = bar;
      if (!current) return;

      current.time = current.time * 1000;

      if (previous !== null && current.time < previous.time) return;
      if (previous !== null && current.time > previous.time) {
        record.listener(previous);
        console.log("Create new bar...");
      }

      record.listener(current);
      record.lastBar = current;
      console.log("Update bar...")
    }
  }

  /**
   * @param params
   * @returns {Promise<any>}
   * @private
   */
  send(params) {
    let request = Api.exchange.getKlines;
    if (params) {
      for (let i = 0; i < Object.keys(params).length; ++i) {
        let key = Object.keys(params)[i];
        let value = encodeURIComponent(params[key]);
        request += (i === 0 ? '?' : '&') + key + '=' + value;
      }
    }

    return this.$self.$axios.$get(request);
  }
}
