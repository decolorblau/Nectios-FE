import actions from "

describe("Given loadUserPhone action", () => {
  describe("When we have user phone number", () => {
    test("Then the action have been call with phone number", () => {
      const commit = jest.fn()
      const phone = "123456789",

      actions.loadUserPhone({commit}, phone)
    });
  });
});
