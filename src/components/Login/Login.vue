<template>
  <v-row justify="center">
    <v-col cols="10" sm="8" md="6" lg="4">
      <v-card ref="form" class="pa-3 login-card">
        <v-card-title class="login mt-5 mb-4">
          <h2 class="login__title">Login</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="name"
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            required
            placeholder="example@nectios.com"
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[
              () => !!password || 'This field is required',
              () => (!!password && password.length >= 8) || 'At least 8 characters',
              passwordCheck,
            ]"
            label="Password"
            hint="At least 8 characters"
            placeholder="password example"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="mb-1 mr-2" :disabled="!valid" color="#FFECB3" text @click="submit">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
});
</script>

<style lang="scss" scoped>
.login {
  text-align: center;
  align-items: center;
  justify-content: center;
  &__title {
    font-size: 24px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
      Geneva, Verdana, sans-serif;
  }
}
.login-card {
  -webkit-box-shadow: 0 0 10px #ffecb3;
  box-shadow: 0 0 10px #ffecb3;
}
</style>
