export default ({app}, inject) => {
  app.$platform = {
    list: [
      {id: 0, type: 'CRYPTO', name: 'BITCOIN', symbol: 'BTC'},
      {id: 1, type: 'CRYPTO', name: 'ETHEREUM', symbol: 'ETH'},
      {id: 2, type: 'CRYPTO', name: 'TRON', symbol: 'TRX'},
      {id: 3, type: 'FIAT', name: 'VISA', symbol: 'MULTI CURRENCY'},
      {id: 4, type: 'FIAT', name: 'MASTERCARD', symbol: 'MULTI CURRENCY'},
    ],
    get(name) {
      if (!name) {
        name = this.list[0].name;
      }

      return this.list.find((item) => item.name === name)
    },
    getSymbol(name) {
      if (!name) {
        name = this.list[0].name;
      }

      return this.list.find((item) => item.name === name).symbol
    },
    getName(id) {
      return this.list.find((item) => item.id === id).name
    },
    getType(type) {
      return this.list.filter((item) => item.type === type)
    }
  };
  inject('platform', app.$platform);
};