<template>
  <v-row justify="center" class="form-container">
    <v-col cols="10" sm="10" md="8" lg="6">
      <v-card ref="onSubmit" class="pa-3 product-card">
        <v-card-title class="product mt-12 mb-10">
          <h2 class="product__title">
            ADD YOUR PRODUCTS TO<span class="world"> BLUE<span class="blue">WORLD</span></span>
          </h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            label="Name"
            required
            color="#207eeb"
            placeholder="Campbell's"
          ></v-text-field>
          <v-text-field
            outlined
            ref="price"
            v-model="price"
            :rules="[() => !!price || 'This field is required']"
            label="Price"
            placeholder="2.50"
            type="number"
            color="#207eeb"
            required
          ></v-text-field>
          <v-textarea
            ref="description"
            rows="5"
            row-height="30"
            v-model="description"
            maxlength="400"
            :rules="[() => !!description || 'This field is required']"
            label="Description"
            counter="400"
            color="#207eeb"
            single-line
            required
            placeholder="Campbell's condensed is a tomato Soup "
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="outlined"
            class="mb-1 mr-2"
            :disabled="name === '' || description === '' || price === ''"
            color="#207eeb"
            text
            @click="onSubmit"
          >
            CREATE PRODUCT
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="errorMessage">
        <v-alert v-if="wrongProduct" variant="outlined" density="compact" color="#207eeb">
          ! This is a wrong Product
        </v-alert>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "ProductForm",
  data() {
    return {
      name: "",
      description: "",
      price: 0,
      isDisabled: true,
      wrongProduct: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["addProduct"]),
    ...mapGetters(["redirectToHome"]),
    async onSubmit() {
      try {
        this.wrongProduct = false;
        if (this.name !== "" && this.description !== "" && this.price !== "") {
          const { clientKey } = JSON.parse(
            // eslint-disable-next-line comma-dangle
            localStorage.getItem("clientKey") || ""
          );

          const productData = {
            name: this.name,
            description: this.description,
            price: this.price,
            clientKey,
          };
          const status = await this.addProduct(productData);
          if (status === 200) {
            this.redirectToHome();
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
    font-size: 26px;
    font-family: "Roboto, sans-serif";
    font-weight: 400;
  }
}
.form-container {
  width: 100%;
  margin-top: 30px;
  padding: 0;
}
.product-card {
  box-shadow: 0 0 10px rgba(32, 126, 235, 0.2);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.errorMessage {
  margin-top: 20px;
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
