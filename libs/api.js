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
    getSymbol: '/exchange/get-symbol',
    getMarkers: '/exchange/get-markers',
    getGraph: '/exchange/get-graph',
    getTrades: '/exchange/get-trades',
    getPairs: '/exchange/get-pairs',
    getPair: '/exchange/get-pair',
    getOrders: '/exchange/get-orders',
    getAsset: '/exchange/get-asset',
    getAssets: '/exchange/get-assets',
    setAsset: '/exchange/set-asset',
    setOrder: '/exchange/set-order',
    setWithdraw: '/exchange/set-withdraw',
    cancelOrder: '/exchange/cancel-order',
    cancelWithdraw: '/exchange/cancel-withdraw',
    getTransactions: '/exchange/get-transactions',
    getTransfers: '/exchange/get-transfers',
    getAnalysis: '/exchange/get-analysis'
  },
  admin: {
    getDashboard: '/admin/get-dashboard',
    exchange: {
      setCurrency: '/admin/exchange/set-currency',
      getCurrency: '/admin/exchange/get-currency',
      getCurrencies: '/admin/exchange/get-currencies',
      getChains: '/admin/exchange/get-chains',
      deleteCurrency: '/admin/exchange/delete-currency'
    },
    account: {

    }
  },
  status: '/status',
  timestamp: '/timestamp',
};
