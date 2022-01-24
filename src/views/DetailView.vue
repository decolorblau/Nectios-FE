<template>
  <section class="productPage">
    <div class="product pb-16">
      <div class="product__card-detail-sm hidden-md-and-up px-1">
        <v-img
          :src="
            currentProduct.product.photo ===
            'https://boltagency.ca/content/images/2020/03/placeholder-images-product-1_large.png'
              ? currentProduct.product.photo
              : 'https://images.theconversation.com/files/387012/original/file-20210301-12-pyj8jo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
          "
          :alt="currentProduct.product.name"
          class="product__avatar-sm"
          lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
        />

        <div class="product__text-container-sm">
          <div class="product__data">
            <h2 class="product__title">
              {{ currentProduct.product.name.toUpperCase() }}
            </h2>
            <span class="product__price-sm">{{ currentProduct.product.price }} €</span>
            <p class="product__description-sm mb-10 mt-3 h3">
              {{ currentProduct.product.description }}
            </p>
          </div>
          <div class="product__add-comment">
            <p v-if="productComments.isReviewed" class="mb-3 product__review-sm">
              This product have
              <span class="blue">{{ productComments.comments.length }} Reviews</span>
            </p>
            <p v-else class="mb-3 product__review">
              This product have
              <span class="blue">0 Reviews.</span>
              Be the first!
            </p>
            <CommentForm />
          </div>
        </div>
      </div>
      <div class="product__card-detail hidden-sm-and-down px-6">
        <v-img
          :src="
            currentProduct.product.photo ===
            'https://boltagency.ca/content/images/2020/03/placeholder-images-product-1_large.png'
              ? currentProduct.product.photo
              : 'https://images.theconversation.com/files/387012/original/file-20210301-12-pyj8jo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
          "
          :alt="currentProduct.product.name"
          class="product__avatar"
          lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
        />

        <div class="product__text-container">
          <div class="product__data">
            <h2 class="product__title">
              {{ currentProduct.product.name.toUpperCase() }}
            </h2>
            <span class="product__price">{{ currentProduct.product.price }} €</span>
            <p class="product__description mb-10 mt-3 h3">
              {{ currentProduct.product.description }}
            </p>
          </div>
          <div class="product__add-comment">
            <p v-if="productComments.isReviewed" class="mb-3 product__review">
              This product have
              <span class="blue">{{ productComments.comments.length }} Reviews</span>
            </p>
            <p v-else class="mb-3 product__review">
              This product have
              <span class="blue">0 Reviews.</span>
              Be the first!
            </p>
            <CommentForm />
          </div>
        </div>
      </div>
      <v-container class="mt-8 mr-10 ml-10 pl-6 pr-6" full-height>
        <div class="comments-title">
          <h2>{{ currentProduct.product.name.toUpperCase() }} <span> REVIEWS</span></h2>
        </div>
        <v-row v-if="productComments.isReviewed">
          <v-col
            d-flex
            v-for="(comment, i) in productComments.comments"
            :key="i"
            cols="12"
            align-self="center"
          >
            <v-card class="mt-1" outline elevation="0">
              <v-card-title class="pa-0 pt-3"
                >{{ productComments.comments[i].createdBy.name }}
                {{ productComments.comments[i].createdBy.surname }}</v-card-title
              >
              <v-card-text class="pa-0 pt-1"
                >{{ productComments.comments[i].description }}
              </v-card-text>
            </v-card>
            <v-divider></v-divider>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col cols="12" class="mt-7">
            <p>There are any review about this product yet.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
  <Footer />
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import CommentForm from "../components/CommentForm/CommentForm.vue";
import Footer from "../components/Footer/Footer.vue";

export default {
  name: "DetailView",
  components: {
    CommentForm,
    Footer,
  },
  computed: {
    ...mapState(["user", "products", "currentProduct", "productComments"]),
  },
  methods: {
    ...mapActions(["checkToken", "getProducts", "loadCurrentProduct", "getProductComments"]),
    ...mapGetters(["redirectToLogin"]),
  },
  mounted() {
    const { currentProduct } = JSON.parse(localStorage.getItem("currentProduct"));
    this.loadCurrentProduct(currentProduct);
    const productKey = this.currentProduct.product.key;
    this.getProductComments(productKey);
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
  background-color: rgb(250, 250, 250);
  min-height: 100vh;
}
.product {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px 0 30px;
  border-radius: 10px;
  width: 90%;
  height: auto;
  min-height: 70%;
  padding: 30px;
  background-color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);

  &__card-detail {
    display: flex;
    width: 100%;
    padding-top: 30px;
    justify-content: space-between;
  }
  &__card-detail-sm {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    h2 {
      font-size: 24px;
    }
  }
  &__description {
    font-size: 18px;
  }
  &__description-sm {
    font-size: 16px;
  }
  &__review {
    font-size: 14px;
  }
  &__review-sm {
    font-size: 12px;
  }
  &__avatar {
    width: 42%;
    height: auto;
    min-width: 375px;
    max-width: 550px;
    max-height: 550px;
    border-radius: 10px;
    margin-right: 35px;
  }
  &__avatar-sm {
    width: 100%;
    height: auto;
    min-width: 280px;
    max-width: 620px;
    max-height: 620px;
    border-radius: 10px;
  }
  &__text-container {
    width: 45%;
    height: 550px;
    padding-top: 30px;
    margin-left: 35px;
  }
  &__text-container-sm {
    width: 100%;
    height: 550px;
    padding-top: 20px;
  }
  &__title {
    font-size: 35px;
  }
  &__price {
    font-size: 50px;
    color: #207eeb;
    font-family: "Rubik", sans-serif;
  }
  &__price-sm {
    font-size: 36px;
    color: #207eeb;
    font-family: "Rubik", sans-serif;
  }

  &__comments {
    margin-top: 50px;
  }
}

.blue {
  color: #207eeb;
  font-weight: 500;
}
.comments-title {
  font-size: 15px;
  span {
    color: #207eeb;
  }
}
</style>
