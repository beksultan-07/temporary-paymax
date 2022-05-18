import Decimal from "decimal.js";

Decimal.set({ precision: 8, rounding: 1 })

export default (context, inject) => {
  context.$decimal = {
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
    mul(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).mul(to))
    },
    div(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).div(to));
    },
    sub(number, to) {
      if (this.isNumber(number)) {
        return 0
      }
      return Number(new Decimal(number).sub(to));
    },
    precision(number) {
      if (this.isNumber(number)) {
        return 0
      }

      let nums = String(number).split('.');
      if (Number(nums[0]) > 1) {
        return 2
      }
      return 8
    },
    format(number, precision) {
      if (precision === undefined) {
        precision = this.precision(number);
      }

      return number ? (number).toFixed(precision ?? 2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0;
    },
    isNumber(number) {
      return number === '' || number === undefined || number === 0 || number === null;
    }
  };
  inject('decimal', context.$decimal);
};
