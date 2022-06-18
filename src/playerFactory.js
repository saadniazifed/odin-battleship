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
  // const { gameboard } = Player("computer", 2);
  // const makeRandomAttack = () => {};
  // return { gameboard, makeRandomAttack };
  return {};
};

export { Player, ComputerPlayer };
