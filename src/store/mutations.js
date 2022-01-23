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
      phone: "",
      comments: [],
      reviews: 0,
    };
  },
  getProducts(state, payload) {
    state.products = [...payload];
  },
  loadCurrentProduct(state, payload) {
    state.currentProduct.product = payload;
  },
  loadUserPhone(state, payload) {
    state.user.phone = payload;
  },
  loadUserReviews(state, payload) {
    state.user.reviews = payload;
  },
  addProduct(state, payload) {
    state.comments = [...state.products, payload];
  },
  addComment(state, payload) {
    state.productComments.comments = [...state.productComments.comments, payload];
  },
  getProductComments(state, payload) {
    if (payload.length !== 0) {
      state.productComments.isReviewed = true;
      state.productComments.comments = [...payload];
    } else {
      state.productComments.isReviewed = false;
    }
  },
  getUsers(state, payload) {
    state.user.user = payload;
  },
  getUserComments(state, payload) {
    if (payload.length > 0) {
      state.user.comments = [];
      payload.forEach((comment) => {
        if (comment.createdBy.email === state.user.user.email) {
          state.user.comments = [...state.user.comments, comment];
        }
      });
      const { phone } = payload[0].createdBy;
      state.user.phone = phone;
      localStorage.setItem("phone", JSON.stringify({ phone }));
      const userReviews = payload.length;
      state.user.userReviews = userReviews;
      localStorage.setItem("userReviews", JSON.stringify({ userReviews }));
    }
  },
  newClientKey(state, payload) {
    state.user.clientKey = payload;
  },
  getLocalComments(state, payload) {
    state.user.comments = payload;
  },
};

export default mutations;
