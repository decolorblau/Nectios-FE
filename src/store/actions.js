import axios from "axios";
import jwtDecode from "jwt-decode";

const actions = {
  async loginUser({ commit }, user) {
    const { data, status } = await axios.post(`${process.env.VUE_APP_API_URL}/login`, user);
    const token = data;
    const userInfo = jwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ token }));
    commit("loadUser", userInfo);
    return status;
  },
  checkToken({ commit }) {
    try {
      const token = JSON.parse(localStorage.getItem("token") || "");
      commit("loadUser", jwtDecode(token.token));
    } catch {
      return "User not logged in";
    }
  },
};

export default actions;
