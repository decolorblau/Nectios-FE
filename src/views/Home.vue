<template>
  <section class="home">
    <v-container fluid fill-heigh align="center" class="grid-list">
      <v-row fill-height no-gutters wrap style="height: 150px" class="table">
        <v-col
          d-flex
          v-for="(product, i) in pageProducts"
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
        <v-col cols="12" class="pagination">
          <v-btn
            :disabled="counter === 0"
            @click="firstPage()"
            color="rgb(250, 250, 250)"
            flat
            class="hidden-sm-and-down pagination__button"
            >&#60;&#60; First</v-btn
          >
          <v-btn
            :disabled="counter === 0"
            @click="beforePage()"
            color="rgb(250, 250, 250)"
            class="pagination__button"
            flat
          >
            &#60; Before</v-btn
          >
          <p class="pagination__text">
            page {{ counter + 1 }} of {{ Math.ceil(products.length / elementsInPage) }}
          </p>
          <v-btn
            :disabled="(counter + 1) * elementsInPage >= products.length"
            @click="nextPage()"
            color="rgb(250, 250, 250)"
            class="pagination__button"
            flat
          >
            Next &#62;</v-btn
          >
          <v-btn
            :disabled="(counter + 1) * elementsInPage >= products.length"
            @click="lastPage()"
            color="rgb(250, 250, 250)"
            flat
            class="hidden-sm-and-down pagination__button"
          >
            Last &#62;&#62;</v-btn
          >
        </v-col>
        <v-divider class="mt-6"></v-divider>
        <v-col cols="12" class="footer">
          <Footer class="mt-3 mb-10" />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Footer from "../components/Footer/Footer.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      page: this.counter + 1,
      counter: 0,
      elementsInPage: 12,
    };
  },

  components: {
    ProductCard,
    Footer,
  },

  computed: {
    ...mapState(["user", "products", "pageProducts"]),
  },
  methods: {
    ...mapActions([
      "checkToken",
      "getProducts",
      "getPageProducts",
      "counterDecrease",
      "counterIncrease",
    ]),
    ...mapGetters(["redirectToLogin"]),

    nextPage() {
      this.counter++;
      this.getProducts(this.counter);
    },
    beforePage() {
      this.counter--;
      this.getProducts(this.counter);
    },
    firstPage() {
      this.counter = 0;
      this.getProducts(this.counter);
    },
    lastPage() {
      this.counter = Math.floor(this.products.length / this.elementsInPage);
      this.getProducts(this.counter);
    },
  },
  created() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
  mounted() {
    this.getProducts(this.counter);
  },
});
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  background-color: rgb(250, 250, 250);
  font-family: Helvetica, "Hilda-Regular", Arial, sans-serif;
}
.grid-list {
  width: 90%;
  height: auto;
  min-height: 100vh;
}
.footer {
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
}
.table {
  background-color: rgb(250, 250, 250);
}
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  color: #999999;
  &__button {
    margin: 0 10px;
  }
  &__text {
    margin: 0 30px;
  }
}
</style>
