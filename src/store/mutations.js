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
        email: "",
        name: "",
        profilePhoto: "",
        role: "",
        surname: "",
      },
    };
  },
  getProducts(state, payload) {
    state.products = [...payload];
  },
  getUsers(state, payload) {
    state.user.user = payload;
  },
  newClientKey(state, payload) {
    state.user.clientKey = payload;
  },
};

export default mutations;
