import { Ship } from "./shipFactory";

const Gameboard = () => {
  const gameBoardArray = [];

  for (let i = 0; i < 10; i++) {
    gameBoardArray[i] = [];
    for (let j = 0; j < 10; j++) {
      gameBoardArray[i][j] = null;
    }
  }

  const waterCarrier = Ship(5, "Water Carrier");
  const battleShip = Ship(4, "Battleship");
  const destroyer = Ship(3, "Destroyer");
  const submarine = Ship(3, "Submarine");
  const patroller = Ship(2, "Patroller");

  const placeShip = () => {
    const placeWaterCarrier = (positionA, positionB) => {
      gameBoardArray[positionA][positionB] = waterCarrier;
      return [[gameBoardArray[positionA][positionB]]];
    };

    const placeDestroyer = (positionA, positionB) => {
      gameBoardArray[positionA][positionB] = destroyer;
      return [[gameBoardArray[positionA][positionB]]];
    };

    const placeBattleship = (positionA, positionB) => {
      gameBoardArray[positionA][positionB] = battleShip;
      return [[gameBoardArray[positionA][positionB]]];
    };

    const placeSubmarine = (positionA, positionB) => {
      gameBoardArray[positionA][positionB] = submarine;
      return [[gameBoardArray[positionA][positionB]]];
    };

    const placePatroller = (positionA, positionB) => {
      gameBoardArray[positionA][positionB] = patroller;
      return [[gameBoardArray][positionA][positionB]];
    };

    return {
      placeWaterCarrier,
      placeDestroyer,
      placeBattleship,
      placeSubmarine,
      placePatroller,
    };
  };

  return {
    placeShip,
  };
};

export { Gameboard };
