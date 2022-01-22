<template>
  <v-footer padless class="footer">
    <v-col class="text-center" cols="12">
      <p class="text">Made by deColorBlau</p>
      <p class="text">- NECTIOS -</p>
      <p class="text privacy">Privacy policy | Legal Notice</p>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: rgb(250, 250, 250);
}
.text {
  color: #999999;
  font-size: 16px;
}
.privacy {
  margin-top: 10px;
  font-size: 14px;
}
</style>
