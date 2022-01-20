<template>
  <div class="home">
    <div>
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters style="height: 150px">
          <v-col v-for="(product, i) in products" :key="i">
            <ProductCard :product="product" />
          </v-col>
          <h1 v-for="product in products" :key="product.id"></h1>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default defineComponent({
  name: "Home",
  computed: {
    ...mapState(["user", "products"]),
  },
  methods: {
    ...mapActions(["checkToken", "getProducts"]),
    ...mapGetters(["redirectToLogin"]),
  },

  mounted() {
    this.getProducts();
    console.log(this.products);
  },
  components: {
    ProductCard,
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
.home {
  display: flex;
  flex-direction: column;
}
</style>
