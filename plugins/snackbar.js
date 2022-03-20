export default ({ app, store }, inject) => {
  app.$snackbar = {
    open ({ content = '', color = '' }) {
      store.commit('snackbar/open', { content, color })
    }
  };
  inject('snackbar', app.$snackbar);
}
