import colors from 'vuetify/es5/util/colors';

export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | Paymex',
    title: 'Paymex',
    htmlAttrs: {
      lang: 'en',
      style: 'overflow:hidden;'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', async: true, type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { type: 'text/javascript', src: "/js/charting_library/charting_library.standalone.js" }
    ]
  },

  axios: {
    baseURL: process.env.BASE_API || 'http://localhost:3082/v2'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/single.js' },
    { src: '~/plugins/decimal.js' },
    { src: '~/plugins/publish.js' },
    { src: '~/plugins/vuetify.js' },
    { src: '~/plugins/snackbar.js' },
    { src: '~/plugins/storages.js' },
    { src: '~/plugins/protocol.js' },
    { src: '~/plugins/platform.js' },
    { src: '~/plugins/datafeed.js' },
    { src: '~/plugins/api.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv',
    '@nuxtjs/moment'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    'nuxt-clipboard',
    'nuxt-vuex-localstorage'
  ],

  auth: {
    cookie: false,
    strategies: {
      local: {
        scheme: 'refresh',
        token: {
          property: 'access_token',
          maxAge: 900 // 900 = 15 minute. // 1800 = 30 minute.
        },
        user: {
          property: false
        },
        refreshToken: {
          property: 'refresh_token',
          data: 'refresh',
          maxAge: 60 * 60 * 24, // 24 Hour.
          tokenRequired: true
        },
        endpoints: {
          login: { url: '/auth/action-signin', method: 'post' },
          refresh: { url: '/auth/get-refresh', method: 'post' },
          logout: { url: '/auth/set-logout', method: 'post', data: 'refresh'},
          user: { url: '/account/get-user', method: 'get' }
        },
        autoLogout: true
      }
    },
    redirect: {
      login: '/signin',
      logout: '/',
      callback: '/signin',
      home: '/assets'
    }
  },

  router: {
    middleware: ['auth']
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/main.scss'],
    treeShake: true,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  server: {
    port: 3509,
    host: "0.0.0.0"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
