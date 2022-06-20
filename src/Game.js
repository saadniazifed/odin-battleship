import { ComputerPlayer, Player } from "./playerFactory";

const gameController = () => {
  console.log(1);
  let player;
  let computer;
  let activeOpponentBoard;
  let activePlayer;

  const setUpGame = () => {
    player = Player("John", 1);
    computer = ComputerPlayer("Computer", 2);
    activePlayer = player;
    activeOpponentBoard = computer.gameboard;
  };

  const placeShips = () => {
    player.gameboard.placeShips().placeWaterCarrier([0, 0], "horizontal");
    player.gameboard.placeShips().placeBattleship([1, 0], "horizontal");
    player.gameboard.placeShips().placeDestroyer([2, 0], "horizontal");
    player.gameboard.placeShips().placeSubmarine([3, 0], "horizontal");
    player.gameboard.placeShips().placePatroller([4, 0], "horizontal");

    console.table(player.gameboard.gameBoardArray);
  };

  const isGameOver = () => {
    if (player.gameboard.isSunk() === true) {
      console.log(`${computer.getName()} is the winner!`);
    } else if (computer.gameboard.isSunk() === true) {
      console.log(`${player.getName()} is the winner!`);
    }
  };

  return {
    placeShips,
    isGameOver,
    setUpGame,
  };
};

export { gameController };
