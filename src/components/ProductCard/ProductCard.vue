<template>
  <v-card class="ma-1 mb-2" width="269.5">
    <v-img :src="product.product_photo" height="200px"></v-img>
    <div class="">
      <v-card-title class="pb-1"> {{ product.name }} </v-card-title>
      <v-spacer></v-spacer>
      <v-card-subtitle class="pb-2">{{ product.price }} €</v-card-subtitle>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "productCard",
  props: ["product"],
};
</script>

<style></style>
