import { ComputerPlayer, Player } from "./playerFactory";

const gameController = (function () {
  let player;
  let computer;
  let activeOpponentBoard;
  let activePlayer;
  player = Player("John", 1);
  computer = ComputerPlayer("Computer", 2);

  const setUpGame = () => {
    // player = Player("John", 1);
    // computer = ComputerPlayer("Computer", 2);
    activePlayer = player;
    activeOpponentBoard = computer.gameboard;
  };

  const shipPlacement = () => {
    player.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    player.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    player.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    player.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    player.gameboard.placeShip().placePatroller([4, 0], "horizontal");

    computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");
  };

  const attackShip = () => {
    player.sendAttack([0, 4], computer);
    isGameOver();
    player.sendAttack([0, 3], computer);
    isGameOver();
    player.sendAttack([0, 2], computer);
    isGameOver();
    player.sendAttack([0, 1], computer);
    isGameOver();
    player.sendAttack([0, 0], computer);
    isGameOver();
    player.sendAttack([1, 0], computer);
    isGameOver();
    player.sendAttack([1, 1], computer);
    isGameOver();
    player.sendAttack([1, 2], computer);
    isGameOver();
    player.sendAttack([1, 3], computer);
    isGameOver();
    player.sendAttack([1, 4], computer);
    isGameOver();
    player.sendAttack([2, 0], computer);
    isGameOver();
    player.sendAttack([2, 1], computer);
    isGameOver();
    player.sendAttack([2, 2], computer);
    isGameOver();
    player.sendAttack([2, 3], computer);
    isGameOver();
    player.sendAttack([3, 3], computer);
    isGameOver();
    player.sendAttack([3, 2], computer);
    isGameOver();
    player.sendAttack([3, 1], computer);
    isGameOver();
    player.sendAttack([3, 0], computer);
    isGameOver();
    player.sendAttack([4, 3], computer);
    isGameOver();
    player.sendAttack([4, 2], computer);
    isGameOver();
    player.sendAttack([4, 1], computer);
    isGameOver();
    player.sendAttack([4, 0], computer);
    isGameOver();
  };

  const isGameOver = () => {
    if (player.gameboard.allSunk() === true) {
      console.log(`${computer.getName()} is the winner!`);
    } else if (computer.gameboard.allSunk() === true) {
      console.log(`${player.getName()} is the winner!`);
    } else if (
      player.gameboard.allSunk() === false &&
      computer.gameboard.allSunk() === false
    ) {
      return false;
    }
  };

  return {
    setUpGame,
    shipPlacement,
    attackShip,
    player,
    computer,
  };
})();

export { gameController };
