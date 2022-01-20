<template>
  <v-card class="mx-auto" max-width="344">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px"></v-img>

    <v-card-title> {{ product.name }} </v-card-title>

    <v-card-subtitle> {{ product.description }} </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>

      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "productCard",
  props: ["product"],
};
</script>

<style></style>
