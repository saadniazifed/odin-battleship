import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";
let gameboard;

beforeAll(() => {
  gameboard = Gameboard();
});

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

describe.only("Battleship Ship Tests are inside this block", () => {
  test("Placement of the Battleship", () => {
    gameboard.placeShip().placeBattleship(0, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][0]).toEqual("Battleship");
    expect(gameboard.gameBoardArray[1][0]).toEqual("Battleship");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Battleship");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Battleship");
  });
});

describe("Submarine Tests are inside this block", () => {
  test("Placement of the submarine", () => {
    gameboard.placeShip().placeSubmarine(0, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][0]).toEqual("Submarine");
    expect(gameboard.gameBoardArray[1][0]).toEqual("Submarine");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Submarine");
  });
});

describe("Patroller Ship Tests are inside this block", () => {
  test("Placement of the Patroller", () => {
    gameboard.placeShip().placePatroller(0, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][0]).toEqual("Patroller");
    expect(gameboard.gameBoardArray[1][0]).toEqual("Patroller");
  });
});
