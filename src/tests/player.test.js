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
    expect(player.getName()).toEqual("John");
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    expect(player.getPlayerNum()).toEqual(1);
  });
});

describe("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 2", () => {
    expect(computer.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if each player object has a gameboard property", () => {
  test("Checking .toHaveProperty of gameboard on player object", () => {
    expect(player).toHaveProperty("gameboard");
  });
});

describe("Checking if gameboard are functional for the player object", () => {
  test("gameboard functionality check", () => {
    expect(
      player.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal")
    ).toEqual(true);
    expect(
      player.gameboard.placeShip().placeBattleship([1, 0], "horizontal")
    ).toEqual(true);
    expect(
      player.gameboard.placeShip().placeDestroyer([2, 0], "horizontal")
    ).toEqual(true);
    expect(
      player.gameboard.placeShip().placeSubmarine([3, 0], "horizontal")
    ).toEqual(true);
    expect(
      player.gameboard.placeShip().placePatroller([4, 0], "horizontal")
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
    expect(computer.getName()).toEqual("Computer");
  });
});

describe("Checking if Computer Player has a playerNum ", () => {
  test("Checking for the ComputerPlayer factory function getPlayerNum property", () => {
    expect(computer.getPlayerNum()).toEqual(2);
  });
});

describe("Checking if Computer Player has a gameboard property ", () => {
  test("Checking for the ComputerPlayer factory gameboard property", () => {
    expect(computer).toHaveProperty("gameboard");
  });
});

describe.only("Checking sendAttack method functionality", () => {
  test("sendAttack in player factory function", () => {
    computerPlayer.gameboard
      .placeShip()
      .placeWaterCarrier([0, 0], "horizontal");
    playerOne.sendAttack([0, 9]);
    console.table(computerPlayer.gameboard.gameBoardArray);

    expect(computerPlayer.gameboard.gameBoardArray[0][9]).toEqual("miss");
  });
});

// describe("Checking sendAttack function for WaterCarrier", () => {
//   test("Check waterCarrier", () => {
//     computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
//     //Missing coordinates for the water carrier.
//     player.sendAttack([0, 9]);
//     player.sendAttack([0, 8]);
//     player.sendAttack([0, 7]);
//     player.sendAttack([0, 6]);
//     player.sendAttack([0, 5]);
//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[0][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][5]).toEqual("miss");
//     //Actual coordinates for the water carrier ship
//     player.sendAttack([0, 4]);
//     player.sendAttack([0, 3]);
//     player.sendAttack([0, 2]);
//     player.sendAttack([0, 1]);
//     player.sendAttack([0, 0]);

//     expect(computer.gameboard.gameBoardArray[0][0].getShipArray()).toHaveLength(
//       0
//     );
//     expect(computer.gameboard.gameBoardArray[0][0].isSunk()).toEqual(true);
//   });
// });

// describe.only("Checking sendAttack function for Battleship", () => {
//   test("Check Battleship", () => {
//     computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");

//     player.sendAttack([1, 9]);
//     player.sendAttack([1, 8]);
//     player.sendAttack([1, 7]);
//     player.sendAttack([1, 6]);
//     player.sendAttack([1, 5]);
//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[1][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][5]).toEqual("miss");

//     player.sendAttack([1, 3]);
//     player.sendAttack([1, 2]);
//     player.sendAttack([1, 1]);
//     player.sendAttack([1, 0]);
//     expect(computer.gameboard.gameBoardArray[1][0].getShipArray()).toHaveLength(
//       0
//     );
//     expect(computer.gameboard.gameBoardArray[1][0].isSunk()).toEqual(true);
//   });
// });

// describe("Checking sendAttack function for Destroyer", () => {
//   test("Check destroyer", () => {
//     computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");

//     player.sendAttack([2, 9]);
//     player.sendAttack([2, 8]);
//     player.sendAttack([2, 7]);
//     player.sendAttack([2, 6]);
//     player.sendAttack([2, 5]);
//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[2][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][5]).toEqual("miss");

//     player.sendAttack([2, 2]);
//     player.sendAttack([2, 1]);
//     player.sendAttack([2, 0]);

//     expect(computer.gameboard.gameBoardArray[2][0].getShipArray()).toHaveLength(
//       0
//     );
//     expect(computer.gameboard.gameBoardArray[2][0].isSunk()).toEqual(true);
//   });
// });

// describe("Checking sendAttack function for Submarine", () => {
//   test("Check submarine", () => {
//     computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");

//     player.sendAttack([3, 9]);
//     player.sendAttack([3, 8]);
//     player.sendAttack([3, 7]);
//     player.sendAttack([3, 6]);
//     player.sendAttack([3, 5]);
//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[3][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][5]).toEqual("miss");

//     player.sendAttack([3, 2]);
//     player.sendAttack([3, 1]);
//     player.sendAttack([3, 0]);
//     expect(computer.gameboard.gameBoardArray[3][0].getShipArray()).toHaveLength(
//       0
//     );
//     expect(computer.gameboard.gameBoardArray[3][0].isSunk()).toEqual(true);
//   });
// });

// describe("Checking sendAttack function for WaterCarrier", () => {
//   test("Check waterCarrier", () => {
//     computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");

//     player.sendAttack([4, 9]);
//     player.sendAttack([4, 8]);
//     player.sendAttack([4, 7]);
//     player.sendAttack([4, 6]);
//     player.sendAttack([4, 5]);
//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[4][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][5]).toEqual("miss");

//     player.sendAttack([4, 1]);
//     player.sendAttack([4, 0]);
//     expect(computer.gameboard.gameBoardArray[4][0].getShipArray()).toHaveLength(
//       0
//     );
//     expect(computer.gameboard.gameBoardArray[4][0].isSunk()).toEqual(true);
//   });
// });

// describe("Checking to see if all the Ships have sunk", () => {
//   test("Computer ship all sunk or not", () => {
//     computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
//     computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
//     computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
//     computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
//     computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");

//     //Sending correct coordinates.

//     //Attacking the Patroller
//     player.sendAttack([4, 1]);
//     player.sendAttack([4, 0]);
//     //Attacking the Submarine
//     player.sendAttack([3, 2]);
//     player.sendAttack([3, 1]);
//     player.sendAttack([3, 0]);
//     //Attacking the Destroyer
//     player.sendAttack([2, 2]);
//     player.sendAttack([2, 1]);
//     player.sendAttack([2, 0]);
//     //Attacking the Battleship
//     // player.sendAttack([1, 3]);
//     player.sendAttack([1, 2]);
//     player.sendAttack([1, 1]);
//     player.sendAttack([1, 0]);
//     //Attacking the Water carrier.
//     player.sendAttack([0, 4]);
//     player.sendAttack([0, 3]);
//     player.sendAttack([0, 2]);
//     player.sendAttack([0, 1]);
//     // player.sendAttack([0, 0]);
//     expect(computer.gameboard.allSunk()).toEqual(true);
//   });
// });
