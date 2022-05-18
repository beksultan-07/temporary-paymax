import Decimal from "decimal.js";

Decimal.set({ precision: 8, rounding: 1 })

export default (context, inject) => {
  context.$decimal = {
    truncate(number, precision) {
      if (number === undefined || number === 0) {
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
      return Number(new Decimal(number).mul(to))
    },
    div(number, to) {
      return Number(new Decimal(number).div(to));
    },
    sub(number, to) {
      return Number(new Decimal(number).sub(to));
    },
    precision(number) {
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
    }
  };
  inject('decimal', context.$decimal);
};
