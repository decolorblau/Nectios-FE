<template>
  <div class="home">
    <div>
      <v-container class="grey lighten-5 mb-6">
        <v-row no-gutters style="height: 150px">
          <v-col v-for="n in 3" :key="n">
            <ProductCard />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import ProductCard from "../components/ProductCard/ProductCard.vue";

export default defineComponent({
  name: "Home",

  components: {
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
});
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
