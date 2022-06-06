const Ship = require("../shipFactory");

test("Ship", () => {
  expect(Ship(1)).toBe(1);
});
