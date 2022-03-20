export default (context, inject) => {
  context.$decimal = {
    truncate(number, quantity) {
      let nums = String(number).split('.');
      if (nums.length === 2) {
        return Number(nums[0] + '.' + nums[1].substring(0, quantity))
      }
      return Number(number)
    },
    decimal(number) {
      let nums = String(number).split('.');
      if (Number(nums[0]) > 1) {
        return 2
      }
      return 8
    },
    format(number, quantity) {
      return (number).toFixed(quantity ?? 2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
  };
  inject('decimal', context.$decimal);
};
