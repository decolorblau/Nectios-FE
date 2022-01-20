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
      <div class="hidden-sm-and-down">
        <v-btn flat @click="redirectToHome()" color="none" class="mr-4 text-uppercase">
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
          <span>User</span>
        </v-btn>

        <v-divider inset vertical></v-divider>

        <v-btn class="mr-4 ml-5" to="/login" color="none" flat @click="logout()">
          <span>Logout</span>
        </v-btn>
      </div>
      <div class="hidden-md-and-up">
        <v-btn @click="showDrawer()" color="none" flat text>
          <!--           <v-icon class="icon">fas fa-bar</v-icon>
 -->
          <i class="fas fa-bars"></i>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary class="hidden-md-and-up">
      <v-list nav dense>
        <div active-class="deep-purple--text text--accent-4">
          <v-list-item class="pl-7" title="Home" @click="redirectToHome()"></v-list-item>
          <v-list-item class="pl-7" title="User" @click="redirectToUser()"></v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      drawer: false,
      menu: [
        { icon: "home", title: "HOME" },
        { icon: "user", title: "USER" },
        { icon: "logout", title: "LOGOUT" },
      ],
    };
  },

  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    ...mapGetters(["redirectToHome", "redirectToUser", "redirectToLogin"]),

    logout() {
      this.logoutUser();
      this.redirectToLogin();
    },
    menuItem() {
      return this.menu;
    },
    showDrawer() {
      this.drawer = !this.drawer;
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
.icon {
  color: red;
  font-size: 30px;
  position: absolute;
}
</style>
