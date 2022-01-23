<template>
  <v-container align="center">
    <div class="title">
      <h1>WELCOLME TO BLUE<span class="blue">WORLD</span></h1>
    </div>
    <v-spacer></v-spacer>

    <v-row justify="center" class="container">
      <v-col cols="10" sm="8" md="6" lg="6" xl="4">
        <v-card ref="onSubmit" class="pa-3 mt-8 login-card">
          <v-card-text class="mt-5">
            <v-text-field
              type="email"
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
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              variant="outlined"
              class="mb-1 mr-2"
              :disabled="email === '' || clientKey === '' || password === ''"
              color="#207eeb"
              text
              @click="onSubmit"
            >
              LOGIN
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
  </v-container>
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
    ...mapActions(["loginUser"]),
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
  }
}
.container {
  display: flex;
  flex-direction: row;
}
.login-card {
  box-shadow: 0 0 10px #207eeb;
}
.errorMessage {
  margin-top: 30px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.blue {
  color: #207eeb;
}
.title {
  font-size: 20px;
}
</style>
