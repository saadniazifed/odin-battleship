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

describe("Checking shipFit function working correctly", () => {
  test("Checking shipFit Example 1 (Horizontal)", () => {
    expect(gameboard.shipFit([0, 8], "horizontal", 1)).toEqual(true);
    expect(gameboard.shipFit([0, 8], "horizontal", 2)).toEqual(true);
    expect(gameboard.shipFit([0, 8], "horizontal", 4)).toEqual(false);
    expect(gameboard.shipFit([0, 8], "horizontal", 3)).toEqual(false);
  });
});

describe("Checking shipFit function working correctly", () => {
  test("Checking shipFit Example 1 (Vertical)", () => {
    expect(gameboard.shipFit([8, 0], "vertical", 1)).toEqual(true);
    expect(gameboard.shipFit([8, 0], "vertical", 2)).toEqual(true);
    expect(gameboard.shipFit([8, 0], "vertical", 3)).toEqual(false);
  });
});

describe("Checking shipFit function working correctly", () => {
  test("Checking shipFit Example 3 (Negative Values)", () => {
    expect(gameboard.shipFit([-8, 0], "vertical", 1)).toEqual(false);
    expect(gameboard.shipFit([-8, 0], "horizontal", 2)).toEqual(false);
    expect(gameboard.shipFit([0, -4], "vertical", 1)).toEqual(false);
    expect(gameboard.shipFit([0, -4], "horizontal", 2)).toEqual(false);
  });
});

