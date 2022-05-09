import BigNumber from "bignumber.js";

export default (context, inject) => {
  context.$decimal = {
    truncate(number, quantity) {
      let nums = new BigNumber(number).toFormat(quantity).split(',')
      if (nums.length === 2) {
        return Number(nums[0]+nums[1])
      }

      if (Math.abs(Number(nums[0])) === 0) {
        return 0
      }

      return Number(nums[0]).toFixed(quantity)
    },
    decimal(number) {
      let nums = String(number).split('.');
      if (Number(nums[0]) > 1) {
        return 2
      }
      return 8
    },
    format(number, quantity) {
      return number ? (number).toFixed(quantity ?? 2).replace(/\d(?=(\d{3})+\.)/g, '$&,') : 0;
    }
  };
  inject('decimal', context.$decimal);
};
