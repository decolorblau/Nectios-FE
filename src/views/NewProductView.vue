<template>
  <v-container class="form-container pa-0" full-height>
    <ProductForm />
    <Footer />
  </v-container>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import ProductForm from "../components/ProductForm/ProductForm.vue";
import Footer from "../components/Footer/Footer.vue";

export default defineComponent({
  name: "NewProductPage",

  components: {
    ProductForm,
    Footer,
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-color: rgb(250, 250, 250);
}
</style>
