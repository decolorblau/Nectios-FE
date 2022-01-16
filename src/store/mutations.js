const mutations = {
  loadUser(state, payload) {
    state.user = payload;
    state.user.isAuthenticated = true;
  },
};

export default mutations;
