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
    commit("logoutUser");
  },
  async getProducts({ commit }) {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "");
      const { clientKey } = JSON.parse(localStorage.getItem("clientKey") || "");
      const uri = `${process.env.VUE_APP_API_URL}/products?${clientKey}`;
      const encoded = encodeURI(uri);
      const { data } = await axios.get(
        encoded,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          // eslint-disable-next-line comma-dangle
        }
        // eslint-disable-next-line comma-dangle
      );
      const newData = data[0].data;
      commit("getProducts", newData);
    } catch {
      return "Error";
    }
  },
};

export default actions;
