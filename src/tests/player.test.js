import { computer, ComputerPlayer, player, Player } from "../playerFactory";
import { Ship } from "../shipFactory";

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

describe("Checking sendAttack function for WaterCarrier", () => {
  test("Check waterCarrier", () => {
    computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    //Missing coordinates for the water carrier.
    player.sendAttack([0, 9]);
    player.sendAttack([0, 8]);
    player.sendAttack([0, 7]);
    player.sendAttack([0, 6]);
    player.sendAttack([0, 5]);
    //Hitting the miss values on row
    expect(computer.gameboard.gameBoardArray[0][9]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][8]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][7]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][6]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[0][5]).toEqual("miss");
    //Actual coordinates for the water carrier ship
    player.sendAttack([0, 4]);
    player.sendAttack([0, 3]);
    player.sendAttack([0, 2]);
    player.sendAttack([0, 1]);
    player.sendAttack([0, 0]);
    expect(computer.gameboard.gameBoardArray[0][0].getShipArray()).toHaveLength(
      0
    );
    expect(computer.gameboard.gameBoardArray[0][0].isSunk()).toEqual(true);
  });
});

describe("Checking sendAttack function for Battleship", () => {
  test("Check Battleship", () => {
    computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    //Missing coordinates for the water carrier.
    player.sendAttack([1, 9]);
    player.sendAttack([1, 8]);
    player.sendAttack([1, 7]);
    player.sendAttack([1, 6]);
    player.sendAttack([1, 5]);
    //Hitting the miss values on row
    expect(computer.gameboard.gameBoardArray[1][9]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[1][8]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[1][7]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[1][6]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[1][5]).toEqual("miss");
    //Actual coordinates for the water carrier ship
    player.sendAttack([1, 3]);
    player.sendAttack([1, 2]);
    player.sendAttack([1, 1]);
    player.sendAttack([1, 0]);
    expect(computer.gameboard.gameBoardArray[1][0].getShipArray()).toHaveLength(
      0
    );
    expect(computer.gameboard.gameBoardArray[1][0].isSunk()).toEqual(true);
  });
});

describe.only("Checking sendAttack function for Destroyer", () => {
  test("Check destroyer", () => {
    computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    //Missing coordinates for the water carrier.
    player.sendAttack([2, 9]);
    player.sendAttack([2, 8]);
    player.sendAttack([2, 7]);
    player.sendAttack([2, 6]);
    player.sendAttack([2, 5]);
    //Hitting the miss values on row
    expect(computer.gameboard.gameBoardArray[2][9]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[2][8]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[2][7]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[2][6]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[2][5]).toEqual("miss");
    //Actual coordinates for the water carrier ship

    player.sendAttack([2, 2]);
    player.sendAttack([2, 1]);
    player.sendAttack([2, 0]);
    expect(computer.gameboard.gameBoardArray[2][0].getShipArray()).toHaveLength(
      0
    );
    expect(computer.gameboard.gameBoardArray[2][0].isSunk()).toEqual(true);
  });
});

describe.only("Checking sendAttack function for Submarine", () => {
  test("Check submarine", () => {
    computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    //Missing coordinates for the water carrier.
    player.sendAttack([3, 9]);
    player.sendAttack([3, 8]);
    player.sendAttack([3, 7]);
    player.sendAttack([3, 6]);
    player.sendAttack([3, 5]);
    //Hitting the miss values on row
    expect(computer.gameboard.gameBoardArray[3][9]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[3][8]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[3][7]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[3][6]).toEqual("miss");
    expect(computer.gameboard.gameBoardArray[3][5]).toEqual("miss");
    //Actual coordinates for the water carrier ship
    player.sendAttack([3, 2]);
    player.sendAttack([3, 1]);
    player.sendAttack([3, 0]);
    expect(computer.gameboard.gameBoardArray[3][0].getShipArray()).toHaveLength(
      0
    );
    expect(computer.gameboard.gameBoardArray[3][0].isSunk()).toEqual(true);
  });
});

// describe("Checking sendAttack function for WaterCarrier", () => {
//   test("Check sendAttack for WaterCarrier ship", () => {
//     computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
//     //Missing coordinates for the water carrier.
//     player.sendAttack([0, 9]);
//     player.sendAttack([0, 8]);
//     player.sendAttack([0, 7]);
//     player.sendAttack([0, 6]);
//     player.sendAttack([0, 5]);
//     //Actual coordinates for the water carrier ship
//     player.sendAttack([0, 4]);
//     player.sendAttack([0, 3]);
//     player.sendAttack([0, 2]);
//     player.sendAttack([0, 1]);
//     player.sendAttack([0, 0]);

