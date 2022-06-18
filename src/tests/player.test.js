import { Player } from "../playerFactory";

describe.only("Checking if Player Factory is returning us defined or undefined", () => {
  test("Checking if Player Factory is defined or undefined", () => {
    expect(Player()).toBeDefined();
  });
});

describe.only("Checking if Player Factory returns a name", () => {
  test("Checking the getName function", () => {
    const playerOne = Player("Saad");
    expect(playerOne.getName()).toEqual("Saad");
  });
});

// describe.only("Checking if players have their own gameboard property", () => {
//   test("Checking for the gameboard property", () => {
// //     const playerOne = Player("Saad");
// //   });
// });
