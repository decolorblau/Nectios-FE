import NavBar from "@/components/NavBar/NavBar.vue";
import { shallowMount, mount } from "@vue/test-utils";
import { createStore } from "vuex";
import router from "@/router";
import state from "../../mockState";

describe("Given a NavBar component", () => {
  describe("When is rendered", () => {
    test("Then it matches de snapshot", () => {
      const wrapper = shallowMount(NavBar);
      expect(wrapper.html()).toMatchSnapshot();
    });
    test("Then it should render BLUEWORLD input", () => {
      const wrapper = shallowMount(NavBar);
      const [blue, world] = wrapper.findAll("span");
      expect(blue.text()).toBe("BLUE");
      expect(world.text()).toBe("WORLD");
    });
    describe("When we are in desktop Design", () => {
      test("Then it should render Home button", () => {
        const wrapper = shallowMount(NavBar);
        const [homeButton] = wrapper.findAll("v-btn");
        expect(homeButton.text()).toBe("Home");
      });
      describe("When the Home is clickable", () => {
        test("Then it should invoke redirectToHome", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToHome = jest.fn();
          redirectToHome();
          const [homeButton] = wrapper.findAll("v-btn");
          await homeButton.trigger("click");
          expect(redirectToHome).toHaveBeenCalled();
        });
      });
      test("Then it should render User button", () => {
        const wrapper = shallowMount(NavBar);
        const [, userButton] = wrapper.findAll("v-btn");
        expect(userButton.text()).toBe("User");
      });
      describe("When the User is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToUser = jest.fn();
          redirectToUser();
          const [, userButton] = wrapper.findAll("v-btn");
          await userButton.trigger("click");
          expect(redirectToUser).toHaveBeenCalled();
        });
      });
      test("Then it should render +ADDPRODUCT button", () => {
        const wrapper = shallowMount(NavBar);
        const [, , addButton] = wrapper.findAll("v-btn");
        expect(addButton.text()).toBe("+ADDPRODUCT");
      });
      describe("When the +ADDPRODUCT is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToNewProduct = jest.fn();
          redirectToNewProduct();
          const [, , addButton] = wrapper.findAll("v-btn");
          await addButton.trigger("click");
          expect(redirectToNewProduct).toHaveBeenCalled();
        });
      });
      test("Then it should render logout button", () => {
        const wrapper = shallowMount(NavBar);
        const [, , , logout] = wrapper.findAll("v-btn");
        expect(logout.text()).toBe("Logout");
      });
      describe("When the logout is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
            getters: {
              redirectToLogin: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const logout = jest.fn();
          logout();
          const [, , , logoutButton] = wrapper.findAll("v-btn");
          await logoutButton.trigger("click");
          expect(logout).toHaveBeenCalled();
        });
      });
    });
    describe("When we are in mobile Design", () => {
      test("Then it should render Home button", () => {
        const wrapper = shallowMount(NavBar);
        const [homeButton] = wrapper.findAll("v-list-item");
        expect(homeButton.attributes("title")).toBe("Home");
      });
      describe("When the Home is clickable", () => {
        test("Then it should invoke redirectToHome", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToHome = jest.fn();
          redirectToHome();
          const showDrawer = jest.fn();
          showDrawer();
          const [homeButton] = wrapper.findAll("v-list-item");
          await homeButton.trigger("click");
          expect(redirectToHome).toHaveBeenCalled();
          expect(showDrawer).toHaveBeenCalled();
        });
      });
      test("Then it should render User button", () => {
        const wrapper = shallowMount(NavBar);
        const [, userButton] = wrapper.findAll("v-list-item");
        expect(userButton.attributes("title")).toBe("User");
      });
      describe("When the User is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToUser = jest.fn();
          redirectToUser();
          const showDrawer = jest.fn();
          showDrawer();
          const [, userButton] = wrapper.findAll("v-list-item");
          await userButton.trigger("click");
          expect(redirectToUser).toHaveBeenCalled();
          expect(showDrawer).toHaveBeenCalled();
        });
      });
      test("Then it should render +ADD PRODUCT button", () => {
        const wrapper = shallowMount(NavBar);
        const [, , addButton] = wrapper.findAll("v-list-item");
        expect(addButton.attributes("title")).toBe("+ ADD PRODUCT");
      });
      describe("When the +ADD PRODUCT is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const redirectToNewProduct = jest.fn();
          redirectToNewProduct();
          const showDrawer = jest.fn();
          showDrawer();
          const [, , addButton] = wrapper.findAll("v-list-item");
          await addButton.trigger("click");
          expect(redirectToNewProduct).toHaveBeenCalled();
          expect(showDrawer).toHaveBeenCalled();
        });
      });
      test("Then it should render logout button", () => {
        const wrapper = shallowMount(NavBar);
        const [, , , logout] = wrapper.findAll("v-list-item");
        expect(logout.attributes("title")).toBe("Logout");
      });
      describe("When the logout is clickable", () => {
        test("Then it should invoke redirectToUser", async () => {
          const store = createStore({
            state() {
              return state;
            },
            actions: {
              loginUser: jest.fn(),
              logoutUser: jest.fn(),
            },
            getters: {
              redirectToLogin: jest.fn(),
            },
          });

          const wrapper = mount(NavBar, {
            global: {
              plugins: [router, store],
            },
          });

          const logout = jest.fn();
          logout();
          const showDrawer = jest.fn();
          showDrawer();
          const [, , , logoutButton] = wrapper.findAll("v-list-item");
          await logoutButton.trigger("click");
          expect(logout).toHaveBeenCalled();
          expect(showDrawer).toHaveBeenCalled();
        });
      });
    });
  });
});
