import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

test("Placing a Water Carrier Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 0, "vertical")[0][0]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 1, "vertical")[1][0]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 2, "vertical")[2][0]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 3, "vertical")[3][0]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 4, "vertical")[4][0]
  ).toEqual("Water Carrier");
});

test("Placing a Destroyer Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeDestroyer(0, 2, "horizontal")[0][2]
  ).toEqual("Destroyer");
  expect(
    Gameboard().placeShip().placeDestroyer(0, 3, "horizontal")[0][3]
  ).toEqual("Destroyer");
  expect(
    Gameboard().placeShip().placeDestroyer(0, 4, "horizontal")[0][4]
  ).toEqual("Destroyer");
});

test("Placing a Battleship Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeBattleship(0, 1, "vertical")[1][0]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 2, "vertical")[2][0]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 3, "vertical")[3][0]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 4, "vertical")[4][0]
  ).toEqual("Battleship");
});

test("Placing a Submarine Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeSubmarine(0, 3, "vertical")[3][0]
  ).toEqual("Submarine");
  expect(
    Gameboard().placeShip().placeSubmarine(0, 4, "vertical")[4][0]
  ).toEqual("Submarine");
});

test.only("Placing a Patroller Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placePatroller(0, 0, "vertical")[0][0]
  ).toEqual("Patroller");
  expect(
    Gameboard().placeShip().placePatroller(0, 0, "vertical")[0][0]
  ).toEqual("Patroller");
});
