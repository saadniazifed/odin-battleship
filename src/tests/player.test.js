import { computer, ComputerPlayer, player, Player } from "../playerFactory";

describe("Checking if Player Factory is returning us defined or undefined", () => {
  test("Checking if Player Factory is defined or undefined", () => {
    expect(Player()).toBeDefined();
  });
});

describe("Checking if Player Factory returns a name", () => {
  test("Checking the getName function", () => {
    const playerOne = Player("John");
    expect(playerOne.getName()).toEqual("John");
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    const playerOne = Player("Human", 1);
    expect(playerOne.getPlayerNum()).toEqual(1);
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    const playerOne = Player("Mark", 2);
    expect(playerOne.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if each player object has a gameboard property", () => {
  test("Checking .toHaveProperty of gameboard on player object", () => {
    const playerOne = Player("Human", 1);
    expect(playerOne).toHaveProperty("gameboard");
  });
});

describe("Checking if gameboard are functional for the player object", () => {
  test("gameboard functionality check", () => {
    const playerOne = Player("Human", 1);
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

describe("Checking if Computer Player returns us defined", () => {
  test("Checking for the ComputerPlayer factory function", () => {
    expect(ComputerPlayer()).toBeDefined();
  });
});

describe("Checking if Computer Player has a name ", () => {
  test("Checking for the ComputerPlayer factory function getName property", () => {
    const computer = ComputerPlayer("Computer", 2);
    expect(computer.getName()).toEqual("Computer");
  });
});

describe("Checking if Computer Player has a playerNum ", () => {
  test("Checking for the ComputerPlayer factory function getPlayerNum property", () => {
    const computer = ComputerPlayer("Computer", 2);
    expect(computer.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if Computer Player has a gameboard property ", () => {
  test("Checking for the ComputerPlayer factory gameboard property", () => {
    const computer = ComputerPlayer("Computer", 2);
    expect(computer).toHaveProperty("gameboard");
  });
});

describe.only("Checking the sendAttack method inside the Player factory function", () => {
  test("sendAttack Method", () => {
    computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");
    console.table(computer.gameboard.gameBoardArray);

    //Missing coordinates for the water carrier.
    player.sendAttack([0, 9]);
    player.sendAttack([0, 8]);
    player.sendAttack([0, 7]);
    player.sendAttack([0, 6]);
    //Missing coordinates for the Battleship
    player.sendAttack([1, 9]);
    player.sendAttack([1, 8]);
    player.sendAttack([1, 7]);
    player.sendAttack([1, 6]);
    //Hitting the miss values on row 0.
    expect(computer.gameboard.gameBoardArray[0][9]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][8]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][7]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][6]).toEqual("miss");
  });
});
