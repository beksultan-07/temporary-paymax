export default (app, inject) => {
  app.$storages = (path, name) => {
    return `${app.$axios.defaults.baseURL}/storage/${path.join('/')}/${name}.jpg`
  }
  inject('storages', app.$storages);
}
