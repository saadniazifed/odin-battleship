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

describe.only("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    const playerOne = Player("Human", 1);
    expect(playerOne.getPlayerNum()).toEqual(1);
  });
});

describe.only("Checking if Player Factory returns playerNum", () => {
  test("Checking the playerNum function to be 1", () => {
    const playerOne = Player("Mark", 2);
    expect(playerOne.getPlayerNum()).toEqual(2);
  });
});

describe.only("Checking if each player object has a gameboard property", () => {
  test("Checking .toHaveProperty of gameboard on player object", () => {
    const playerOne = Player("Human", 1);
    expect(playerOne).toHaveProperty("gameboard");
  });
});

describe.only("Checking if gameboard are functional for the player object", () => {
  test("gameboard functionality check", () => {
    const playerOne = Player("Human", 1);
    expect(
      playerOne.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal")
    ).toEqual(true);
    expect(
      playerOne.gameboard.placeShip().placeBattleship([1, 0], "horizontal")
    ).toEqual(true);
  });
});
