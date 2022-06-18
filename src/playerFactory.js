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
  const prototype = Player("Computer", 2);
  // const { gameboard } = Player("computer", 2);
  // const makeRandomAttack = () => {};
  // return { gameboard, makeRandomAttack };
  return Object.assign({}, prototype);
};

export { Player, ComputerPlayer };
