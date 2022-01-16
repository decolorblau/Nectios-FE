import router from "../router";
import paths from "../router/paths";

const getters = {
  redirectToHome() {
    router.push(paths.home);
  },
  redirectToLogin() {
    router.push(paths.login);
  },
};

export default getters;
