import CommentForm from "@/components/CommentForm/CommentForm.vue";
import { shallowMount, mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../mockState";

describe("Given a CommentForm component", () => {
  describe("When is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = shallowMount(CommentForm);
      expect(wrapper.html()).toMatchSnapshot();
    });
    test("Then it should render h2 tag with YOUR OPINION IS IMPORTANT text", () => {
      const wrapper = shallowMount(CommentForm);
      const h2Value = wrapper.find("h2").text();
      expect(h2Value).toBe("YOUR OPINION IS IMPORTANT");
    });
    test("Then it should render Description input", () => {
      const wrapper = shallowMount(CommentForm);
      const descriptionInput = wrapper.find("v-textarea");
      const labelDescription = descriptionInput.attributes("label");
      expect(labelDescription).toBe("Write a review");
    });
    test("Then it should render Submit button", () => {
      const wrapper = shallowMount(CommentForm);
      const submitButton = wrapper.find("v-btn").text();
      expect(submitButton).toBe("SHARE OPINION");
    });
    describe("When the form is submitted", () => {
      test("Then it should invoke onSubmit", async () => {
        const store = createStore({
          state() {
            return state;
          },
          actions: {
            loginUser: jest.fn(),
            addComment: jest.fn(),
            getProductComments: jest.fn(),
            getUserComments: jest.fn(),
            getProducts: jest.fn(),
          },
        });

        const wrapper = mount(CommentForm, {
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
