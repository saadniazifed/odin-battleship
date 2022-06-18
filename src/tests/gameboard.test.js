import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";
let gameboard;
let ship;

beforeEach(() => {
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
    expect(gameboard.positionEmpty([0, 0], "horizontal", 1)).toEqual(false);
    expect(gameboard.positionEmpty([0, 1], "horizontal", 1)).toEqual(true);
    expect(gameboard.positionEmpty([0, 2], "horizontal", 1)).toEqual(true);
  });
});

describe("Checking positionEmpty function for Ship Length 1", () => {
  test("Checking positionEmpty function, Example 1 (Vertical)", () => {
    const myFirstShip = Ship(1);
    gameboard.gameBoardArray[0][0] = myFirstShip;
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

describe("Checking placeVerticalShip function for Ship length 2", () => {
  test("placeVerticalShip function for Ship length 2", () => {
    const myFirstShip = Ship(2);
    expect(
      gameboard.placeVerticalShips([1, 1], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([2, 1], myFirstShip, "vertical")
    ).toEqual(false);
    expect(
      gameboard.placeVerticalShips([2, 3], myFirstShip, "vertical")
    ).toEqual(true);
  });
});

describe("Checking placeVerticalShip function for Ship length 3", () => {
  test("placeVerticalShip function for Ship length 3", () => {
    const myFirstShips = Ship(3);
    expect(
      gameboard.placeVerticalShips([0, 0], myFirstShips, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 1], myFirstShips, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 2], myFirstShips, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([2, 3], myFirstShips, "vertical")
    ).toEqual(true);
  });
});

describe("Checking placeVerticalShip function for Ship length 4", () => {
  test("placeVerticalShip function for Ship length 4", () => {
    const myFirstShip = Ship(4);
    expect(
      gameboard.placeVerticalShips([0, 0], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 1], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 2], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 3], myFirstShip, "vertical")
    ).toEqual(true);

    expect(
      gameboard.placeVerticalShips([2, 2], myFirstShip, "vertical")
    ).toEqual(false);
  });
});

describe("Checking placeVerticalShip function for Ship length 5", () => {
  test("placeVerticalShip function for Ship length 5", () => {
    const myFirstShip = Ship(5);
    expect(
      gameboard.placeVerticalShips([0, 0], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 1], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 2], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 3], myFirstShip, "vertical")
    ).toEqual(true);
    expect(
      gameboard.placeVerticalShips([0, 4], myFirstShip, "vertical")
    ).toEqual(true);

    expect(
      gameboard.placeVerticalShips([2, 2], myFirstShip, "vertical")
    ).toEqual(false);

    expect(
      gameboard.placeVerticalShips([9, 2], myFirstShip, "vertical")
    ).toEqual(false);
  });
});

