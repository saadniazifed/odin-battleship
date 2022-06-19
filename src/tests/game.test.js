import { ComputerPlayer, Player } from "../playerFactory";

let computer;
let player;

beforeEach(() => {
  player = Player("Human", 1);
  computer = ComputerPlayer("Computer", 2);
});

describe("Checking if player is hitting computers gameboard or not", () => {
  test("Check if game is working as expected or not", () => {
    expect(player.sendAttack([0, 0], computer)).toEqual(true);
    expect(computer.sendAttack([0, 0], player)).toEqual(true);
  });
});
