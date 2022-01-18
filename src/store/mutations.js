const mutations = {
  loadUser(state, payload) {
    state.user.user = payload;
    state.user.isAuthenticated = true;
  },
  logoutUser(state) {
    state.user = {
      isAuthenticated: false,
      clientKey: "",
      user: {
        role: "",
        sub: "",
        iat: "",
      },
    };
  },
  getProducts(state, payload) {
    state.products = [...payload];
  },
  newClientKey(state, payload) {
    state.user.clientKey = payload;
  },
};

export default mutations;
