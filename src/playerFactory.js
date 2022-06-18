import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;
  const gameboard = Gameboard();
  const sendAttack = () => {}; //will the sendAttack be a method of Player factory function? or will the logic be something else completely different?

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

const player = Player("Mark", 1);
const computer = ComputerPlayer("Computer", 2);

export { Player, ComputerPlayer };
