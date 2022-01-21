const state = {
  products: [],
  comments: [],
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
  },
  currentProduct: {
    product: {
      id: "",
      client_id: "",
      description: "",
      key: "",
      name: "",
      price: "",
      product_photo: "",
    },
    comments: [],
  },
};

export default state;
