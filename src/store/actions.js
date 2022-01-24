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
    localStorage.removeItem("phone");
    localStorage.removeItem("currentProduct");
    localStorage.removeItem("userReviews");
    commit("logoutUser");
  },
  async getProducts({ commit }, counter) {
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
      const elementsInPage = 12;
      const start = elementsInPage * counter;
      let end = start + elementsInPage;
      if (newData.length < end) {
        end = newData.length;
        const pageProducts = newData.slice(start, end);
        commit("getPageProducts", pageProducts);
      } else {
        const pageProducts = newData.slice(start, end);
        commit("getPageProducts", pageProducts);
      }
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

  loadCurrentProduct({ commit }, currentProduct) {
    commit("loadCurrentProduct", currentProduct);
  },
  loadUserPhone({ commit }, phone) {
    commit("loadUserPhone", phone);
  },
  loadUserReviews({ commit }, reviews) {
    commit("loadUserReviews", reviews);
  },

  async addProduct({ commit }, product) {
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
      commit("addProduct", newProduct);
      return status;
    } catch {
      return "Error";
    }
  },
  async addComment({ commit }, comment) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { data: newComment, status } = await axios.post(
        `${process.env.VUE_APP_API_URL}/comments`,
        comment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // eslint-disable-next-line comma-dangle
        }
      );
      commit("addComment", newComment);
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
      commit("getProductComments", newData);
    } catch {
      return "Error";
    }
  },

  async getUserComments({ commit }, products) {
    try {
      let counter = 0;
      let userComments = [];
      await products.map(async (product) => {
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
        if (data[0].data.length !== 0) {
          userComments = [...userComments, ...data[0].data];
        }
        counter++;
        if (counter === products.length) {
          commit("getUserComments", userComments);
        }
      });
    } catch {
      return "Error";
    }
  },
};

export default actions;
