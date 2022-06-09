import { Gameboard } from "../GameboardFactory";

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

test("Checking to see if a 2 x 2 2D Array is being created", () => {
  expect(Gameboard().gameBoardArray).toEqual([
    [null, null],
    [null, null],
  ]);
});
