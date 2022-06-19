import { ComputerPlayer, Player } from "../playerFactory";

let playerOne;
let computerPlayer;

beforeEach(() => {
  playerOne = Player("Human", 1);
  computerPlayer = ComputerPlayer("Computer", 2);
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
    computerPlayer.gameboard.receiveAttack([0, 9]);
    computerPlayer.gameboard.receiveAttack([0, 8]);
    computerPlayer.gameboard.receiveAttack([0, 7]);
    computerPlayer.gameboard.receiveAttack([0, 6]);
    computerPlayer.gameboard.receiveAttack([0, 5]);
    //Attack Coordinates
    computerPlayer.gameboard.receiveAttack([0, 0]);
    computerPlayer.gameboard.receiveAttack([0, 1]);
    computerPlayer.gameboard.receiveAttack([0, 2]);
    computerPlayer.gameboard.receiveAttack([0, 3]);
    computerPlayer.gameboard.receiveAttack([0, 4]);

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
    computerPlayer.gameboard.receiveAttack([1, 9]);
    computerPlayer.gameboard.receiveAttack([1, 8]);
    computerPlayer.gameboard.receiveAttack([1, 7]);
    computerPlayer.gameboard.receiveAttack([1, 6]);
    computerPlayer.gameboard.receiveAttack([1, 5]);
    //Attack Coordinates
    computerPlayer.gameboard.receiveAttack([1, 0]);
    computerPlayer.gameboard.receiveAttack([1, 1]);
    computerPlayer.gameboard.receiveAttack([1, 2]);
    computerPlayer.gameboard.receiveAttack([1, 3]);

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
    computerPlayer.gameboard.receiveAttack([2, 9]);
    computerPlayer.gameboard.receiveAttack([2, 8]);
    computerPlayer.gameboard.receiveAttack([2, 7]);
    computerPlayer.gameboard.receiveAttack([2, 6]);
    computerPlayer.gameboard.receiveAttack([2, 5]);
    //Attack Coordinates
    computerPlayer.gameboard.receiveAttack([2, 0]);
    computerPlayer.gameboard.receiveAttack([2, 1]);
    computerPlayer.gameboard.receiveAttack([2, 2]);

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
    computerPlayer.gameboard.receiveAttack([3, 9]);
    computerPlayer.gameboard.receiveAttack([3, 8]);
    computerPlayer.gameboard.receiveAttack([3, 7]);
    computerPlayer.gameboard.receiveAttack([3, 6]);
    computerPlayer.gameboard.receiveAttack([3, 5]);
    //Attack Coordinates
    computerPlayer.gameboard.receiveAttack([3, 0]);
    computerPlayer.gameboard.receiveAttack([3, 1]);
    computerPlayer.gameboard.receiveAttack([3, 2]);

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
    computerPlayer.gameboard.receiveAttack([4, 9]);
    computerPlayer.gameboard.receiveAttack([4, 8]);
    computerPlayer.gameboard.receiveAttack([4, 7]);
    computerPlayer.gameboard.receiveAttack([4, 6]);
    computerPlayer.gameboard.receiveAttack([4, 5]);
    //Attack Coordinates
    computerPlayer.gameboard.receiveAttack([4, 0]);
    computerPlayer.gameboard.receiveAttack([4, 1]);

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

describe("Checking allSunk function with sendAttack", () => {
  //   console.table(newCPU.gameboard.gameBoardArray);
  test("Checking allSunk function", () => {
    computerPlayer.gameboard
      .placeShip()
      .placeWaterCarrier([5, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeBattleship([6, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeDestroyer([7, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeSubmarine([8, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placePatroller([9, 0], "horizontal");

    //Attack Coordinates.
    computerPlayer.gameboard.receiveAttack([5, 0]);
    computerPlayer.gameboard.receiveAttack([5, 1]);
    computerPlayer.gameboard.receiveAttack([5, 2]);
    computerPlayer.gameboard.receiveAttack([5, 3]);
    computerPlayer.gameboard.receiveAttack([5, 4]);
    computerPlayer.gameboard.receiveAttack([6, 0]);
    computerPlayer.gameboard.receiveAttack([6, 1]);
    computerPlayer.gameboard.receiveAttack([6, 2]);
    computerPlayer.gameboard.receiveAttack([6, 3]);
    computerPlayer.gameboard.receiveAttack([7, 0]);
    computerPlayer.gameboard.receiveAttack([7, 1]);
    computerPlayer.gameboard.receiveAttack([7, 2]);
    computerPlayer.gameboard.receiveAttack([8, 0]);
    computerPlayer.gameboard.receiveAttack([8, 1]);
    computerPlayer.gameboard.receiveAttack([8, 2]);
    computerPlayer.gameboard.receiveAttack([8, 3]);
    computerPlayer.gameboard.receiveAttack([9, 0]);
    computerPlayer.gameboard.receiveAttack([9, 1]);
    expect(computerPlayer.gameboard.allSunk()).toBe(true);
  });
});

describe("Checking allSunk function on computer gameboard", () => {
  test("Checking allSunk function", () => {
    computerPlayer.gameboard
      .placeShip()
      .placeWaterCarrier([5, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeBattleship([6, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeDestroyer([7, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeSubmarine([8, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placePatroller([9, 0], "horizontal");

    //Attack Coordinates.
    computerPlayer.gameboard.receiveAttack([5, 0]);
    computerPlayer.gameboard.receiveAttack([5, 1]);
    computerPlayer.gameboard.receiveAttack([5, 2]);
    computerPlayer.gameboard.receiveAttack([5, 3]);
    computerPlayer.gameboard.receiveAttack([5, 4]);
    computerPlayer.gameboard.receiveAttack([6, 0]);
    computerPlayer.gameboard.receiveAttack([6, 1]);
    computerPlayer.gameboard.receiveAttack([6, 2]);
    computerPlayer.gameboard.receiveAttack([6, 3]);
    computerPlayer.gameboard.receiveAttack([7, 0]);
    computerPlayer.gameboard.receiveAttack([7, 1]);
    computerPlayer.gameboard.receiveAttack([7, 2]);
    computerPlayer.gameboard.receiveAttack([8, 0]);
    computerPlayer.gameboard.receiveAttack([8, 1]);
    computerPlayer.gameboard.receiveAttack([8, 2]);
    computerPlayer.gameboard.receiveAttack([8, 3]);
    computerPlayer.gameboard.receiveAttack([9, 0]);
    // computerPlayer.gameboard.receiveAttack([9, 1]);
    expect(computerPlayer.gameboard.allSunk()).toBe(false);
  });
});

describe("Checking allSunk function on player gameboard", () => {
  test("Checking allSunk function", () => {
    playerOne.gameboard.placeShip().placeWaterCarrier([5, 0], "horizontal");
    playerOne.gameboard.placeShip().placeBattleship([6, 0], "horizontal");
    playerOne.gameboard.placeShip().placeDestroyer([7, 0], "horizontal");
    playerOne.gameboard.placeShip().placeSubmarine([8, 0], "horizontal");
    playerOne.gameboard.placeShip().placePatroller([9, 0], "horizontal");

    //Attack Coordinates.
    playerOne.gameboard.receiveAttack([5, 0]);
    playerOne.gameboard.receiveAttack([5, 1]);
    playerOne.gameboard.receiveAttack([5, 2]);
    playerOne.gameboard.receiveAttack([5, 3]);
    playerOne.gameboard.receiveAttack([5, 4]);
    playerOne.gameboard.receiveAttack([6, 0]);
    playerOne.gameboard.receiveAttack([6, 1]);
    playerOne.gameboard.receiveAttack([6, 2]);
    playerOne.gameboard.receiveAttack([6, 3]);
    playerOne.gameboard.receiveAttack([7, 0]);
    playerOne.gameboard.receiveAttack([7, 1]);
    playerOne.gameboard.receiveAttack([7, 2]);
    playerOne.gameboard.receiveAttack([8, 0]);
    playerOne.gameboard.receiveAttack([8, 1]);
    playerOne.gameboard.receiveAttack([8, 2]);
    playerOne.gameboard.receiveAttack([8, 3]);
    playerOne.gameboard.receiveAttack([9, 0]);
    playerOne.gameboard.receiveAttack([9, 1]);
    expect(playerOne.gameboard.allSunk()).toBe(true);
  });
});

describe.only("Checking something", () => {
  test("Check something", () => {
    playerOne.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    playerOne.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    playerOne.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    playerOne.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    playerOne.gameboard.placeShip().placeDestroyer([4, 0], "horizontal");

    computerPlayer.gameboard
      .placeShip()
      .placeWaterCarrier([0, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    computerPlayer.gameboard.placeShip().placePatroller([4, 0], "horizontal");

    // expect(computerPlayer.sendAttack([0, 0])).toEqual();
    // expect(playerOne.sendAttack([0, 9])).toEqual();
  });
});