//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[0][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][6]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[0][5]).toEqual("miss");
//     //Hitting the actual values on row
//     expect(computer.gameboard.gameBoardArray[0][0].isSunk()).toBe(true);
//   });
// });

// describe("Checking sendAttack function for BattleShip", () => {
//   test("Check sendAttack for Battleship ship", () => {
//     computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
//     //Missing coordinates for the ship
//     player.sendAttack([1, 9]);
//     player.sendAttack([1, 8]);
//     player.sendAttack([1, 7]);
//     player.sendAttack([1, 6]);
//     //Actual coordinates for the ship
//     player.sendAttack([1, 3]);
//     player.sendAttack([1, 2]);
//     player.sendAttack([1, 1]);
//     player.sendAttack([1, 0]);

//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[1][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[1][6]).toEqual("miss");
//     //Hitting the actual values on row
//     expect(computer.gameboard.gameBoardArray[1][0].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[1][1].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[1][2].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[1][3].isSunk()).toBe(true);
//   });
// });

// describe("Checking sendAttack function for Destroyer", () => {
//   test("Check sendAttack for Destroyer ship", () => {
//     computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
//     //Missing coordinates for the ship.
//     player.sendAttack([2, 9]);
//     player.sendAttack([2, 8]);
//     player.sendAttack([2, 7]);
//     player.sendAttack([2, 6]);
//     //Actual coordinates for the ship.
//     player.sendAttack([2, 2]);
//     player.sendAttack([2, 1]);
//     player.sendAttack([2, 0]);

//     //Hitting the miss values on row
//     expect(computer.gameboard.gameBoardArray[2][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[2][6]).toEqual("miss");
//     //Hitting the actual values on row
//     expect(computer.gameboard.gameBoardArray[2][0].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[2][1].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[2][2].isSunk()).toBe(true);
//   });
// });

// describe("Checking sendAttack function for Submarine", () => {
//   test("Check sendAttack for Submarine ship", () => {
//     computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
//     //Missing coordinates for the ship.
//     player.sendAttack([3, 9]);
//     player.sendAttack([3, 8]);
//     player.sendAttack([3, 7]);
//     player.sendAttack([3, 6]);
//     //Actual coordinates for the ship.
//     player.sendAttack([3, 2]);
//     player.sendAttack([3, 1]);
//     player.sendAttack([3, 0]);

//     //Hitting the miss values on row.
//     expect(computer.gameboard.gameBoardArray[3][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[3][6]).toEqual("miss");
//     //Hitting the actual values on row.
//     expect(computer.gameboard.gameBoardArray[3][0].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[3][1].isSunk()).toBe(true);
//     expect(computer.gameboard.gameBoardArray[3][2].isSunk()).toBe(true);
//   });
// });

// describe.only("Checking sendAttack function for Patroller", () => {
//   test("Check sendAttack for Patroller ship", () => {
//     computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");
//     console.table(computer.gameboard.gameBoardArray);
//     //Missing coordinates for the ship.
//     player.sendAttack([4, 9]);
//     player.sendAttack([4, 8]);
//     player.sendAttack([4, 7]);
//     player.sendAttack([4, 6]);
//     //Actual coordinates for the ship.
//     player.sendAttack([4, 1]);
//     player.sendAttack([4, 0]);

//     //Hitting the miss values on row.
//     expect(computer.gameboard.gameBoardArray[4][9]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][8]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][7]).toEqual("miss");
//     expect(computer.gameboard.gameBoardArray[4][6]).toEqual("miss");
//     //Hitting the actual values on row.
//     expect(computer.gameboard.gameBoardArray[4][1]).toHaveLength(0);
//   });
// });

// describe("Checking if computer all ships have been sunk", () => {
//   test("All ships sunk or not for computer", () => {
//     computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
//     computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
//     computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
//     computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
//     computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");

//     //Sinking Patroller
//     player.sendAttack([4, 1]);
//     player.sendAttack([4, 0]);
//     //Sinking submarine.
//     player.sendAttack([3, 2]);
//     player.sendAttack([3, 1]);
//     player.sendAttack([3, 0]);
//     //Sinking destroyer.
//     player.sendAttack([2, 2]);
//     player.sendAttack([2, 1]);
//     player.sendAttack([2, 0]);
//     //Sinking battleship.
//     player.sendAttack([1, 3]);
//     player.sendAttack([1, 2]);
//     player.sendAttack([1, 1]);
//     player.sendAttack([1, 0]);
//     //Sinking water carrier.
//     player.sendAttack([0, 4]);
//     player.sendAttack([0, 3]);
//     player.sendAttack([0, 2]);
//     player.sendAttack([0, 1]);
//     player.sendAttack([0, 0]);

//     expect(computer.gameboard.allSunk()).toBe(true);
//   });
// });
