export default {
  index: {
    getCurrencies: '/index/get-currencies',
    getPairs: '/index/get-pairs'
  },
  auth: {
    actionSignup: '/auth/action-signup',
    actionSignin: '/auth/action-signin',
    actionReset: '/auth/action-reset',
    setLogout: '/auth/set-logout',
    getRefresh: '/auth/get-refresh'
  },
  account: {
    getUser: '/account/get-user'
  },
  exchange: {
    getUnit: '/exchange/get-unit',
    getMarkers: '/exchange/get-markers',
    getKlines: '/exchange/get-klines',
    getTrades: '/exchange/get-trades',
    getPairs: '/exchange/get-pairs',
    getOrders: '/exchange/get-orders',
    getAsset: '/exchange/get-asset',
    getAssets: '/exchange/get-assets',
    setAsset: '/exchange/set-asset',
    setOrder: '/exchange/set-order',
    cancelOrder: '/exchange/cancel-order'
  },
  status: '/status',
  timestamp: '/timestamp',
};
