<template>
  <nav>
    <v-app-bar density="comfortable" flat app>
      <v-app-bar-title class="text-uppercase grey--text text-h4" to="/">
        <router-link to="/" class="title dislay-1">
          <span class="font-weight-light">E-</span>
          <span>BLUE</span>
        </router-link>
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn flat @click="redirectToHome()" color="none" class="mr-4 text-uppercase">
        <!--         <v-icon left>far fa-house</v-icon>
 -->
        <span>Home</span>
      </v-btn>

      <v-btn
        to="/user"
        @click="redirectToUser()"
        flat
        :ripple="false"
        color="none"
        class="mr-4 text-uppercase"
      >
        <!--         <v-icon left>far fa-user-circle</v-icon>
 -->
        <span>User</span>
      </v-btn>

      <v-divider inset vertical></v-divider>

      <v-btn class="mr-4 ml-5" to="/login" color="none" flat @click="logout()">
        <!--         <v-icon left>fas fa-sign-out-alt</v-icon>
 -->
        <span>Logout</span>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "NavBar",

  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    ...mapGetters(["redirectToHome", "redirectToUser", "redirectToLogin"]),

    logout() {
      this.logoutUser();
      this.redirectToLogin();
    },
  },
});
</script>

<style lang="scss" scoped>
.title {
  color: inherit;
  text-decoration: none;

  :visited {
    color: inherit;
  }
}
</style>
