import { computer, ComputerPlayer, player, Player } from "../playerFactory";

let playerOne;
let computerPlayer;

beforeEach(() => {
  playerOne = player;
  computerPlayer = computer;
});

describe("Checking if Player Factory is returning us defined or undefined", () => {
  test("Checking if Player Factory is defined or undefined", () => {
    expect(Player()).toBeDefined();
  });
});

describe("Checking if Player Factory returns a name", () => {
  test("Checking the getName function", () => {
    expect(playerOne.getName()).toEqual("Human");
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    expect(playerOne.getPlayerNum()).toEqual(1);
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 2", () => {
    expect(computerPlayer.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if each player object has a gameboard property", () => {
  test("Checking .toHaveProperty of gameboard on player object", () => {
    expect(playerOne).toHaveProperty("gameboard");
  });
});

describe("Checking if gameboard are functional for the player object", () => {
  test("gameboard functionality check", () => {
    expect(
      playerOne.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal")
    ).toEqual(true);
    expect(
      playerOne.gameboard.placeShip().placeBattleship([1, 0], "horizontal")
    ).toEqual(true);
    expect(
      playerOne.gameboard.placeShip().placeDestroyer([2, 0], "horizontal")
    ).toEqual(true);
    expect(
      playerOne.gameboard.placeShip().placeSubmarine([3, 0], "horizontal")
    ).toEqual(true);
    expect(
      playerOne.gameboard.placeShip().placePatroller([4, 0], "horizontal")
    ).toEqual(true);
  });
});

//Checking for the Computer now.
describe("Checking if Computer Player returns us defined", () => {
  test("Checking for the ComputerPlayer factory function", () => {
    expect(ComputerPlayer()).toBeDefined();
  });
});

describe("Checking if Computer Player has a name ", () => {
  test("Checking for the ComputerPlayer factory function getName property", () => {
    expect(computerPlayer.getName()).toEqual("Computer");
  });
});

describe("Checking if Computer Player has a playerNum ", () => {
  test("Checking for the ComputerPlayer factory function getPlayerNum property", () => {
    expect(computerPlayer.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if Computer Player has a gameboard property ", () => {
  test("Checking for the ComputerPlayer factory gameboard property", () => {
    expect(computerPlayer).toHaveProperty("gameboard");
  });
});

describe("Checking sendAttack method functionality for Water Carrier", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard
      .placeShip()
      .placeWaterCarrier([0, 0], "horizontal");

    //Miss Coordinates
    playerOne.sendAttack([0, 9]);
    playerOne.sendAttack([0, 8]);
    playerOne.sendAttack([0, 7]);
    playerOne.sendAttack([0, 6]);
    playerOne.sendAttack([0, 5]);
    //Attack Coordinates
    playerOne.sendAttack([0, 0]);
    playerOne.sendAttack([0, 1]);
    playerOne.sendAttack([0, 2]);
    playerOne.sendAttack([0, 3]);
    playerOne.sendAttack([0, 4]);

    console.table(computer.gameboard.gameBoardArray);
    expect(computerPlayer.gameboard.gameBoardArray[0][9]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[0][8]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[0][7]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[0][6]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[0][5]).toEqual("miss");
    expect(
      computerPlayer.gameboard.gameBoardArray[0][0].getShipArray()
    ).toHaveLength(0);
    expect(computerPlayer.gameboard.gameBoardArray[0][0].isSunk()).toBe(true);
  });
});

describe("Checking sendAttack method functionality for Battleship", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");

    //Miss Coordinates
    playerOne.sendAttack([1, 9]);
    playerOne.sendAttack([1, 8]);
    playerOne.sendAttack([1, 7]);
    playerOne.sendAttack([1, 6]);
    playerOne.sendAttack([1, 5]);
    //Attack Coordinates
    playerOne.sendAttack([1, 0]);
    playerOne.sendAttack([1, 1]);
    playerOne.sendAttack([1, 2]);
    playerOne.sendAttack([1, 3]);

    console.table(computer.gameboard.gameBoardArray);
    expect(computerPlayer.gameboard.gameBoardArray[1][9]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[1][8]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[1][7]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[1][6]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[1][5]).toEqual("miss");
    expect(
      computerPlayer.gameboard.gameBoardArray[1][0].getShipArray()
    ).toHaveLength(0);
    expect(computerPlayer.gameboard.gameBoardArray[1][0].isSunk()).toBe(true);
  });
});

describe("Checking sendAttack method functionality for Destroyer", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");

    //Miss Coordinates
    playerOne.sendAttack([2, 9]);
    playerOne.sendAttack([2, 8]);
    playerOne.sendAttack([2, 7]);
    playerOne.sendAttack([2, 6]);
    playerOne.sendAttack([2, 5]);
    //Attack Coordinates
    playerOne.sendAttack([2, 0]);
    playerOne.sendAttack([2, 1]);
    playerOne.sendAttack([2, 2]);

    console.table(computer.gameboard.gameBoardArray);
    expect(computerPlayer.gameboard.gameBoardArray[2][9]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[2][8]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[2][7]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[2][6]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[2][5]).toEqual("miss");
    expect(
      computerPlayer.gameboard.gameBoardArray[2][0].getShipArray()
    ).toHaveLength(0);
    expect(computerPlayer.gameboard.gameBoardArray[2][0].isSunk()).toBe(true);
  });
});

describe("Checking sendAttack method functionality for Submarine", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");

    //Miss Coordinates
    playerOne.sendAttack([3, 9]);
    playerOne.sendAttack([3, 8]);
    playerOne.sendAttack([3, 7]);
    playerOne.sendAttack([3, 6]);
    playerOne.sendAttack([3, 5]);
    //Attack Coordinates
    playerOne.sendAttack([3, 0]);
    playerOne.sendAttack([3, 1]);
    playerOne.sendAttack([3, 2]);
    playerOne.sendAttack([3, 3]);
    playerOne.sendAttack([3, 4]);

    console.table(computer.gameboard.gameBoardArray);
    expect(computerPlayer.gameboard.gameBoardArray[3][9]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[3][8]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[3][7]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[3][6]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[3][5]).toEqual("miss");
    expect(
      computerPlayer.gameboard.gameBoardArray[3][0].getShipArray()
    ).toHaveLength(0);
    expect(computerPlayer.gameboard.gameBoardArray[3][0].isSunk()).toBe(true);
  });
});

describe("Checking sendAttack method functionality for Patroller", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard.placeShip().placePatroller([4, 0], "horizontal");

    //Miss Coordinates
    playerOne.sendAttack([4, 9]);
    playerOne.sendAttack([4, 8]);
    playerOne.sendAttack([4, 7]);
    playerOne.sendAttack([4, 6]);
    playerOne.sendAttack([4, 5]);
    //Attack Coordinates
    playerOne.sendAttack([4, 0]);
    playerOne.sendAttack([4, 1]);

    console.table(computer.gameboard.gameBoardArray);
    expect(computerPlayer.gameboard.gameBoardArray[4][9]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[4][8]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[4][7]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[4][6]).toEqual("miss");
    expect(computerPlayer.gameboard.gameBoardArray[4][5]).toEqual("miss");
    expect(
      computerPlayer.gameboard.gameBoardArray[4][0].getShipArray()
    ).toHaveLength(0);
    expect(computerPlayer.gameboard.gameBoardArray[4][0].isSunk()).toBe(true);
  });
});
