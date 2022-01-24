<template>
  <v-card class="ma-1 mb-2 pb-1" width="269.5" @click="redirectToDetail()">
    <v-img
      :src="
        product.product_photo !==
        'https://weddo-ecommerce.s3.eu-west-3.amazonaws.com/profilePhotos/1626447073678.jpg'
          ? product.product_photo
          : 'https://images.theconversation.com/files/387012/original/file-20210301-12-pyj8jo.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'
      "
      height="250px"
      class="mt-3 rounded"
      width="250px"
      lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
      :alt="product.name"
    ></v-img>
    <div>
      <v-card-title class="pb-1"> {{ product.name.toUpperCase() }} </v-card-title>
      <v-card-subtitle class="pb-2 price">{{ product.price }} €</v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
import router from "@/router";

export default {
  name: "productCard",
  props: ["product"],
  data() {
    return {
      pathProduct: `/products/${this.product.id}`,
      currentProduct: {
        id: this.product.id,
        key: this.product.key,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        photo: this.product.product_photo,
        clientId: this.product.client_id,
      },
      id: this.product.id,
    };
  },
  methods: {
    redirectToDetail() {
      router.push(this.pathProduct);
      const { currentProduct } = this;
      localStorage.setItem("currentProduct", JSON.stringify({ currentProduct }));
    },
  },
};
</script>

<style lang="scss" scoped>
.price {
  font-family: "Rubik", sans-serif;
  color: #002dc2;
  font-weight: 500;
  font-size: 20px;
}
</style>
