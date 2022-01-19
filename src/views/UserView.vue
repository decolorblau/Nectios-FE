<template>
  <h1>User</h1>
  <p>{{ user.comments }}</p>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Home",

  computed: {
    ...mapState(["user", "products"]),
  },
  methods: {
    ...mapActions(["checkToken", "getProducts", "getUser", "getUserComments", "getLocalComments"]),
    ...mapGetters(["redirectToLogin"]),
  },

  mounted() {
    this.getUser();
    const { uComments } = JSON.parse(localStorage.getItem("userComments") || "");
    console.log(uComments);
    if (uComments !== undefined) {
      console.log("hhhhhhhhhhhh");
    } else {
      (async () => {
        await this.getUserComments([...this.products]);
        const { comments } = this.user;
        await console.log("eeeeeeeeeeeee", comments);
        await localStorage.setItem("userComments", JSON.stringify({ comments }));
      })();
    }
    this.getLocalComments();
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
