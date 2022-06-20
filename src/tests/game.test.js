import { Gameboard } from "../GameboardFactory";
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

describe.only("Checking to see if the ships are being placed by default", () => {
  test("Check if ship placement is working or not", () => {
    expect(
      player.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal")
    ).toEqual(true);
    expect(
      computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal")
    ).toEqual(true);
  });
});
