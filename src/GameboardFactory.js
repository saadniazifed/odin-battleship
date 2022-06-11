import { Ship } from "./shipFactory";

const Gameboard = () => {
  //Creating a 10 x 10 2D Array
  const gameBoardArray = [];

  for (let i = 0; i < 10; i++) {
    gameBoardArray[i] = [];
    for (let j = 0; j < 10; j++) {
      gameBoardArray[i][j] = null;
    }
  }

  //Creating the Ships
  const waterCarrier = Ship(5, "Water Carrier");
  const battleShip = Ship(4, "Battleship");
  const destroyer = Ship(3, "Destroyer");
  const submarine = Ship(3, "Submarine");
  const patroller = Ship(2, "Patroller");

  //Placing each ship in their respective positions
  const placeShip = () => {
    const placeWaterCarrier = (x, y) => {
      for (let i = 0; i < waterCarrier.length; i++) {
        gameBoardArray[y + i][x] = waterCarrier.shipName;
      }
      return gameBoardArray;
    };

    const placeDestroyer = (x, y) => {
      for (let i = 0; i < destroyer.length; i++) {
        gameBoardArray[y + i][x] = destroyer.shipName;
      }
      return gameBoardArray;
    };

    const placeBattleship = (x, y) => {
      for (let i = 0; i < battleShip.length; i++) {
        gameBoardArray[y + i][x] = battleShip.shipName;
      }
      return gameBoardArray;
    };

    const placeSubmarine = (x, y) => {
      for (let i = 0; i < submarine.length; i++) {
        gameBoardArray[y + i][x] = submarine.shipName;
      }
      return gameBoardArray;
    };

    const placePatroller = (x, y) => {
      for (let i = 0; i < patroller.length; i++) {
        gameBoardArray[y + i][x] = patroller.shipName;
      }
      return gameBoardArray;
    };

    return {
      placeWaterCarrier,
      placeDestroyer,
      placeBattleship,
      placeSubmarine,
      placePatroller,
    };
  };

  const receiveAttack = () => {
    return {
      //
    };
  };

  return {
    placeShip,
    receiveAttack,
    gameBoardArray,
  };
};

export { Gameboard };
