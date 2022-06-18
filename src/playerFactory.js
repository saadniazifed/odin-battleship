import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;

  return {
    getName,
    getPlayerNum,
  };
};

export { Player };
