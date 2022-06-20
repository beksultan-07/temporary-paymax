export default ({app}, inject) => {
  app.$platform = {
    list: [
      {id: 0, type: 'crypto', name: 'BITCOIN', symbol: 'BTC'},
      {id: 1, type: 'crypto', name: 'ETHEREUM', symbol: 'ETH'},
      {id: 2, type: 'crypto', name: 'TRON', symbol: 'TRX'},
      {id: 3, type: 'fiat', name: 'VISA', symbol: ['USD','EUR','RUB','UAH','JPY','AUD','GBP','KRW','CNY']},
      {id: 4, type: 'fiat', name: 'MASTERCARD', symbol: ['USD','EUR','RUB','UAH','JPY','AUD','GBP','KRW','CNY']},
    ],
    getId(name) {
      if (!name) {
        name = this.list[0].name;
      }

      return this.list.find((item) => item.name === name).id
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
    },
  };
  inject('platform', app.$platform);
};