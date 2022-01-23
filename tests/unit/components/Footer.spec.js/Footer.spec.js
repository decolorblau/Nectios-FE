import Footer from "@/components/Footer/Footer.vue";
import { shallowMount } from "@vue/test-utils";

describe("Given a Login component", () => {
  describe("When is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = shallowMount(Footer);
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
