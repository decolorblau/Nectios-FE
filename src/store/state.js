const state = {
  products: [],
  user: {
    isAuthenticated: false,
    clientKey: "",
    user: {
      role: "",
      sub: "",
      iat: "",
    },
  },
  currentProduct: {
    id: "",
    client_id: "",
    description: "",
    key: "",
    name: "",
    price: "",
    product_photo: "",
  },
};

export default state;
