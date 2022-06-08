import { Ship } from "../shipFactory";

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

test("Checking to see if the ship is hit #1", () => {
  const myFirstShip = Ship(3);
  myFirstShip.hit(0);
  expect(myFirstShip.getShipArray().at(0)).toBe("hit");
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

test("Checking to see if the ship is hit #4", () => {
  const myFirstShip = Ship(3);
  myFirstShip.hit(3);
  console.log(myFirstShip.getShipArray());
  expect(myFirstShip.getShipArray()[3]).toBe("hit");
});
