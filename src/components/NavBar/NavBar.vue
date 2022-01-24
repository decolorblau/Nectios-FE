<template>
  <v-app-bar density="comfortable" flat app>
    <v-app-bar-title class="text-uppercase grey--text text-h4" to="/">
      <router-link to="/" class="title display-1">
        <span class="font-weight-light">BLUE</span>
        <span class="world blue">WORLD</span>
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <v-list class="hidden-sm-and-down">
      <v-btn flat @click="redirectToHome()" color="none" class="mr-4 text-uppercase">
        <span class="text-bar">Home</span>
      </v-btn>

      <v-btn
        to="/user"
        @click="redirectToUser()"
        flat
        :ripple="false"
        color="none"
        class="mr-4 text-uppercase"
      >
        <span class="text-bar">User</span>
      </v-btn>

      <v-btn flat @click="redirectToNewProduct()" color="none" class="mr-4 text-uppercase">
        <p class="text-bar"><span class="blue">+ADD</span>PRODUCT</p>
      </v-btn>
      <v-divider class="mx-4" vertical inset />

      <v-btn class="mr-4 ml-5" to="/login" color="none" flat @click="logout()">
        <span class="text-bar">Logout</span>
      </v-btn>
    </v-list>
    <v-banner-content class="hidden-md-and-up">
      <v-btn @click="showDrawer()" color="none" flat text>
        <em class="fas fa-bars"></em>
      </v-btn>
    </v-banner-content>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    position="right"
    width="1000"
    elevation="0"
    color="white"
    border="none"
    class="hidden-md-and-up"
  >
    <v-list nav dense align="center">
      <div active-class="deep-purple--text text--accent-4">
        <v-list-item
          class="pl-7 text-bar"
          title="Home"
          @click="redirectToHome(), showDrawer()"
        ></v-list-item>
        <v-list-item
          class="pl-7 text-bar"
          title="User"
          @click="redirectToUser(), showDrawer()"
        ></v-list-item>
        <v-list-item
          class="pl-7 text-bar"
          title="+ ADD PRODUCT"
          @click="redirectToNewProduct(), showDrawer()"
        ></v-list-item>
        <v-spacer></v-spacer>
        <v-list-item
          class="pl-7 text-bar"
          title="Logout"
          @click="logout(), showDrawer()"
        ></v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";

export default defineComponent({
  name: "NavBar",
  data() {
    return {
      drawer: false,
    };
  },

  methods: {
    ...mapActions(["loginUser", "logoutUser"]),
    ...mapGetters(["redirectToHome", "redirectToUser", "redirectToLogin", "redirectToNewProduct"]),

    logout() {
      this.logoutUser();
      this.redirectToLogin();
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
.text-bar {
  font-weight: 500;
}
.blue {
  color: #207eeb;
}
.world {
  font-weight: 600;
}
.vertical-line {
  width: 1px;
  height: 30px;
  background-color: rgb(80, 80, 80);
  margin: 0;
  padding: 0;
}
</style>
