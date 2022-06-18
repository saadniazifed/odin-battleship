import {
  playerFactory,
  playerOneBoard,
  playerTwoBoard,
} from "../playerFactory";

describe.only("Checking if Player Factory is returning us defined or undefined", () => {
  test("Checking if Player Factory is defined or undefined", () => {
    expect(playerFactory()).toBeDefined();
  });
});
