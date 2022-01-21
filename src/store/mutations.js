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
  addProduct(state, payload) {
    console.log("payload", payload);
    state.products = [...state.products, payload];
  },
  getProductComments(state, payload) {
    console.log("payload", payload);
    state.productComments = [...payload];
    console.log("state", state.productComments);
  },
  getUsers(state, payload) {
    state.user.user = payload;
  },
  getUserComments(state, payload) {
    payload.forEach((comment) => {
      if (comment.createdBy.email === state.user.user.email) {
        state.comments.push(payload);
      }
    });
  },
  newClientKey(state, payload) {
    state.user.clientKey = payload;
  },
  getLocalComments(state, payload) {
    state.user.comments = payload;
  },
};

export default mutations;
