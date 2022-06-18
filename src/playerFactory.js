import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;
  const gameboard = Gameboard();

  return {
    getName,
    getPlayerNum,
    gameboard,
  };
};

const ComputerPlayer = () => {
  const { gameboard, getName, getPlayerNum } = Player("Computer", 2); //Inheriting these 3 methods from Player factory functions.

  const randomAttack = () => {};
  const randomNumberGenerator = () => {};

  return { gameboard, getName, getPlayerNum };
};

export { Player, ComputerPlayer };
