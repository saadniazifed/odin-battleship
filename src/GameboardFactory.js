import { Ship } from "./shipFactory";

const Gameboard = () => {
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

  //Checking to see if the Ship Fits.
  const shipFit = (cell, direction, shipLength) => {
    let x = cell[0];
    let y = cell[1];
    if (direction === "horizontal") {
      if (x >= 0 && x + shipLength < gameBoardArray.length - 1) {
        return true;
      }
      return false;
    } else if (direction === "vertical") {
      if (y >= 0 || y + shipLength < gameBoardArray.length - 1) {
        return true;
      }
      return false;
    }
  };

  //Checking to see if the Ship exists in that location or not.
  const positionEmpty = (cell, direction, shipLength) => {
    let column = cell[0];
    let row = cell[1];
    let checkIfEmpty = true;

    if (direction === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        if (gameBoardArray[row + i][column] !== null) {
          checkIfEmpty = false;
          break;
        }
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        if (gameBoardArray[row + i][column] !== null) {
          checkIfEmpty = false;
          break;
        }
      }
    }
    return checkIfEmpty;
  };

  //  x axis is a column shift, y axis is a row shift.
  const placeVerticalShips = (column, row, ship, direction) => {
    let isShipFit = shipFit([column, row], direction, ship.length);
    let isPositionEmpty = positionEmpty([column, row], direction, ship.length);

    if (isShipFit === true && isPositionEmpty === true) {
      for (let i = 0; i < ship.length; i++) {
        gameBoardArray[row + i][column] = ship;
      }
    } else if (isShipFit !== true) {
      console.log("Oops, ships cannot be placed vertically here.");
    }
    return gameBoardArray;
  };

  const placeHorizontalShips = (column, row, ship, direction) => {
    let isShipFit = shipFit([column, row], direction, ship.length);
    let isPositionEmpty = positionEmpty([column, row], direction, ship.length);

    if (isShipFit === true && isPositionEmpty === true) {
      for (let i = 0; i < ship.length; i++) {
        gameBoardArray[row][column + i] = ship;
      }
    } else if (isShipFit !== true) {
      console.log("Oops ships are not fitting in there");
    }
    return gameBoardArray;
  };

  //Direction of Ships is controlled from here. Whether the ships will be placed horizontally or vertically.
  const directionOfShips = (x, y, ship, direction) => {
    if (direction === "vertical") {
      return placeVerticalShips(x, y, ship, direction);
    } else if (direction === "horizontal") {
      return placeHorizontalShips(x, y, ship, direction);
    }
  };

  const receiveAttack = (column, row) => {
    if (gameBoardArray[column][row] === null) {
      gameBoardArray[column][row] = "miss";
      if (gameBoardArray[column][row] === "miss") {
        return;
      }
    } else if (gameBoardArray[column][row] !== null) {
      gameBoardArray[column][row].hit();
      allShipsSunk();
    }
  };

  const allShipsSunk = () => {
    if (
      (waterCarrier.isSunk() === true,
      destroyer.isSunk() === true,
      battleShip.isSunk() === true,
      submarine.isSunk() === true,
      patroller.isSunk() === true)
    ) {
      console.log("All Ships have sunk");
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

    const placeBattleship = (x, y, direction) => {
      return directionOfShips(x, y, battleShip, direction);
    };

    const placeSubmarine = (x, y, direction) => {
      return directionOfShips(x, y, submarine, direction);
    };

    const placePatroller = (x, y, direction) => {
      return directionOfShips(x, y, patroller, direction);
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
    gameBoardArray,
    receiveAttack,
  };
};

export { Gameboard };
