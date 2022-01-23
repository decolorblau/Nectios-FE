<template>
  <div class="login-container">
    <Login />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Login from "../components/Login/Login.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    Login,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["checkToken"]),
    ...mapGetters(["redirectToHome"]),
  },
  mounted() {
    this.checkToken();
    if (this.user.isAuthenticated) {
      this.redirectToHome();
    }
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgb(250, 250, 250);
}
.blue {
  color: #207eeb;
}
</style>
