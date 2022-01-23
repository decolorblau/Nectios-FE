import { mount, shallowMount } from "@vue/test-utils";
import LoginView from "@/views/LoginView";
import { createStore } from "vuex";
import router from "@/router";
import state from "../mockState";

let store;
const checkTokenMock = jest.fn();
const redirectToHomeMock = jest.fn();

beforeEach(() => {
  store = createStore({
    state() {
      return state;
    },
    actions: { checkToken: checkTokenMock },
    getters: { redirectToHome: redirectToHomeMock },
  });
});

describe("Given a LoginView component", () => {
  describe("when is mounted", () => {
    test("Then the action checkToken should be called", () => {
      shallowMount(LoginView, {
        global: {
          plugins: [router, store],
        },
      });

      expect(checkTokenMock).toHaveBeenCalled();
    });
    describe("When the user is not Authenticated", () => {
      test("Then redirectToHome action not should be called", () => {
        shallowMount(LoginView, {
          global: {
            plugins: [router, store],
          },
        });

        expect(redirectToHomeMock).not.toHaveBeenCalled();
      });
    });
    describe("When the user is Authenticated", () => {
      test("Then redirectToHome action should be called", async () => {
        state.user.isAuthenticated = true;
        shallowMount(LoginView, {
          global: {
            plugins: [router, store],
          },
        });

        expect(redirectToHomeMock).toHaveBeenCalled();
      });
    });
  });
  describe("when is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = mount(LoginView, {
        global: {
          plugins: [router, store],
        },
      });
      expect(wrapper.html()).toMatchSnapshot();
    });
  });
});
