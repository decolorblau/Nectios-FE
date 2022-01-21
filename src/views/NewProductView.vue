<template>
  <v-container class="form-container">
    <ProductForm />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import ProductForm from "../components/ProductForm/ProductForm.vue";

export default defineComponent({
  name: "NewProductPage",

  components: {
    ProductForm,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["checkToken"]),
    ...mapGetters(["redirectToHome"]),
  },
  beforeMount() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  min-width: 100vw;
  height: calc(100vh - 56px);
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgb(250, 250, 250);
}
</style>
