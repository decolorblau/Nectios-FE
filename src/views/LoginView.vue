<template>
  <div class="login-container">
    <Login />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Login from "../components/Login/Login.vue";

export default defineComponent({
  name: "LoginPage",

  components: {
    Login,
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
  background-color: #1c1f28;
}
</style>
