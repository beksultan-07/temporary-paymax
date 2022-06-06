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
    getUser: '/account/get-user',
    setUser: '/account/set-user',
    getActivities: '/account/get-activities'
  },
  exchange: {
    getPrice: '/exchange/get-price',
    getUnit: '/exchange/get-unit',
    getMarkers: '/exchange/get-markers',
    getChart: '/exchange/get-chart',
    getTrades: '/exchange/get-trades',
    getPairs: '/exchange/get-pairs',
    getOrders: '/exchange/get-orders',
    getAsset: '/exchange/get-asset',
    getAssets: '/exchange/get-assets',
    setAsset: '/exchange/set-asset',
    setOrder: '/exchange/set-order',
    cancelOrder: '/exchange/cancel-order',
    setWithdraw: '/exchange/set-withdraw',
    cancelWithdraw: '/exchange/cancel-withdraw',
    getTransactions: '/exchange/get-transactions',
    getTransfers: '/exchange/get-transfers',
    getAnalysis: '/exchange/get-analysis'
  },
  status: '/status',
  timestamp: '/timestamp',
};
