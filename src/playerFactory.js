import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;

  return {
    getName,
  };
};

export { Player };
