<template>
  <section class="productPage">
    <div class="product">
      <div class="product__card-detail">
        <img
          :src="
            currentProduct.product[product_photo] ===
            'https://boltagency.ca/content/images/2020/03/placeholder-images-product-1_large.png'
              ? currentProduct.product[product_photo]
              : 'https://images.unsplash.com/photo-1641831705160-5d56ac4094cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
          "
          :alt="currentProduct.product.name"
          class="product__avatar"
          lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
        />

        <div class="product__text-container">
          <div class="product__data">
            <h2 class="product__title">{{ currentProduct.product.name.toUpperCase() }}</h2>
            <span class="product__price">{{ currentProduct.product.price }} €</span>
            <p class="product__description">{{ currentProduct.product.description }}</p>
          </div>
          <div class="product__add-comment">
            <p>100 Reviews</p>
            <button>ADD REVIEW</button>
          </div>
        </div>
      </div>
      <div class="product__comments">
        <h2>REVIEWS</h2>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import "@fontsource/rubik";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user", "products", "currentProduct"]),
  },
  methods: {
    ...mapActions(["checkToken", "getProducts", "getCurrentProduct"]),
    ...mapGetters(["redirectToLogin"]),
  },
  mounted() {
    console.log(this.products);
    const route = useRoute();
    const { id } = route.params;
    const currentProduct = this.products.find((product) => product.id === +id);
    this.getCurrentProduct(currentProduct);
  },
  beforeMount() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
};
</script>

<style lang="scss" scoped>
.productPage {
  display: flex;
  justify-content: center;
}
.product {
  margin: 50px 0 30px;
  border-radius: 10px;
  width: 90%;
  height: auto;
  min-height: 70%;
  padding: 30px;
  &__card-detail {
    display: flex;
    justify-content: center;
  }

  &__avatar {
    width: 45%;
    max-width: 620px;
    height: auto;
    border-radius: 10px;
    padding-right: 35px;
  }
  &__text-container {
    width: 45%;
    height: 550px;
    padding-top: 30px;
    padding-left: 35px;
  }
  &__title {
    font-size: 35px;
  }
  &__price {
    font-size: 50px;
    color: rgb(0, 82, 206);
    font-family: "Rubik";
  }

  &__comments {
    margin-top: 50px;
  }
}
</style>
