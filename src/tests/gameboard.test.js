import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";
let gameboard;

beforeAll(() => {
  gameboard = Gameboard();
});

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

describe.only("Water Carrier Ship Tests are inside this block", () => {
  test("Placement of Water Carrier Ship", () => {
    gameboard.placeShip().placeWaterCarrier(0, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][0]).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[1][0]).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Water Carrier");
  });
});

describe("Destroyer Ship Tests are inside this block", () => {
  test("Placement of Destroyer Ship", () => {
    gameboard.placeShip().placeDestroyer(0, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][0]).toEqual("Destroyer");
    expect(gameboard.gameBoardArray[1][0]).toEqual("Destroyer");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Destroyer");
    expect(gameboard.gameBoardArray[2][0]).toEqual("Destroyer");
  });
});

describe("Battleship Ship Tests are inside this block", () => {
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
