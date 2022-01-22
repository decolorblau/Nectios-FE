<template>
  <div class="home">
    <v-container fluid fill-heigh align="center" class="grid-list">
      <v-row fill-height no-gutters wrap style="height: 150px" class="table">
        <v-col
          d-flex
          v-for="(product, i) in products"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="2"
          align-self="center"
        >
          <ProductCard :product="product" />
        </v-col>
        <v-divider class="mt-6"></v-divider>
        <v-col cols="12" class="footer">
          <Footer class="mt-3 mb-10" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Footer from "../components/Footer/Footer.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default defineComponent({
  name: "Home",
  components: {
    ProductCard,
    Footer,
  },

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
  min-height: 100%;
  background-color: rgb(250, 250, 250);
  font-family: Helvetica, "Hilda-Regular", Arial, sans-serif;
}
.grid-list {
  width: 90%;
  height: auto;
  min-height: 100vh;
}
.footer {
  position: relative;
  bottom: 0;
}
.table {
  background-color: rgb(250, 250, 250);
}
</style>
