import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;
  const gameboard = Gameboard();
  const sendAttack = (cell) => {
    let row = cell[0];
    let column = cell[1];
    return computer.gameboard.receiveAttack([row, column]);
  };

  return {
    getName,
    getPlayerNum,
    gameboard,
    sendAttack,
  };
};

const ComputerPlayer = () => {
  const { gameboard, getName, getPlayerNum } = Player("Computer", 2); //Inheriting these 3 methods from Player factory functions.

  const randomAttack = () => {};
  const randomNumberGenerator = () => {};

  return { gameboard, getName, getPlayerNum };
};

const player = Player("Human", 1);
const computer = ComputerPlayer("Computer", 2);

export { Player, ComputerPlayer, player, computer };
