export default ({app}, inject) => {
  app.$protocol = {
    list: [
      {id: 0, name: 'MAINNET'},
      {id: 1, name: 'ERC20'},
      {id: 2, name: 'ERC721'},
      {id: 3, name: 'ERC1155'},
      {id: 4, name: 'ERC998'},
      {id: 5, name: 'ERC223'},
      {id: 6, name: 'BEP20'},
      {id: 7, name: 'BEP721'},
      {id: 8, name: 'BEP1155'},
      {id: 9, name: 'TRC20'},
      {id: 10, name: 'TRC721'}
    ],
    getName(id) {
      return this.list.find((item) => item.id === id).name
    }
  };
  inject('protocol', app.$protocol);
};