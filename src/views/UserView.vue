<template>
  <section class="user">
    <div class="user__card">
      <div class="user__background-photo">
        <img
          :src="user.user.profilePhoto"
          :alt="user.user.name"
          class="user__avatar"
          lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
        />
      </div>
      <div class="user__textContainer">
        <h2>{{ user.user.name }} {{ user.user.surname }}</h2>
        <div class="user__text">
          <div class="user__data">
            <v-icon class="user__icons">far fa-envelope</v-icon>
            <div class="user__email-text">
              <p class="user__email-title">EMAIL</p>
              <p>{{ user.user.email }}</p>
            </div>
          </div>
          <div class="user__data">
            <v-icon class="user__icons">far fa-id-badge</v-icon>
            <div class="user__role-text">
              <p class="user__role-title">ROLE</p>
              <p>{{ user.user.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "Home",

  computed: {
    ...mapState(["user", "products"]),
  },
  methods: {
    ...mapActions(["checkToken", "getProducts", "getUser", "getUserComments", "getLocalComments"]),
    ...mapGetters(["redirectToLogin"]),
  },

  mounted() {
    this.getUser();
    /*     const { uComments } = JSON.parse(localStorage.getItem("userComments") || "");
    if (uComments === undefined) {
      (async () => {
        await this.getUserComments([...this.products]);
        const { comments } = this.user;
        await localStorage.setItem("userComments", JSON.stringify({ comments }));
      })();
    }
    this.getLocalComments(); */
  },
  beforeMount() {
    this.checkToken();
    if (!this.user.isAuthenticated) {
      this.redirectToLogin();
    }
  },
});
</script>

<style lang="scss" scoped>
.user {
  max-height: 100vh;
  height: calc(100vh - 75px);
  display: flex;
  justify-content: center;
  &__card {
    margin-top: 5%;
    height: 75%;
    max-height: 620px;
    width: 75%;
    min-width: 325px;
    max-width: 820px;
    border-radius: 10px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__background-photo {
    height: 35%;
    background-color: blue;
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-left: 50px;
    border-radius: 10px 10px 0 0;
  }
  &__avatar {
    border-radius: 50%;
    height: auto;
    min-width: 150px;
    max-width: 300px;
    width: 25%;
    position: relative;
    bottom: -20%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__textContainer {
    height: 65%;
    width: 100%;
    padding: 80px 70px 70px;
    h2 {
      font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode",
        Geneva, Verdana, sans-serif;
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 50px;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
  }
  &__data {
    height: 100%;
    display: flex;
    padding: 10px;
    align-items: center;
  }
  &__icons {
    margin-right: 20px;
  }
  &__role--text {
    margin-top: 30px;
  }
}
</style>
