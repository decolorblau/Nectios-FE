<template>
  <div class="home">
    <v-container fill-height class="grid-list">
      <v-row no-gutters wrap style="height: 150px">
        <v-col
          d-flex
          v-for="(product, i) in products"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
    </v-container>
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
  align-items: center;
  justify-content: center;
}
.grid {
  width: 90%;
  height: 75%;
}
</style>
