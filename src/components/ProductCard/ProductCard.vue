<template>
  <v-card class="ma-1 mb-2" width="269.5" @click="redirectToDetail()">
    <v-img
      :src="
        product.product_photo ===
        'https://boltagency.ca/content/images/2020/03/placeholder-images-product-1_large.png'
          ? product.product_photo
          : 'https://images.unsplash.com/photo-1641831705160-5d56ac4094cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
      "
      height="250px"
      class="mt-3 rounded"
      width="250px"
      lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
    ></v-img>
    <div class="">
      <v-card-title class="pb-1"> {{ product.name.toUpperCase() }} </v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="pb-2">{{ product.price }} €</v-card-subtitle>
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
    };
  },
  methods: {
    redirectToDetail() {
      router.push(this.pathProduct);
    },
  },
};
</script>

<style lang="scss" scoped></style>
