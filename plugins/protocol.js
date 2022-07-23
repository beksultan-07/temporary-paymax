export default ({app}, inject) => {

  /**
   * @type {{get(*): *, list: [{color: string, name: string, id: number},{color: string, name: string, id: number},{color: string, name: string, id: number},{color: string, name: string, id: number},{color: string, name: string, id: number},null,null,null,null,null]}}
   */
  app.$protocol = {
    list: [
      {id: 1, name: 'ERC20', color: 'deep-purple lighten-4'},
      {id: 2, name: 'ERC721', color: 'pink lighten-4'},
      {id: 3, name: 'ERC1155', color: 'purple lighten-4'},
      {id: 4, name: 'ERC998', color: 'red lighten-4'},
      {id: 5, name: 'ERC223', color: 'cyan lighten-4'},
      {id: 6, name: 'BEP20', color: 'blue lighten-4'},
      {id: 7, name: 'BEP721', color: 'teal lighten-4'},
      {id: 8, name: 'BEP1155', color: 'green lighten-4'},
      {id: 9, name: 'TRC20', color: 'lime lighten-4'},
      {id: 10, name: 'TRC721', color: 'amber lighten-4'}
    ],

    /**
     * @param name
     * @returns {{color: string, name: string, id: number} | {color: string, name: string, id: number} | {color: string, name: string, id: number} | {color: string, name: string, id: number} | {color: string, name: string, id: number}}
     */
    get(name) {
      if (!name) {
        name = this.list[0].name;
      }

      return this.list.find((item) => item.name === name)
    },
  };
  inject('protocol', app.$protocol);
};