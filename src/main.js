import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

// eslint-disable-next-line newline-per-chained-call
createApp(App).use(router).use(store).use(vuetify).mount("#app");