describe("Checking placeHorizontalShip function for Ship length 2", () => {
  test("placeHorizontalShip function for Ship length 2", () => {
    const myFirstShip = Ship(2);

    expect(
      gameboard.placeHorizontalShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking placeHorizontalShip function for Ship length 3", () => {
  test("placeHorizontalShip function for Ship length 3", () => {
    const myFirstShip = Ship(3);

    expect(
      gameboard.placeHorizontalShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking placeHorizontalShip function for Ship length 4", () => {
  test("placeHorizontalShip function for Ship length 4", () => {
    const myFirstShip = Ship(4);

    expect(
      gameboard.placeHorizontalShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([3, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    //Checking to see if the ship can be placed in another coordinate. It can't because the length is 2 and i am trying to get the 3rd index filled.
    expect(
      gameboard.placeHorizontalShips([0, 7], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking placeHorizontalShip function for Ship length 5", () => {
  test("placeHorizontalShip function for Ship length 5", () => {
    const myFirstShip = Ship(5);

    expect(
      gameboard.placeHorizontalShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([3, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([4, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.placeHorizontalShips([0, 7], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking the directionOfShips function with Ship Length 2", () => {
  test("Check the vertical direction", () => {
    const myFirstShip = Ship(2);
    expect(gameboard.directionOfShips([0, 0], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 1], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(
      gameboard.directionOfShips([(1, 0)], myFirstShip, "vertical")
    ).toEqual(false);
  });
});

describe("Checking the directionOfShips function with Ship Length 3", () => {
  test("Check the vertical direction", () => {
    const myFirstShip = Ship(3);
    expect(gameboard.directionOfShips([0, 0], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 1], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 2], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([1, 0], myFirstShip, "vertical")).toEqual(
      false
    );
  });
});

describe("Checking the directionOfShips function with Ship Length 4", () => {
  test("Check the vertical direction", () => {
    const myFirstShip = Ship(4);
    expect(gameboard.directionOfShips([0, 0], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 1], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 2], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 3], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([1, 0], myFirstShip, "vertical")).toEqual(
      false
    );
  });
});

describe("Checking the directionOfShips function with Ship Length 5", () => {
  test("Check the vertical direction", () => {
    const myFirstShip = Ship(5);
    expect(gameboard.directionOfShips([0, 0], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 1], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 2], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 3], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([0, 4], myFirstShip, "vertical")).toEqual(
      true
    );
    expect(gameboard.directionOfShips([1, 0], myFirstShip, "vertical")).toEqual(
      false
    );
  });
});

describe("Checking the directionOfShips function with Ship Length 2", () => {
  test("Check the horizontal direction", () => {
    const myFirstShip = Ship(2);
    expect(
      gameboard.directionOfShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);

    expect(
      gameboard.directionOfShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking the directionOfShips function with Ship Length 3", () => {
  test("Check the horizontal direction", () => {
    const myFirstShip = Ship(3);
    expect(
      gameboard.directionOfShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);

    expect(
      gameboard.directionOfShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking the directionOfShips function with Ship Length 4", () => {
  test("Check the horizontal direction", () => {
    const myFirstShip = Ship(4);
    expect(
      gameboard.directionOfShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([3, 0], myFirstShip, "horizontal")
    ).toEqual(true);

    expect(
      gameboard.directionOfShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking the directionOfShips function with Ship Length 5", () => {
  test("Check the horizontal direction", () => {
    const myFirstShip = Ship(5);
    expect(
      gameboard.directionOfShips([0, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([1, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([2, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([3, 0], myFirstShip, "horizontal")
    ).toEqual(true);
    expect(
      gameboard.directionOfShips([4, 0], myFirstShip, "horizontal")
    ).toEqual(true);

    expect(
      gameboard.directionOfShips([0, 1], myFirstShip, "horizontal")
    ).toEqual(false);
  });
});

describe("Checking the receiveAttack function", () => {
  test("Checking the receiveAttack function for the miss value", () => {
    const myFirstShip = Ship(2);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([0, 3]);
    gameboard.receiveAttack([0, 4]);

    expect(gameboard.gameBoardArray[0][2]).toBe("miss");
    expect(gameboard.gameBoardArray[0][3]).toBe("miss");
    expect(gameboard.gameBoardArray[0][4]).toBe("miss");
  });
});

describe("Checking the receiveAttack function for the hit method of the ship", () => {
  test("Checking the hit method for the Ship object length 2", () => {
    const myFirstShip = Ship(2);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);

    expect(myFirstShip.getShipArray()).toHaveLength(0);
  });
});

describe("Checking the receiveAttack function for the hit method of the ship", () => {
  test("Checking the hit method for the Ship object length 3", () => {
    const myFirstShip = Ship(3);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);

    expect(myFirstShip.getShipArray()).toHaveLength(0);
  });
});

describe("Checking the receiveAttack function for the hit method of the ship", () => {
  test("Checking the hit method for the Ship object length 4", () => {
    const myFirstShip = Ship(4);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;
    gameboard.gameBoardArray[0][3] = myFirstShip;

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([0, 3]);

    expect(myFirstShip.getShipArray()).toHaveLength(0);
  });
});

describe("Checking the receiveAttack function for the hit method of the ship", () => {
  test("Checking the hit method for the Ship object length 5", () => {
    const myFirstShip = Ship(4);
    gameboard.gameBoardArray[0][0] = myFirstShip;
    gameboard.gameBoardArray[0][1] = myFirstShip;
    gameboard.gameBoardArray[0][2] = myFirstShip;
    gameboard.gameBoardArray[0][3] = myFirstShip;
    gameboard.gameBoardArray[0][4] = myFirstShip;

    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([0, 3]);
    gameboard.receiveAttack([0, 4]);

    expect(myFirstShip.getShipArray()).toHaveLength(0);
  });
});

describe.only("Checking allSunk function if the ships have been sunk or not", () => {
  test("Checking if all ships have sunk or not", () => {
    gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    gameboard.placeShip().placePatroller([4, 0], "horizontal");
    //Attacking water carrier.
    gameboard.receiveAttack([0, 0]);
    gameboard.receiveAttack([0, 1]);
    gameboard.receiveAttack([0, 2]);
    gameboard.receiveAttack([0, 3]);
    gameboard.receiveAttack([0, 4]);
    //Attacking Battleship
    gameboard.receiveAttack([1, 0]);
    gameboard.receiveAttack([1, 1]);
    gameboard.receiveAttack([1, 2]);
    gameboard.receiveAttack([1, 3]);
    //Attacking Destroyer
    gameboard.receiveAttack([2, 0]);
    gameboard.receiveAttack([2, 1]);
    gameboard.receiveAttack([2, 2]);
    //Attacking Submarine
    gameboard.receiveAttack([3, 0]);
    gameboard.receiveAttack([3, 1]);
    gameboard.receiveAttack([3, 2]);
    //Attacking Patroller
    gameboard.receiveAttack([4, 0]);
    gameboard.receiveAttack([4, 1]);

    expect(gameboard.allSunk()).toEqual(true);
    console.table(gameboard.gameBoardArray);
  });
});
