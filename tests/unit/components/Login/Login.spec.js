import Login from "@/components/Login/Login.vue";
import { shallowMount, mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../mockState";

describe("Given a Login component", () => {
  describe("When is rendered", () => {
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
      const wrapper = shallowMount(Login);
      const EmailInput = wrapper.findAll("v-text-field");
      const labelEmail = EmailInput[0].attributes("label");
      expect(labelEmail).toBe("Email");
    });
    test("Then it should render clientKey input", () => {
      const wrapper = shallowMount(Login);
      const ClientKeyInput = wrapper.findAll("v-text-field");
      const labelClientKey = ClientKeyInput[1].attributes("label");
      expect(labelClientKey).toBe("Client Key");
    });
    test("Then it should render Password input", () => {
      const wrapper = shallowMount(Login);
      const PasswordInput = wrapper.findAll("v-text-field");
      const labelPassword = PasswordInput[2].attributes("label");
      expect(labelPassword).toBe("Password");
    });
  });
  describe("When the form is submitted", () => {
    test("Then it should invoke onSubmit", () => {
      const store = createStore({
        state() {
          return state;
        },
        actions: { loginUser: jest.fn() },
      });

      const wrapper = mount(Login, {
        global: {
          plugins: [router, store],
        },
      });

      const onSubmit = jest.fn();
      onSubmit();
      const form = wrapper.get("v-card");
      form.trigger("submit");
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
