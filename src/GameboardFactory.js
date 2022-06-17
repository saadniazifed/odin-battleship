import { Ship } from "./shipFactory";

/*    
let row = cell[0];
let column = cell[1]; 
*/

const Gameboard = () => {
  const gameBoardArray = [];
  const showBoard = () => [...gameBoardArray];

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
    let row = cell[0];
    let column = cell[1];
    if (direction === "horizontal") {
      if (
        row >= 0 &&
        column >= 0 &&
        column + shipLength - 1 < gameBoardArray.length
      ) {
        return true;
      }
      return false;
    } else if (direction === "vertical") {
      if (
        column >= 0 &&
        row >= 0 &&
        row + shipLength - 1 < gameBoardArray.length
      ) {
        return true;
      }
      return false;
    }
  };

  //Checking to see if the Ship exists in that location or not.
  const positionEmpty = (cell, direction, shipLength) => {
    let row = cell[0];
    let column = cell[1];
    let checkIfEmpty = true;

    if (direction === "horizontal") {
      for (let i = 0; i < shipLength; i++) {
        if (
          row >= 0 &&
          column >= 0 &&
          column + shipLength - 1 < gameBoardArray.length &&
          gameBoardArray[row][column + i] !== null
        ) {
          checkIfEmpty = false;
          break;
        }
      }
    } else if (direction === "vertical") {
      for (let i = 0; i < shipLength; i++) {
        if (
          column >= 0 &&
          row >= 0 &&
          row + shipLength - 1 < gameBoardArray.length &&
          gameBoardArray[row + i][column] !== null
        ) {
          checkIfEmpty = false;
          break;
        }
      }
    }
    return checkIfEmpty;
  };

  const placeHorizontalShips = (cell, ship, direction) => {
    if (!shipFit(cell, direction, ship.length)) return false;
    if (!positionEmpty(cell, direction, ship.length)) return false;
    for (let i = 0; i < ship.length; i++) {
      gameBoardArray[cell[0]][cell[1] + i] = ship;
    }

    return true;
  };

  //  x axis is a column shift, y axis is a row shift.
  const placeVerticalShips = (cell, ship, direction) => {
    if (!shipFit(cell, direction, ship.length)) return false;
    if (!positionEmpty(cell, direction, ship.length)) return false;
    for (let i = 0; i < ship.length; i++) {
      gameBoardArray[cell[0] + i][cell[1]] = ship;
    }

    return true;
  };

  const directionOfShips = (cell, ship, direction) => {
    let row = cell[0];
    let column = cell[1];
    if (direction === "vertical") {
      return placeVerticalShips([row, column], ship, direction);
    } else if (direction === "horizontal") {
      return placeHorizontalShips([row, column], ship, direction);
    }
  };

  const receiveAttack = (cell) => {
    let column = cell[0];
    let row = cell[1];
    if (gameBoardArray[column][row] === null) {
      return (gameBoardArray[column][row] = "miss");
    } else if (gameBoardArray[column][row] !== null) {
      return gameBoardArray[column][row].hit();
    }
  };

  const allShipsSunk = () => {
    if (
      waterCarrier.isSunk() === true &&
      destroyer.isSunk() === true &&
      battleShip.isSunk() === true &&
      submarine.isSunk() === true &&
      patroller.isSunk() === true
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
    showBoard,
    receiveAttack,
    shipFit,
    positionEmpty,
    placeHorizontalShips,
    placeVerticalShips,
    directionOfShips,
    receiveAttack,
  };
};

export { Gameboard };
