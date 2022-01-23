import ProductForm from "@/components/ProductForm/ProductForm.vue";
import { shallowMount, mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../mockState";

describe("Given a ProductForm component", () => {
  describe("When is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = shallowMount(ProductForm);
      expect(wrapper.html()).toMatchSnapshot();
    });
    test("Then it should render h2 tag with ADD YOUR PRODUCTS TO BLUEWORLD text", () => {
      const wrapper = shallowMount(ProductForm);
      const h2Value = wrapper.find("h2").text();
      expect(h2Value).toBe("ADD YOUR PRODUCTS TO BLUEWORLD");
    });
    test("Then it should render Name input", () => {
      const wrapper = shallowMount(ProductForm);
      const [nameInput] = wrapper.findAll("v-text-field");
      expect(nameInput.attributes("label")).toBe("Name");
    });
    test("Then it should render Description input", () => {
      const wrapper = shallowMount(ProductForm);
      const [, priceInput] = wrapper.findAll("v-text-field");
      expect(priceInput.attributes("label")).toBe("Price");
    });
    test("Then it should render Description input", () => {
      const wrapper = shallowMount(ProductForm);
      const descriptionInput = wrapper.find("v-textarea").attributes("label");
      expect(descriptionInput).toBe("Description");
    });
    test("Then it should render Submit button", () => {
      const wrapper = shallowMount(ProductForm);
      const submitButton = wrapper.find("v-btn").text();
      expect(submitButton).toBe("CREATE PRODUCT");
    });
    describe("When the form is submitted", () => {
      test("Then it should invoke onSubmit", async () => {
        const store = createStore({
          state() {
            return state;
          },
          actions: {
            addProduct: jest.fn(),
          },
        });

        const wrapper = mount(ProductForm, {
          global: {
            plugins: [router, store],
          },
        });

        const onSubmit = jest.fn();
        onSubmit();
        const form = wrapper.get("v-card");
        await form.trigger("submit");
        expect(onSubmit).toHaveBeenCalled();
      });
    });
  });
});
