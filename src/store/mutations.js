const mutations = {
  loadUser(state, payload) {
    state.user = payload;
    state.user.isAuthenticated = true;
  },
  logoutUser(state) {
    state.user.user = {
      email: "",
      clientKey: "",
    };
    state.user.isAuthenticated = false;
  },
};

export default mutations;
