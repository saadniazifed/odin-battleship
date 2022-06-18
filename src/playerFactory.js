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

export { Player };
