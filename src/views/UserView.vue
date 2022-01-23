<template>
  <section class="user">
    <div class="user__card hidden-sm-and-down mb-5">
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
          <div class="user__data-container">
            <div class="user__data">
              <v-icon class="user__icons">far fa-envelope</v-icon>
              <div class="user__email-text">
                <p class="user__email-title">EMAIL</p>
                <p>{{ user.user.email }}</p>
              </div>
            </div>
            <div class="user__data">
              <v-icon class="user__icons">far fa-address-card</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">ROLE</p>
                <p>{{ user.user.role }}</p>
              </div>
            </div>
          </div>
          <div class="user__data-container">
            <div class="user__data">
              <v-icon class="user__icons">far fa-bell</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">PHONE</p>
                <p>{{ user.phone }}</p>
              </div>
            </div>
            <div class="user__data">
              <v-icon class="user__icons">far fa-comment-alt</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">REVIEWS</p>
                <p>{{ user.reviews }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="userSm hidden-md-and-up mb-5">
      <div class="userSm__card">
        <div>
          <img
            :src="user.user.profilePhoto"
            :alt="user.user.name"
            class="user__avatar"
            lazy-src="https://c.tenor.com/-NoKc-auITEAAAAC/loading-buffering.gif"
          />
        </div>
        <div class="userSm__textContainer">
          <h2>{{ user.user.name }} {{ user.user.surname }}</h2>
          <div class="userSm__text">
            <div class="user__data">
              <v-icon class="userSm__icons">far fa-envelope</v-icon>
              <div class="user__email-text">
                <p class="user__email-title">EMAIL</p>
                <p>{{ user.user.email }}</p>
              </div>
            </div>
            <div class="user__data">
              <v-icon class="user__icons">far fa-bell</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">PHONE</p>
                <p>{{ user.phone }}</p>
              </div>
            </div>
            <div class="user__data">
              <v-icon class="userSm__icons">far fa-id-badge</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">ROLE</p>
                <p>{{ user.user.role.toLowerCase() }}</p>
              </div>
            </div>
            <div class="user__data">
              <v-icon class="user__icons">far fa-comment-alt</v-icon>
              <div class="user__role-text">
                <p class="user__role-title">REVIEWS</p>
                <p>{{ user.reviews }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </section>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapState } from "vuex";
import Footer from "../components/Footer/Footer.vue";

export default defineComponent({
  name: "Home",

  components: {
    Footer,
  },

  computed: {
    ...mapState(["user", "products"]),
  },
  methods: {
    ...mapActions([
      "checkToken",
      "getProducts",
      "getUser",
      "getUserComments",
      "getLocalComments",
      "loadUserPhone",
      "loadUserReviews",
    ]),
    ...mapGetters(["redirectToLogin"]),
  },

  mounted() {
    this.getUser();
    if (JSON.parse(localStorage.getItem("userReviews") === null)) {
      this.getProducts();
      this.getUserComments(this.products);
    } else {
      const { userReviews } = JSON.parse(localStorage.getItem("userReviews"));
      const { phone } = JSON.parse(localStorage.getItem("phone"));
      this.loadUserPhone(phone);
      this.loadUserReviews(userReviews);
    }
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
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(250, 250, 250);
  &__card {
    margin-top: 5%;
    height: 75%;
    max-height: 620px;
    width: 75%;
    min-width: 325px;
    max-width: 820px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__background-photo {
    height: 35%;
    background-image: url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding-left: 50px;
    border-radius: 10px 10px 0 0;
  }
  &__avatar {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    position: relative;
    bottom: -20%;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  }
  &__textContainer {
    height: 65%;
    width: 100%;
    padding: 80px 70px 70px;
    h2 {
      font-size: 26px;
      font-weight: 500;
      margin-bottom: 50px;
    }
  }
  &__text {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  &__data-container {
    flex-direction: column;
  }
  &__data {
    display: flex;
    padding: 6px;
    align-items: center;
    min-width: 260px;
    width: 100%;
  }
  &__icons {
    margin-right: 20px;
    color: rgb(66, 66, 66);
    font-weight: 300;
    font-size: 20px;
  }
  &__role--text {
    margin-top: 30px;
  }
}
.userSm {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
  &__card {
    height: 90%;
    width: 75%;
    min-width: 325px;
    max-width: 430px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__textContainer {
    height: 65%;
    width: 100%;
    padding: 60px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 8px;
    }
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      font-size: 16px;
    }
  }
  &__icons {
    margin-right: 20px;
    font-weight: 300;
    font-size: 16px;
    color: rgb(66, 66, 66);
  }
}
</style>
