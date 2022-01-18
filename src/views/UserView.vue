<template>
  <h1>User</h1>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["checkToken", "getUser"]),
    ...mapGetters(["redirectToLogin"]),
  },

  mounted() {
    this.getUser();
  },
  beforeMount() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
});
</script>

<style lang="sass"></style>
