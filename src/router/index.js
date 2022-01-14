import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/LoginView.vue";
import NotFound from "../views/NotFoundView.vue";
import paths from "./paths";

const { home, notFound, login } = paths;

const routes = [
  {
    path: home,
    name: "Home",
    component: Home,
  },
  {
    path: login,
    name: "Login",
    component: Login,
  },
  {
    path: notFound,
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
