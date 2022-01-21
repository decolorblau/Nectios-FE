<template>
  <v-app>
    <header v-if="user.isAuthenticated">
      <NavBar />
    </header>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "./components/NavBar/NavBar.vue";
import "@fontsource/roboto";

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
  font-family: "Roboto";
}
</style>
