<template>
  <div>
    <NavBar />
  </div>
  <div>
    <v-container class="grey lighten-5 mb-6">
      <v-row :align="align" no-gutters style="height: 150px">
        <v-col v-for="n in 3" :key="n">
          <ProductCard />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import NavBar from "../components/NavBar/NavBar.vue";
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default {
  name: "Home",

  components: {
    NavBar,
    ProductCard,
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["checkToken"]),
    ...mapGetters(["redirectToLogin"]),
  },
  mounted() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
};
</script>
