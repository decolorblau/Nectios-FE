import { mount, shallowMount } from "@vue/test-utils";
import LoginView from "@/views/LoginView";
import { createStore } from "vuex";
import router from "@/router";
import state from "../mockState";

let store;
const chekTokenMock = jest.fn();
const redirectToHomeMock = jest.fn();

beforeEach(() => {
  store = createStore({
    state() {
      return state;
    },
    actions: { checkToken: chekTokenMock },
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

      expect(chekTokenMock).toHaveBeenCalled();
    });
  });
});
