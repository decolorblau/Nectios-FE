import router from "../router";
import paths from "../router/paths";

const getters = {
  redirectToHome() {
    router.push(paths.home);
  },
  redirectToLogin() {
    router.push(paths.login);
  },
  redirectToUser() {
    router.push(paths.user);
  },
  redirectToNewProduct() {
    router.push(paths.newProduct);
  },

  getCurrentProduct(currentProduct) {
    localStorage.setItem("currentProduct", JSON.stringify({ currentProduct }));
  },
};

export default getters;
