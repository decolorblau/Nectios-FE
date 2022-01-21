<template>
  <section class="notFound">
    <p class="title"><span class="blue">404</span> Not Found</p>
    <p>The page you were looking for does not exist</p>
    <v-btn variant="outlined" class="mt-14" color="#207eeb" @click="redirectToHome()"
      >GO BACK HOME!</v-btn
    >
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NotFound",
  methods: {
    ...mapGetters(["redirectToHome"]),
  },
};
</script>

<style lang="scss" scoped>
.notFound {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 35px;
  font-weight: 300;
}
.blue {
  color: #207eeb;
}
.title {
  font-size: 60px;
  font-weight: 500;
}
</style>
