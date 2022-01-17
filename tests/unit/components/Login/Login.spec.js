import { shallowMount } from "@vue/test-utils";
import Login from "@/components/Login/Login.vue";

describe("Given a Login component", () => {
  describe("when is rendered", () => {
    test("Then it matchas de snapshot", () => {
      const wrapper = shallowMount(Login);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
