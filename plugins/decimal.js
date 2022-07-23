import Decimal from "decimal.js";

Decimal.set({ precision: 8, rounding: 1 })

export default (context, inject) => {

  /**
   * @type {{div(*, *): number, sub(*, *): number, truncate(*, *): number, mul(*, *): number, isNumber(*): boolean, precision(*): number, format(*, *): (*|number), plus(*, *): number}}
   */
  context.$decimal = {

    /**
     * @param number
     * @param precision
     * @returns {number}
     */
    truncate(number, precision) {
      if (this.isNumber(number)) {
        return 0
      }

      if (String(number).split('e-').length === 2) {
        return 0
      }

      if (precision === undefined) {
        precision = this.precision(number);
      }

      return Number(new Decimal(number).toFixed(precision))
    },

    /**
     * @param number
     * @param to
     * @returns {number}
     */
    mul(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).mul(to))
    },

    /**
     * @param number
     * @param to
     * @returns {number}
     */
    div(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).div(to));
    },

    /**
     * @param number
     * @param to
     * @returns {number}
     */
    sub(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).sub(to));
    },

    /**
     * @param number
     * @param to
     * @returns {number}
     */
    plus(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).plus(to));
    },

    /**
     * @param number
     * @returns {number}
     */
    precision(number) {
      if (this.isNumber(number)) {
        return 0
      }

      let nums = String(number).split('.');
      if (Number(nums[0]) > 0) {
        return 2
      }
      return 8
    },

    /**
     * @param number
     * @param precision
     * @returns {*|number}
     */
    format(number, precision) {
      if (precision === undefined) {
        precision = this.precision(number);
      }

      return number ? (number).toFixed(precision ?? 2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0;
    },

    /**
     * @param number
     * @returns {boolean|boolean}
     */
    isNumber(number) {
      return number === '' || number === undefined || number === 0 || number === null || isNaN(Number(number));
    }
  };
  inject('decimal', context.$decimal);
};
