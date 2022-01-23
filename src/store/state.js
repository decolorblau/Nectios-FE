const state = {
  products: [],
  productComments: {
    isReviewed: false,
    comments: [],
  },
  user: {
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
  },
  currentProduct: {
    product: {
      id: "",
      clientId: "",
      description: "",
      key: "",
      name: "",
      price: "",
      photo: "",
    },
  },
};

export default state;
