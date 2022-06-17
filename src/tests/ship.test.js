import { Ship } from "../shipFactory";

describe("First function to be tested", () => {
  test("Is Ship Returning Us Something", () => {
    expect(Ship()).toBeDefined();
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 2", () => {
    const myFirstShip = Ship(2);
    expect(myFirstShip.getShipArray()).toHaveLength(2);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 3", () => {
    const myFirstShip = Ship(3);
    expect(myFirstShip.getShipArray()).toHaveLength(3);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 4", () => {
    const myFirstShip = Ship(4);
    expect(myFirstShip.getShipArray()).toHaveLength(4);
  });
});

describe("Testing the Length of the Ship", () => {
  test("Correct length of Ship 5", () => {
    const myFirstShip = Ship(5);
    expect(myFirstShip.getShipArray()).toHaveLength(5);
  });
});

describe("Testing the hit function in the ship of length 2", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(2);
    myFirstShip.hit();
    myFirstShip.hit();
    expect(myFirstShip.getShipArray()).toEqual([]);
  });
});

describe("Testing the hit function in the ship of length 3", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(3);
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();

    expect(myFirstShip.getShipArray()).toEqual([]);
  });
});

describe("Testing the hit function in the ship of length 4", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(4);
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();

    expect(myFirstShip.getShipArray()).toEqual([]);
  });
});

describe("Testing the hit function in the ship of length 5", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(5);
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();
    myFirstShip.hit();

    expect(myFirstShip.getShipArray()).toEqual([]);
  });
});

describe("Testing the isSunk function in the ship of length 2", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(2);
    myFirstShip.hit();
    myFirstShip.hit();

    expect(myFirstShip.isSunk()).toEqual(true);
  });
});

describe("Testing the isSunk function in the ship of length 2", () => {
  test("Testing hit function", () => {
    const myFirstShip = Ship(2);
    myFirstShip.hit();

    expect(myFirstShip.isSunk()).toEqual(false);
  });
});
