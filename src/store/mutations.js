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
  getCurrentProduct(state, payload) {
    state.currentProduct.product = payload;
  },
  getUserComments(state, payload) {
    payload.forEach((comment) => {
      if (comment.createdBy.email === state.user.user.email) {
        state.comments.push(payload);
      }
    });
  },
  getUsers(state, payload) {
    state.user.user = payload;
  },
  newClientKey(state, payload) {
    state.user.clientKey = payload;
  },
  getLocalComments(state, payload) {
    state.user.comments = payload;
  },
};

export default mutations;
