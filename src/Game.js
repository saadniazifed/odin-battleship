import { Gameboard } from "./GameboardFactory";
import { ComputerPlayer, Player } from "./playerFactory";

const gameController = () => {
  let player;
  let computer;
  let playerBoard;
  let computerBoard;
  let activeOpponentBoard;
  let activePlayer;

  const setUpGame = () => {
    player = Player("John", 1);
    computer = ComputerPlayer("Computer", 2);
    activePlayer = player;
    activeOpponentBoard = computerBoard;
  };

  const placeShips = () => {
    player.placeShips().placeWaterCarrier([0, 0], "horizontal");
    player.placeShips().placeBattleship([1, 0], "horizontal");
    player.placeShips().placeDestroyer([2, 0], "horizontal");
    player.placeShips().placeSubmarine([3, 0], "horizontal");
    player.placeShips().placePatroller([4, 0], "horizontal");
  };
};
