<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="onSubmit" class="pa-2 product-card">
        <v-card-title class="product mt-4 mb-0 pa-0">
          <h2 class="product__title">YOUR OPINION IS IMPORTANT</h2>
        </v-card-title>
        <v-card-text class="pb-0">
          <v-textarea
            ref="description"
            rows="3"
            row-height="18"
            v-model="description"
            maxlength="400"
            :rules="[() => !!description || 'This field is required']"
            label="Write a review"
            counter="400"
            color="#207eeb"
            single-line
            required
            placeholder="Campbell's condensed is a tomato Soup "
            class="ma-0 pa-0"
          ></v-textarea>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn
            variant="outlined"
            class="mt-0 mb-1 mr-2"
            :disabled="description === ''"
            color="#207eeb"
            text
            @click="onSubmit"
          >
            SHARE OPINION
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="errorMessage">
        <v-alert v-if="wrongProduct" variant="outlined" density="compact" color="#207eeb">
          ! Wrong Comment
        </v-alert>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapState } from "vuex";

export default defineComponent({
  name: "commentForm",
  data() {
    return {
      description: "",
      isDisabled: true,
      wrongProduct: false,
    };
  },
  computed: {
    ...mapState(["currentProduct", "products"]),
  },
  methods: {
    ...mapActions(["addComment", "getProductComments", "getUserComments", "getProducts"]),
    async onSubmit() {
      try {
        this.wrongProduct = false;
        if (this.description !== "") {
          const { clientKey } = JSON.parse(
            // eslint-disable-next-line comma-dangle
            localStorage.getItem("clientKey") || ""
          );
          const { currentProduct } = JSON.parse(
            // eslint-disable-next-line comma-dangle
            localStorage.getItem("currentProduct") || ""
          );

          const commentData = {
            description: this.description,
            clientKey,
            productKey: currentProduct.key,
          };
          const status = await this.addComment(commentData);
          if (status === 200) {
            this.description = "";
            const productKey = this.currentProduct.product.key;
            this.getProductComments(productKey);
            localStorage.removeItem("phone");
            localStorage.removeItem("userReviews");
            this.getProducts();
            this.getUserComments(this.products);
          } else {
            this.wrongProduct = true;
          }
        }
      } catch {
        this.wrongProduct = true;
      }
    },
  },
});
</script>

<style lang="scss" scoped>
.product {
  text-align: center;
  align-items: center;
  justify-content: center;
  &__title {
    font-size: 16px;
    font-family: "Roboto, Sans-serif";
    font-weight: 400;
  }
}
.product-card {
  box-shadow: 0 0 10px rgba(32, 126, 235, 0.2);
}
.errorMessage {
  margin-top: 10px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blue {
  color: #207eeb;
}
.world {
  font-weight: 600;
}
</style>
