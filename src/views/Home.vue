<template>
  <div>
    <HelloWorld />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import HelloWorld from "../components/HelloWorld.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["checkToken"]),
    ...mapGetters(["redirectToLogin"]),
  },
  mounted() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
};
</script>
