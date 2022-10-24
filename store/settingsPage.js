export const state = () => {
  return {
    currentComponent: 'Referrals',
    links: [
      { text: 'Account data', component: 'Account' },
      { text: 'Referrals', component: 'Referrals' },
      { text: 'Login and Security', component: 'Login' },
      { text: 'Notification', component: 'Notification' },
    ],
  }
}

export const mutations = {
  setCurrentComponent(state, currentComponent) {
    state.currentComponent = currentComponent;
  }
}

export const getters = {
  getCurrentComponent(state) {
    return state.currentComponent
  },
  getLinks(state) {
    return state.links
  }
}
