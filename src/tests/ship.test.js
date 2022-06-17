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
