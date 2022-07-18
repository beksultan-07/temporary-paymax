export default ({ app }, inject) => {
  app.$rule = {
    get(name) {
      return !!app.$auth.user.rules.find((item) => item === name);
    }
  };
  inject('rule', app.$rule);
};
