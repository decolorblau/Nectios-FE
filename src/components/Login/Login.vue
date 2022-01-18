<template>
  <v-row justify="center">
    <v-col cols="10" sm="8" md="6" lg="4">
      <v-card ref="onSubmit" class="pa-3 login-card">
        <v-card-title class="login mt-5 mb-4">
          <h2 class="login__title">Login</h2>
        </v-card-title>
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="email"
            :rules="[() => !!email || 'This field is required']"
            label="Email"
            required
            placeholder="example@nectios.com"
          ></v-text-field>
          <v-text-field
            ref="clientKey"
            v-model="clientKey"
            :rules="[() => !!clientKey || 'This field is required']"
            label="Client Key"
            required
            placeholder="ff000aa0-1bb1-222c-8888-0000aa123456"
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="password"
            :rules="[
              () => !!password || 'This field is required',
              () => (!!password && password.length >= 8) || 'At least 8 characters',
            ]"
            label="Password"
            placeholder="password example"
            required
            counter="Mín 8 characters"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mb-1 mr-2"
            :disabled="email === '' || clientKey === '' || password === ''"
            color="#fb8c00"
            text
            @click="onSubmit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="errorMessage">
        <v-alert v-if="wrongCredentials" type="warning" variant="outlined" density="compact">
          Wrong email or password
        </v-alert>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Login",
  data() {
    return {
      email: "claudia@pruebatecnica.com",
      clientKey: "cc794dc0-6bc9-114c-9066-0242ac493029",
      password: "Password1234",
      isDisabled: true,
      wrongCredentials: false,
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["loginUser", "getClientKey"]),
    ...mapGetters(["redirectToHome"]),
    async onSubmit() {
      try {
        this.wrongCredentials = false;

        if (this.email !== "" && this.clientKey !== "" && this.password !== "") {
          const userData = {
            email: this.email,
            clientKey: this.clientKey,
            password: this.password,
          };
          const status = await this.loginUser(userData);

          if (status === 200) {
            this.getClientKey(this.clientKey);
            this.redirectToHome();
          } else {
            this.wrongCredentials = true;
          }
        }
      } catch {
        this.wrongCredentials = true;
      }
    },
  },
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
  -webkit-box-shadow: 0 0 10px #fb8c00;
  box-shadow: 0 0 10px #fb8c00;
}
.errorMessage {
  margin-top: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
