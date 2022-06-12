import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

test("Placing a Water Carrier Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 0, "horizontal")[0][0]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 1, "horizontal")[0][1]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 2, "horizontal")[0][2]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 3, "horizontal")[0][3]
  ).toEqual("Water Carrier");
  expect(
    Gameboard().placeShip().placeWaterCarrier(0, 4, "horizontal")[0][4]
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
    Gameboard().placeShip().placeBattleship(0, 1, "horizontal")[0][1]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 2, "horizontal")[0][2]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 3, "horizontal")[0][3]
  ).toEqual("Battleship");
  expect(
    Gameboard().placeShip().placeBattleship(0, 4, "horizontal")[0][4]
  ).toEqual("Battleship");
});

test.only("Placing a Submarine Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placeSubmarine(0, 0, "horizontal")[0][0]
  ).toEqual("Submarine");
  expect(
    Gameboard().placeShip().placeSubmarine(0, 1, "horizontal")[0][1]
  ).toEqual("Submarine");
  expect(
    Gameboard().placeShip().placeSubmarine(0, 2, "horizontal")[0][2]
  ).toEqual("Submarine");
});

test("Placing a Patroller Ship at a specific coordinate", () => {
  expect(
    Gameboard().placeShip().placePatroller(8, 7, "horizontal")[8][7]
  ).toEqual("Patroller");
  expect(
    Gameboard().placeShip().placePatroller(8, 8, "horizontal")[8][8]
  ).toEqual("Patroller");
});
