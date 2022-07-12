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
      supported_resolutions: ['1', '5', '10', '15', '30', '1h', '4h', '1D', '1W']
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
      pricescale: 1000000,
      has_intraday: true,
      volume_precision: 8,
      data_status: 'streaming'
    }

    if (split_data[1].toUpperCase().match(/USD|EUR|RUB|UAH|JPY|AUD|GBP|KRW|CNY/)) {
      symbol_stub.pricescale = 100;
    }

    setTimeout(() => {
      onSymbolResolvedCallback(symbol_stub)
    }, 0);
  }

  /**
   * @param symbolInfo
   * @param resolution
   * @param interval
   * @param onHistoryCallback
   */
  getBars(symbolInfo, resolution, interval, onHistoryCallback) {

    if (interval.countBack === undefined) {
      return false;
    }

    if (String(interval.from).length === 7) {
      interval.from = interval.from * 1000
    } else if(Math.sign(interval.from) === -1) {
      interval.from = Math.abs(interval.from)
    }

    if (String(interval.to).length === 7) {
      interval.to = interval.to * 1000
    } else if(Math.sign(interval.to) === -1) {
      interval.to = Math.abs(interval.to)
    }

    let symbol = symbolInfo.name.split('/');
    let query = {
      base_unit: symbol[0].toLowerCase(),
      quote_unit: symbol[1].toLowerCase(),
      resolution: this.interval(resolution),
      from: interval.from,
      to: interval.to
    };

    this.send(query).then((response) => {

      let bars = [];
      let item = {};

      response.graph = response.graph ?? [];

      for (let i = response.graph.length - 1; i > 0; i--) {

        item.open = item.close ? item.close : response.graph[i].open;
        item.high = response.graph[i].high;
        item.low = response.graph[i].low;
        item.close = response.graph[i].close;
        item.time = Number(response.graph[i].time) * 1000;
        item.volume = response.graph[i].volume ?? NaN;

        bars.push(Object.assign({}, item));
      }

      this.$self.header = response.graph_stats;
      onHistoryCallback(bars.length ? bars : [], {noData: !bars.length});
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
      this.$self.$publish.bind('trade/graph:' + query.resolution, (data) => {
        if (data.graph !== undefined && symbol[0].toLowerCase() === data.graph[0].base_unit && symbol[1].toLowerCase() === data.graph[0].quote_unit) {
          this.$self.header = data.graph_stats;
          this.record(data.graph[0]);
        }
      });

      this.$init = true;
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
      lastBarTime: null,
      listener: onRealtimeCallback,
      resolution: resolution,
      symbolInfo: symbolInfo,
    };
    this.$self.overlay = false;
    this.$init = false;
  }

  /**
   * @param subscriberUID
   */
  unsubscribeBars(subscriberUID) {
    if (!this.$subscribers[subscriberUID]) {
      return;
    }

    this.$self.$publish.unbind(['trade/graph:' + this.interval(this.$subscribers[subscriberUID].resolution)]);
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
      '1D': 86400,  // 1 day
      '1W': 604800  // 1 week
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
      let time = record.lastBarTime;
      if (!bar) continue;

      bar.time = bar.time * 1000;

      if (time !== null && bar.time < time) continue;

      record.listener(bar);
      record.lastBarTime = bar.time;
    }
  }

  /**
   * @param params
   * @returns {Promise<any>}
   * @private
   */
  send(params) {
    let request = Api.exchange.getGraph;
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
