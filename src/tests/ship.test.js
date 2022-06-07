import { Ship } from "../shipFactory";

test("Is Ship Returning Us Something", () => {
  expect(Ship()).toBeDefined();
});

test("Ship Length Test", () => {
  expect(Ship(3)).toHaveLength(3);
});
