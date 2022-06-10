import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

test("Placing a Water Carrier Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 0)[0][0].shipName
  ).toEqual("Water Carrier");
});

test("Placing a Destroyer Ship at a specific coordinate", () => {
  expect(Gameboard().placeShip().placeDestroyer(0, 0)[0][0].shipName).toEqual(
    "Destroyer"
  );
});

test("Placing a Battleship Ship at a specific coordinate", () => {
  expect(Gameboard().placeShip().placeBattleship(0, 0)[0][0].shipName).toEqual(
    "Battleship"
  );
});
