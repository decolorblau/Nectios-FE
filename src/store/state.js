const state = {
  products: [],
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
