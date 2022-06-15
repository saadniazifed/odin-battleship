import { Gameboard } from "./GameboardFactory";

const playerFactory = (name) => {
  const getName = () => name;
  const getGameboard = Gameboard();
  return {
    getName,
    getGameboard,
  };
};

export { playerFactory };
