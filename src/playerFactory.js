import { Gameboard } from "./GameboardFactory";

const Player = (name) => {
  const getName = () => name;
  return {
    getName,
  };
};

const playerOneBoard = "";
const playerTwoBoard = "";

export { Player, playerOneBoard, playerTwoBoard };