describe("Checking positionEmpty function for Ship Length 1", () => {
  test("Checking positionEmpty function, Example 1 (Horizontal)", () => {
    const myFirstShip = Ship(1);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    console.table(gameboard.gameBoardArray);
    expect(gameboard.positionEmpty([0, 0], "horizontal", 1)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 1)).toEqual(true);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 1)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 1", () => {
  test("Checking positionEmpty function, Example 1 (Vertical)", () => {
    const myFirstShip = Ship(1);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    console.table(gameboard.gameBoardArray);
    expect(gameboard.positionEmpty([0, 0], "vertical", 1)).toEqual(false);
    expect(gameboard.positionEmpty([1, 0], "vertical", 1)).toEqual(true);
    expect(gameboard.positionEmpty([2, 0], "vertical", 1)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 2", () => {
  test("Checking positionEmpty function, Example 2 (Horizontal)", () => {
    const myFirstShip = Ship(2);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "horizontal", 2)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 2)).toEqual(false);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 2)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 2", () => {
  test("Checking positionEmpty function, Example 2 (Vertical)", () => {
    const myFirstShip = Ship(2);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[1][0] = myFirstShip;

    console.table(gameboard.gameBoardArray);
    expect(gameboard.positionEmpty([0, 0], "vertical", 2)).toEqual(false);
    expect(gameboard.positionEmpty([1, 0], "vertical", 2)).toEqual(false);
    expect(gameboard.positionEmpty([1, 2], "vertical", 2)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 3", () => {
  test("Checking positionEmpty function, Example 3 (Horizontal)", () => {
    const myFirstShip = Ship(3);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "horizontal", 3)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 3)).toEqual(false);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 3)).toEqual(false);
    expect(gameboard.positionEmpty([0, 3], "horizontal", 3)).toEqual(true);
    //Checking for empty space around the ship
    expect(gameboard.positionEmpty([0, 4], "horizontal", 3)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 3", () => {
  test("Checking positionEmpty function, Example 3 (Vertical)", () => {
    const myFirstShip = Ship(3);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[1][0] = myFirstShip;
    gameboard.gameBoardArray[2][0] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "vertical", 3)).toEqual(false);
    expect(gameboard.positionEmpty([1, 0], "vertical", 3)).toEqual(false);
    expect(gameboard.positionEmpty([2, 0], "vertical", 3)).toEqual(false);
    expect(gameboard.positionEmpty([3, 0], "vertical", 3)).toEqual(true);
    // Checking for empty space around the ship
    expect(gameboard.positionEmpty([4, 0], "vertical", 3)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 4", () => {
  test("Checking positionEmpty function, Example 4 (Horizontal)", () => {
    const myFirstShip = Ship(4);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;
    gameboard.gameBoardArray[0][3] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "horizontal", 4)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 4)).toEqual(false);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 4)).toEqual(false);
    expect(gameboard.positionEmpty([0, 3], "horizontal", 4)).toEqual(false);
    //Checking for an empty space around the ship
    expect(gameboard.positionEmpty([0, 4], "horizontal", 4)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 4", () => {
  test("Checking positionEmpty function, Example 4 (Vertical)", () => {
    const myFirstShip = Ship(4);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[1][0] = myFirstShip;
    gameboard.gameBoardArray[2][0] = myFirstShip;
    gameboard.gameBoardArray[3][0] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "vertical", 4)).toEqual(false);
    expect(gameboard.positionEmpty([1, 0], "vertical", 4)).toEqual(false);
    expect(gameboard.positionEmpty([2, 0], "vertical", 4)).toEqual(false);
    expect(gameboard.positionEmpty([3, 0], "vertical", 4)).toEqual(false);
    //Checking for an empty space around the ship
    expect(gameboard.positionEmpty([4, 0], "vertical", 4)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 5", () => {
  test("Checking positionEmpty function, Example 5 (Horizontal)", () => {
    const myFirstShip = Ship(5);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;
    gameboard.gameBoardArray[0][3] = myFirstShip;
    gameboard.gameBoardArray[0][4] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "horizontal", 5)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 5)).toEqual(false);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 5)).toEqual(false);
    expect(gameboard.positionEmpty([0, 3], "horizontal", 5)).toEqual(false);
    expect(gameboard.positionEmpty([0, 4], "horizontal", 5)).toEqual(false);
    //Checking for an empty space around the ship
    expect(gameboard.positionEmpty([0, 5], "horizontal", 5)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 5", () => {
  test("Checking positionEmpty function, Example 5 (Horizontal)", () => {
    const myFirstShip = Ship(5);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[1][0] = myFirstShip;
    gameboard.gameBoardArray[2][0] = myFirstShip;
    gameboard.gameBoardArray[3][0] = myFirstShip;
    gameboard.gameBoardArray[4][0] = myFirstShip;

    expect(gameboard.positionEmpty([0, 0], "vertical", 5)).toEqual(false);
    expect(gameboard.positionEmpty([1, 0], "vertical", 5)).toEqual(false);
    expect(gameboard.positionEmpty([2, 0], "vertical", 5)).toEqual(false);
    expect(gameboard.positionEmpty([3, 0], "vertical", 5)).toEqual(false);
    expect(gameboard.positionEmpty([4, 0], "vertical", 5)).toEqual(false);
    //Checking for an empty space around the ship
    expect(gameboard.positionEmpty([0, 5], "vertical", 5)).toEqual(true);
  });
});

