<template>
  <v-app id="app">
    <header v-if="user.isAuthenticated">
      <NavBar />
    </header>
    <v-divider></v-divider>
    <v-main fill-heigh>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/NavBar/NavBar.vue";
import "@fontsource/roboto";
import "@fontsource/rubik";

export default {
  name: "App",
  components: {
    NavBar,
  },

  data: () => ({
    //
  }),
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  min-height: 100vh;
  font-family: "Roboto", sans-serif;
}
</style>
