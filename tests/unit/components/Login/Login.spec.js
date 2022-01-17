import Login from "@/components/Login/Login.vue";
import Vue from "vue";
import Vuetify from "vuetify";
import { shallowMount, createLocalVue } from "@vue/test-utils";

Vue.use(Vuetify);
const localVue = createLocalVue;
let vuetify;

beforeEach(() => {
  vuetify = new Vuetify();
});

describe("Given a Login component", () => {
  describe("when is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = shallowMount(Login);
      expect(wrapper.html()).toMatchSnapshot();
    });
    test("Then it should render h2 tag with Login text", () => {
      const wrapper = shallowMount(Login);
      const h2Value = wrapper.find("h2").text();
      expect(h2Value).toBe("Login");
    });

    test("Then it should render Email input", () => {
      const wrapper = shallowMount(Login, {
        localVue,
        vuetify,
      });
      const textInput = wrapper.find(".v-text-field");
      const emailInput = textInput.find('label[for="email]');
      expect(emailInput).toBeTruthy();
    });
  });
});