describe("Checking placeHorizontalShip function for Ship length 2", () => {
  test("placeHorizontalShip function for Ship length 2", () => {
    const myFirstShip = Ship(2);

    expect(
      gameboard.placeHorizontalShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(true);
    //Checking to see if the ship can be placed in another coordinate. It can't because the length is 2 and i am trying to get the 3rd index filled.
    expect(
      gameboard.placeHorizontalShips([0, 7], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking placeVerticalShip function for Ship length 2", () => {
  test("placeHorizontalShip function for Ship length 2", () => {
    const myFirstShip = Ship(2);

    expect(
      gameboard.placeVerticalShips([1, 1], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([2, 1], myFirstShip, "vertical")
    ).toEqual(true);
    //Checking to see if the ship can be placed in another coordinate. It can't because the length is 2 and i am trying to get the 3rd index filled.
    expect(
      gameboard.placeVerticalShips([2, 3], myFirstShip, "vertical")
    ).toEqual(false);
  });
});

// describe("Checking placeVerticalShips function for Ship Length 2", () => {
//   test("placeVerticalShips function for Ship Length 2", () => {
//     const myFirstShip = Ship(2, "Patroller");
//     expect(
//       gameboard.placeVerticalShips([0, 0], myFirstShip, "vertical")
//     ).toEqual(true);
//     expect(
//       gameboard.placeVerticalShips([1, 0], myFirstShip, "vertical")
//     ).toEqual(true);

//     //Checking to see if the vertical ship is placed there or not.
//     expect(
//       gameboard.placeVerticalShips([2, 2], myFirstShip, "vertical")
//     ).toEqual(false);
//   });
// });

// describe.only("Water Carrier Ship Tests are inside this block", () => {
//   test("Placement of Water Carrier Ship", () => {
//     gameboard.placeShip().placeWaterCarrier(1, 4, "horizontal");

//     expect(gameboard.gameBoardArray[4][1].shipName).toEqual("Water Carrier");
//     expect(gameboard.gameBoardArray[4][2].shipName).toEqual("Water Carrier");
//     expect(gameboard.gameBoardArray[4][3].shipName).toEqual("Water Carrier");
//     expect(gameboard.gameBoardArray[4][4].shipName).toEqual("Water Carrier");
//     expect(gameboard.gameBoardArray[4][5].shipName).toEqual("Water Carrier");
//   });
// });

// describe.only("Destroyer Ship Tests are inside this block", () => {
//   test("Placement of Destroyer Ship", () => {
//     gameboard.placeShip().placeDestroyer(1, 3, "horizontal");

//     expect(gameboard.gameBoardArray[3][1].shipName).toEqual("Destroyer");
//     expect(gameboard.gameBoardArray[3][2].shipName).toEqual("Destroyer");
//     expect(gameboard.gameBoardArray[3][3].shipName).toEqual("Destroyer");
//   });
// });

// describe.only("Battleship Ship Tests are inside this block", () => {
//   test("Placement of the Battleship", () => {
//     gameboard.placeShip().placeBattleship(1, 2, "horizontal");

//     expect(gameboard.gameBoardArray[2][1].shipName).toEqual("Battleship");
//     expect(gameboard.gameBoardArray[2][2].shipName).toEqual("Battleship");
//     expect(gameboard.gameBoardArray[2][3].shipName).toEqual("Battleship");
//     expect(gameboard.gameBoardArray[2][4].shipName).toEqual("Battleship");
//   });
// });

// describe.only("Submarine Tests are inside this block", () => {
//   beforeAll(() => {
//     gameboard.placeShip().placeSubmarine(1, 1, "horizontal");
//   });
//   test("Placement of the submarine", () => {
//     // gameboard.placeShip().placeSubmarine(0, 0, "horizontal");
//     expect(gameboard.gameBoardArray[1][1].shipName).toEqual("Submarine");
//     expect(gameboard.gameBoardArray[1][2].shipName).toEqual("Submarine");
//     expect(gameboard.gameBoardArray[1][3].shipName).toEqual("Submarine");
//   });
// });

// describe.only("Patroller Ship Tests are inside this block", () => {
//   test("Placement of the Patroller", () => {
//     gameboard.placeShip().placePatroller(2, 0, "horizontal");

//     expect(gameboard.gameBoardArray[0][2].shipName).toEqual("Patroller");
//     expect(gameboard.gameBoardArray[0][3].shipName).toEqual("Patroller");
//   });
// });

// describe.only("Checking for the receiveAttack function in this block", () => {
//   test("If, the ship isn't there, place a miss string in there ", () => {
//     gameboard.placeShip().placePatroller(0, 0, "horizontal");
//     gameboard.receiveAttack(6, 0);
//     gameboard.receiveAttack(6, 1);
//     gameboard.receiveAttack(6, 2);
//     gameboard.receiveAttack(6, 3);
//     gameboard.receiveAttack(6, 4);

//     expect(gameboard.gameBoardArray[6][0]).toBe("miss");
//     expect(gameboard.gameBoardArray[6][1]).toBe("miss");
//     expect(gameboard.gameBoardArray[6][2]).toBe("miss");
//     expect(gameboard.gameBoardArray[6][3]).toBe("miss");
//     expect(gameboard.gameBoardArray[6][4]).toBe("miss");
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placeBattleship(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);
//     gameboard.receiveAttack(0, 3);

//     expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//     expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
//     expect(gameboard.gameBoardArray[0][3].getShipArray()[3]).toEqual();
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placeBattleship(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);
//     gameboard.receiveAttack(0, 3);

//     expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//     expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
//     expect(gameboard.gameBoardArray[0][3].getShipArray()[3]).toEqual();
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly #2", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placeWaterCarrier(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);
//     gameboard.receiveAttack(0, 3);

//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//     expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
//     expect(gameboard.gameBoardArray[0][3].getShipArray()[3]).toEqual();
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly #3", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placeDestroyer(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);

//     expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//     expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly #4", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placeSubmarine(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);

//     expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//     expect(gameboard.gameBoardArray[0][2].getShipArray()[2]).toEqual();
//   });
// });

// describe.only("Checking if receiveAttack invokes ships hit function correctly #5", () => {
//   test("Checking if receiveAttack invokes ships hit function correctly", () => {
//     gameboard.placeShip().placePatroller(0, 0, "horizontal");
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);

//     expect(gameboard.gameBoardArray[0][0].getShipArray()[0]).toEqual();
//     expect(gameboard.gameBoardArray[0][1].getShipArray()[1]).toEqual();
//   });
// });

// describe.only("Checking if all the ships have been sunk or not", () => {
//   test("Check board if the ships have sunk or not", () => {
//     gameboard.placeShip().placeWaterCarrier(0, 0, "horizontal");
//     gameboard.placeShip().placeBattleship(0, 1, "horizontal");
//     gameboard.placeShip().placeDestroyer(0, 2, "horizontal");
//     gameboard.placeShip().placeSubmarine(0, 3, "horizontal");
//     gameboard.placeShip().placePatroller(0, 4, "horizontal");

//     //For the Water Carrier
//     gameboard.receiveAttack(0, 0);
//     gameboard.receiveAttack(0, 1);
//     gameboard.receiveAttack(0, 2);
//     gameboard.receiveAttack(0, 3);
//     gameboard.receiveAttack(0, 4);
//     //For the Battleship
//     gameboard.receiveAttack(1, 0);
//     gameboard.receiveAttack(1, 1);
//     gameboard.receiveAttack(1, 2);
//     gameboard.receiveAttack(1, 3);
//     //For the Destroyer
//     gameboard.receiveAttack(2, 0);
//     gameboard.receiveAttack(2, 1);
//     gameboard.receiveAttack(2, 2);
//     //For the Submarine
//     gameboard.receiveAttack(3, 0);
//     gameboard.receiveAttack(3, 1);
//     gameboard.receiveAttack(3, 2);
//     //For the Patroller
//     gameboard.receiveAttack(4, 0);
//     gameboard.receiveAttack(4, 1);

//     //For the Water Carrier
//     expect(gameboard.gameBoardArray[0][0].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[0][1].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[0][2].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[0][3].isSunk()).toBe(true);
//     //For the BattleShip
//     expect(gameboard.gameBoardArray[1][0].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[1][1].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[1][2].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[1][3].isSunk()).toBe(true);
//     //For the Destroyer
//     expect(gameboard.gameBoardArray[2][0].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[2][1].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[2][2].isSunk()).toBe(true);
//     //For the Submarine
//     expect(gameboard.gameBoardArray[3][0].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[3][1].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[3][2].isSunk()).toBe(true);
//     //For the Patroller
//     expect(gameboard.gameBoardArray[4][0].isSunk()).toBe(true);
//     expect(gameboard.gameBoardArray[4][1].isSunk()).toBe(true);
//   });
// });
