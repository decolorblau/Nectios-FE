import axios from "axios";
import jwtDecode from "jwt-decode";

const actions = {
  async loginUser({ commit }, user) {
    const { data, status } = await axios.post(`${process.env.VUE_APP_API_URL}/login`, user);
    const token = data;
    const userInfo = jwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ token }));
    const { clientKey } = user;
    localStorage.setItem("clientKey", JSON.stringify({ clientKey }));
    commit("loadUser", userInfo);
    return status;
  },
  checkToken({ commit }) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      commit("loadUser", jwtDecode(token));
    } catch {
      return "User not logged in";
    }
  },
  async logoutUser({ commit }) {
    localStorage.removeItem("token");
    localStorage.removeItem("clientKey");
    commit("logoutUser");
  },
  async getProducts({ commit }) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
      const uri = `${process.env.VUE_APP_API_URL}/products?clientKey=${clientKey}`;
      const encoded = encodeURI(uri);
      const { data } = await axios.get(encoded, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newData = data[0].data;
      commit("getProducts", newData);
    } catch {
      return "Error";
    }
  },
  async getUser({ commit }) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
      const uri = `${process.env.VUE_APP_API_URL}/users?clientKey=${clientKey}`;
      const encoded = encodeURI(uri);
      const { data } = await axios.get(encoded, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const [newData] = data[0].data;
      commit("getUsers", newData);
    } catch {
      return "Error";
    }
  },
  getCurrentProduct({ commit }, currentProduct) {
    commit("getCurrentProduct", currentProduct);
  },

  async addProducts({ commit }, product) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data: newProduct, status } = await axios.post(
        `${process.env.VUE_APP_API_URL}/products`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // eslint-disable-next-line comma-dangle
        }
      );
      console.log("data a enviar", newProduct);
      commit("addProduct", newProduct);
      return status;
    } catch {
      return "Error";
    }
  },
  async getProductComments({ commit }, productKey) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
      const uri = `${process.env.VUE_APP_API_URL}/comments?clientKey=${clientKey}&productKey=${productKey}`;
      const encoded = encodeURI(uri);
      const { data } = await axios.get(encoded, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const newData = data[0].data;
      console.log("newData", newData);
      commit("getProductComments", newData);
    } catch {
      return "Error";
    }
  },

  async getUserComments({ commit }, products) {
    try {
      const { userComments } = JSON.parse(localStorage.getItem("userComments") || "");

      let newData = [];
      if (userComments === undefined) {
        products.forEach(async (product) => {
          const productKey = product.key;
          const { token } = JSON.parse(localStorage.getItem("token") || "");
          const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
          const uri = `${process.env.VUE_APP_API_URL}/comments?clientKey=${clientKey}&productKey=${productKey}`;
          const encoded = encodeURI(uri);
          const { data } = await axios.get(encoded, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          newData = data[0].data;
          commit("getUserComments", newData);
        });
      }
    } catch {
      return "Error";
    }
  },
  async getComments(productKey) {
    const { token } = JSON.parse(localStorage.getItem("token") || "");
    const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
    const uri = `${process.env.VUE_APP_API_URL}/comments?clientKey=${clientKey}&productKey=${productKey}`;
    const encoded = encodeURI(uri);
    const { data } = await axios.get(encoded, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const newData = data[0].data;
    return newData;
  },
  getLocalComments({ commit }) {
    const { userComments } = JSON.parse(localStorage.getItem("userComments") || "");
    commit("getLocalComments", userComments);
  },
};

export default actions;
