import { Gameboard } from "../GameboardFactory";
import { Ship } from "../shipFactory";
let gameboard;

// beforeAll(() => {
//   gameboard = Gameboard();
// });

test("Is Ship Returning Us Something", () => {
  expect(Ship()).toBeDefined();
});

test("Correct length of Ship", () => {
  const myFirstShip = Ship(3);
  expect(myFirstShip.length).toEqual(3);
});

test("Correct length of Ship #2", () => {
  const mySecondShip = Ship(1);
  expect(mySecondShip.length).toEqual(1);
});

test("Correct length of Ship #3", () => {
  const myThirdShip = Ship(2);
  expect(myThirdShip.length).toEqual(2);
});

describe.only("Checking to see if the hit function is working, and the length is decreased by 1", () => {
  test("Checking to see if the length is decreased by 1 for the Ship", () => {
    const myFirstShip = Ship(3, "Patroller");
    expect(myFirstShip.hit()).toEqual([null, null]);
    expect(myFirstShip.hit()).toEqual([null]);
    expect(myFirstShip.hit()).toEqual([]);
  });
});

describe.only("Checking to see if the hit function is working, and the length is decreased by 1", () => {
  test("Checking to see if the length is decreased by 1 for the Ship", () => {
    const myFirstShip = Ship(4, "Destroyer");
    expect(myFirstShip.hit()).toEqual([null, null, null]);
    expect(myFirstShip.hit()).toEqual([null, null]);
    expect(myFirstShip.hit()).toEqual([null]);
    expect(myFirstShip.hit()).toEqual([]);
  });
});

test("Checking to see if the ship is hit #2", () => {
  const myFirstShip = Ship(3);
  myFirstShip.hit(1);
  expect(myFirstShip.getShipArray()[1]).toBe("hit");
});

test("Checking to see if the ship is hit #3", () => {
  const myFirstShip = Ship(3);
  myFirstShip.hit(2);
  expect(myFirstShip.getShipArray()[2]).toBe("hit");
});

test("when ship sinks, ship array must be correctly marked and isSunk should be true #1", () => {
  const myFirstShip = Ship(3);
  myFirstShip.hit(0);
  myFirstShip.hit(1);
  myFirstShip.hit(2);

  expect(myFirstShip.getShipArray()).toEqual(["hit", "hit", "hit"]);
  expect(myFirstShip.isSunk()).toBe(true);
});

test("when ship sinks, ship array must be correctly marked and isSunk should be true #2", () => {
  const myFirstShip = Ship(4);
  myFirstShip.hit(0);
  myFirstShip.hit(1);
  myFirstShip.hit(2);
  myFirstShip.hit(3);

  expect(myFirstShip.getShipArray()).toEqual(["hit", "hit", "hit", "hit"]);
  expect(myFirstShip.isSunk()).toBe(true);
});

test("when ship sinks, ship array must be correctly marked and isSunk should be true #3", () => {
  const myFirstShip = Ship(2);
  myFirstShip.hit(0);
  myFirstShip.hit(1);

  expect(myFirstShip.getShipArray()).toEqual(["hit", "hit"]);
  expect(myFirstShip.isSunk()).toBe(true);
});

test("When the ship has been hit, this test will see that the isSunk should return false", () => {
  const myFirstShip = Ship(2);
  myFirstShip.hit(0);

  expect(myFirstShip.getShipArray()).toEqual(["hit", null]);
  expect(myFirstShip.isSunk()).toEqual(false);
});
