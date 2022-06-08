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
