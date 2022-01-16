import axios from "axios";
import jwtDecode from "jwt-decode";

const actions = {
  async loginUser({ commit }, user) {
    const { data } = await axios.post(`${process.env.VUE_APP_API_URL}/login`, user);
    const { token } = data;
    const userInfo = jwtDecode(token);
    localStorage.setItem("token", JSON.stringify({ token }));
    commit("loadUser", userInfo);
  },
};

export default actions;
