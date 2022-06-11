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

  const placeVerticalShips = (x, y, ship) => {
    for (let i = 0; i < ship.length; i++) {
      gameBoardArray[y + i][x] = ship.shipName;
    }
    return gameBoardArray;
  };

  const placeHorizontalShips = (x, y, ship) => {
    for (let i = 0; i < ship.length; i++) {
      gameBoardArray[x + i][y] = ship.shipName;
    }
    return gameBoardArray;
  };

  const directionOfShips = (x, y, ship, direction) => {
    if (direction === "vertical") {
      return placeVerticalShips(x, y, ship);
    } else if (direction === "horizontal") {
      return placeHorizontalShips(x, y, ship);
    }
  };

  //Placing each ship in their respective positions
  const placeShip = () => {
    const placeWaterCarrier = (x, y, direction) => {
      return directionOfShips(x, y, waterCarrier, direction);
    };

    const placeDestroyer = (x, y, direction) => {
      return directionOfShips(x, y, destroyer, direction);
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
      console.table(gameBoardArray);
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
