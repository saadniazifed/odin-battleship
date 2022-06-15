import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";
let gameboard;
let ship;

beforeAll(() => {
  gameboard = Gameboard();
});

test("Checking to see if the Gameboard factory function returns us something", () => {
  expect(Gameboard()).toBeDefined();
});

describe.skip("Water Carrier Ship Tests are inside this block", () => {
  test("Placement of Water Carrier Ship", () => {
    gameboard.placeShip().placeWaterCarrier(1, 4, "horizontal");

    expect(gameboard.gameBoardArray[4][1].shipName).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[4][2].shipName).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[4][3].shipName).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[4][4].shipName).toEqual("Water Carrier");
    expect(gameboard.gameBoardArray[4][5].shipName).toEqual("Water Carrier");
  });
});

describe.skip("Destroyer Ship Tests are inside this block", () => {
  test("Placement of Destroyer Ship", () => {
    gameboard.placeShip().placeDestroyer(1, 3, "horizontal");

    expect(gameboard.gameBoardArray[3][1].shipName).toEqual("Destroyer");
    expect(gameboard.gameBoardArray[3][2].shipName).toEqual("Destroyer");
    expect(gameboard.gameBoardArray[3][3].shipName).toEqual("Destroyer");
  });
});

describe.skip("Battleship Ship Tests are inside this block", () => {
  test("Placement of the Battleship", () => {
    gameboard.placeShip().placeBattleship(1, 2, "horizontal");

    expect(gameboard.gameBoardArray[2][1].shipName).toEqual("Battleship");
    expect(gameboard.gameBoardArray[2][2].shipName).toEqual("Battleship");
    expect(gameboard.gameBoardArray[2][3].shipName).toEqual("Battleship");
    expect(gameboard.gameBoardArray[2][4].shipName).toEqual("Battleship");
  });
});

describe.skip("Submarine Tests are inside this block", () => {
  beforeAll(() => {
    gameboard.placeShip().placeSubmarine(1, 1, "horizontal");
  });
  test("Placement of the submarine", () => {
    // gameboard.placeShip().placeSubmarine(0, 0, "horizontal");
    expect(gameboard.gameBoardArray[1][1].shipName).toEqual("Submarine");
    expect(gameboard.gameBoardArray[1][2].shipName).toEqual("Submarine");
    expect(gameboard.gameBoardArray[1][3].shipName).toEqual("Submarine");
  });
});

describe.skip("Patroller Ship Tests are inside this block", () => {
  test("Placement of the Patroller", () => {
    gameboard.placeShip().placePatroller(2, 0, "horizontal");

    expect(gameboard.gameBoardArray[0][2].shipName).toEqual("Patroller");
    expect(gameboard.gameBoardArray[0][3].shipName).toEqual("Patroller");
  });
});

describe.skip("Checking for the receiveAttack function in this block", () => {
  test("If, the ship isn't there, place a miss string in there ", () => {
    gameboard.placeShip().placePatroller(0, 0, "horizontal");
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 3);
    gameboard.receiveAttack(0, 4);
    gameboard.receiveAttack(0, 5);
    gameboard.receiveAttack(0, 6);

    expect(gameboard.gameBoardArray[0][2]).toBe("miss");
    expect(gameboard.gameBoardArray[0][3]).toBe("miss");
    expect(gameboard.gameBoardArray[0][4]).toBe("miss");
    expect(gameboard.gameBoardArray[0][5]).toBe("miss");
    expect(gameboard.gameBoardArray[0][6]).toBe("miss");
  });
});

describe.only("Checking if receiveAttack invokes ships hit function correctly", () => {
  test("Checking if receiveAttack invokes ships hit function correctly", () => {
    gameboard.placeShip().placeBattleship(0, 0, "horizontal");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.receiveAttack(0, 2);
    gameboard.receiveAttack(0, 3);

    expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
    expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
    expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
    expect(gameboard.gameBoardArray[0][3].getShipArray()[3]).toEqual();
  });
});
