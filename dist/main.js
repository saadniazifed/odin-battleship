/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Game.js":
/*!*********************!*\
  !*** ./src/Game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameController": () => (/* binding */ gameController)
/* harmony export */ });
/* harmony import */ var _playerFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerFactory */ "./src/playerFactory.js");


const gameController = () => {
  let player;
  let computer;
  let activeOpponentBoard;
  let activePlayer;

  const setUpGame = () => {
    player = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.Player)("John", 1);
    computer = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer)("Computer", 2);
    activePlayer = player;
    activeOpponentBoard = computer.gameboard;
  };

  const placeShips = () => {
    player.gameboard.placeShips().placeWaterCarrier([0, 0], "horizontal");
    player.gameboard.placeShips().placeBattleship([1, 0], "horizontal");
    player.gameboard.placeShips().placeDestroyer([2, 0], "horizontal");
    player.gameboard.placeShips().placeSubmarine([3, 0], "horizontal");
    player.gameboard.placeShips().placePatroller([4, 0], "horizontal");

    computer.gameboard.placeShips().placeWaterCarrier([0, 0], "horizontal");
    computer.gameboard.placeShips().placeBattleship([1, 0], "horizontal");
    computer.gameboard.placeShips().placeDestroyer([2, 0], "horizontal");
    computer.gameboard.placeShips().placeSubmarine([3, 0], "horizontal");
    computer.gameboard.placeShips().placePatroller([4, 0], "horizontal");

    console.log(player.gameboard.gameBoardArray);
    console.log(1);
  };

  const isGameOver = () => {
    if (player.gameboard.isSunk() === true) {
      console.log(`${computer.getName()} is the winner!`);
    } else if (computer.gameboard.isSunk() === true) {
      console.log(`${player.getName()} is the winner!`);
    }
  };

  return {
    placeShips,
    isGameOver,
    setUpGame,
  };
};




/***/ }),

/***/ "./src/GameboardFactory.js":
/*!*********************************!*\
  !*** ./src/GameboardFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _shipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipFactory */ "./src/shipFactory.js");


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
  const waterCarrier = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship)(5, "Water Carrier");
  const battleShip = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship)(4, "Battleship");
  const destroyer = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, "Destroyer");
  const submarine = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship)(3, "Submarine");
  const patroller = (0,_shipFactory__WEBPACK_IMPORTED_MODULE_0__.Ship)(2, "Patroller");

  const allShips = [];
  allShips.push(waterCarrier, battleShip, destroyer, submarine, patroller);

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
    let row = cell[0];
    let column = cell[1];

    if (gameBoardArray[row][column] === null) {
      return (gameBoardArray[row][column] = "miss");
    } else if (gameBoardArray[row][column] !== null) {
      gameBoardArray[row][column].hit();
      allSunk();
    }
  };

  const allSunk = () => {
    const arraySunkStatus = (eachShip) => eachShip.isSunk();
    return allShips.every(arraySunkStatus);
  };

  //Placing each ship in their respective positions
  const placeShip = () => {
    const placeWaterCarrier = (cell, direction) => {
      let row = cell[0];
      let column = cell[1];
      return directionOfShips([row, column], waterCarrier, direction);
    };

    const placeDestroyer = (cell, direction) => {
      let row = cell[0];
      let column = cell[1];
      return directionOfShips([row, column], destroyer, direction);
    };

    const placeBattleship = (cell, direction) => {
      let row = cell[0];
      let column = cell[1];
      return directionOfShips([row, column], battleShip, direction);
    };

    const placeSubmarine = (cell, direction) => {
      let row = cell[0];
      let column = cell[1];
      return directionOfShips([row, column], submarine, direction);
    };

    const placePatroller = (cell, direction) => {
      let row = cell[0];
      let column = cell[1];
      return directionOfShips([row, column], patroller, direction);
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
    allSunk,
  };
};




/***/ }),

/***/ "./src/playerFactory.js":
/*!******************************!*\
  !*** ./src/playerFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComputerPlayer": () => (/* binding */ ComputerPlayer),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _GameboardFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameboardFactory */ "./src/GameboardFactory.js");


const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;
  const gameboard = (0,_GameboardFactory__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

  const attackReceived = (cell) => {
    let row = cell[0];
    let column = cell[1];
    if (gameboard.receiveAttack([row, column])) return true;
    return false;
  };

  const sendAttack = (cell, player) => {
    let row = cell[0];
    let column = cell[1];
    return player.attackReceived([row, column]);
  };

  return {
    sendAttack,
    getName,
    getPlayerNum,
    gameboard,
    attackReceived,
  };
};

const ComputerPlayer = () => {
  const { gameboard, getName, getPlayerNum } = Player("Computer", 2); //Inheriting these 3 methods

  const attackedPositions = []; //Array of the attacked positions
  const getAttackPositions = () => attackedPositions; //Keeping it encapsulated.
  const addAttackedPositions = (coordinates) => {
    let row = coordinates[0];
    let column = coordinates[1];
    attackedPositions.push([row, column]);
  };

  const getRandomPosition = () => {
    let row;
    let column;
    do {
      row = Math.floor(Math.random() * 10);
      column = Math.floor(Math.random() * 10);
    } while (attackedPositions.includes([row, column]));
    attackedPositions.push([row, column]);
    return row, column;
  };

  const attackReceived = (cell) => {
    let row = cell[0];
    let column = cell[1];
    if (gameboard.receiveAttack([row, column])) return true;
    return false;
  };

  const sendAttack = (cell, player) => {
    let row = cell[0];
    let column = cell[1];
    return player.attackReceived([row, column]);
  };

  return {
    sendAttack,
    gameboard,
    getName,
    getPlayerNum,
    getAttackPositions,
    getRandomPosition,
    addAttackedPositions,
    attackReceived,
  };
};




/***/ }),

/***/ "./src/shipFactory.js":
/*!****************************!*\
  !*** ./src/shipFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
function Ship(length, name) {
  const shipName = name;
  const _shipArray = Array(length).fill(null);
  const getShipArray = () => [..._shipArray];

  const hit = () => {
    _shipArray.splice(0, 1);
    return _shipArray;
  };

  const isSunk = () => {
    if (_shipArray.length === 0) {
      return true;
    }
    return false;
  };

  return {
    shipName,
    getShipArray,
    length,
    hit,
    isSunk,
  };
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");


(0,_Game__WEBPACK_IMPORTED_MODULE_0__.gameController)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7OztBQzVFbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdCOzs7Ozs7O1VDMUJoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTndDOztBQUV4QyxxREFBYyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9HYW1lYm9hcmRGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcHV0ZXJQbGF5ZXIsIFBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGxldCBwbGF5ZXI7XG4gIGxldCBjb21wdXRlcjtcbiAgbGV0IGFjdGl2ZU9wcG9uZW50Qm9hcmQ7XG4gIGxldCBhY3RpdmVQbGF5ZXI7XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICAgIHBsYXllciA9IFBsYXllcihcIkpvaG5cIiwgMSk7XG4gICAgY29tcHV0ZXIgPSBDb21wdXRlclBsYXllcihcIkNvbXB1dGVyXCIsIDIpO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcjtcbiAgICBhY3RpdmVPcHBvbmVudEJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcHMgPSAoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBzKCkucGxhY2VXYXRlckNhcnJpZXIoWzAsIDBdLCBcImhvcml6b250YWxcIik7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXBzKCkucGxhY2VCYXR0bGVzaGlwKFsxLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwcygpLnBsYWNlRGVzdHJveWVyKFsyLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwcygpLnBsYWNlU3VibWFyaW5lKFszLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwcygpLnBsYWNlUGF0cm9sbGVyKFs0LCAwXSwgXCJob3Jpem9udGFsXCIpO1xuXG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoKS5wbGFjZVdhdGVyQ2FycmllcihbMCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwcygpLnBsYWNlQmF0dGxlc2hpcChbMSwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwcygpLnBsYWNlRGVzdHJveWVyKFsyLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXBzKCkucGxhY2VTdWJtYXJpbmUoWzMsIDBdLCBcImhvcml6b250YWxcIik7XG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcHMoKS5wbGFjZVBhdHJvbGxlcihbNCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbnNvbGUubG9nKHBsYXllci5nYW1lYm9hcmQuZ2FtZUJvYXJkQXJyYXkpO1xuICAgIGNvbnNvbGUubG9nKDEpO1xuICB9O1xuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuaXNTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAke2NvbXB1dGVyLmdldE5hbWUoKX0gaXMgdGhlIHdpbm5lciFgKTtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVyLmdhbWVib2FyZC5pc1N1bmsoKSA9PT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5sb2coYCR7cGxheWVyLmdldE5hbWUoKX0gaXMgdGhlIHdpbm5lciFgKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwbGFjZVNoaXBzLFxuICAgIGlzR2FtZU92ZXIsXG4gICAgc2V0VXBHYW1lLFxuICB9O1xufTtcblxuZXhwb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwRmFjdG9yeVwiO1xuXG4vKiAgICBcbmxldCByb3cgPSBjZWxsWzBdO1xubGV0IGNvbHVtbiA9IGNlbGxbMV07IFxuKi9cblxuY29uc3QgR2FtZWJvYXJkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lQm9hcmRBcnJheSA9IFtdO1xuICBjb25zdCBzaG93Qm9hcmQgPSAoKSA9PiBbLi4uZ2FtZUJvYXJkQXJyYXldO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgIGdhbWVCb2FyZEFycmF5W2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheVtpXVtqXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy9DcmVhdGluZyB0aGUgU2hpcHNcbiAgY29uc3Qgd2F0ZXJDYXJyaWVyID0gU2hpcCg1LCBcIldhdGVyIENhcnJpZXJcIik7XG4gIGNvbnN0IGJhdHRsZVNoaXAgPSBTaGlwKDQsIFwiQmF0dGxlc2hpcFwiKTtcbiAgY29uc3QgZGVzdHJveWVyID0gU2hpcCgzLCBcIkRlc3Ryb3llclwiKTtcbiAgY29uc3Qgc3VibWFyaW5lID0gU2hpcCgzLCBcIlN1Ym1hcmluZVwiKTtcbiAgY29uc3QgcGF0cm9sbGVyID0gU2hpcCgyLCBcIlBhdHJvbGxlclwiKTtcblxuICBjb25zdCBhbGxTaGlwcyA9IFtdO1xuICBhbGxTaGlwcy5wdXNoKHdhdGVyQ2FycmllciwgYmF0dGxlU2hpcCwgZGVzdHJveWVyLCBzdWJtYXJpbmUsIHBhdHJvbGxlcik7XG5cbiAgLy9DaGVja2luZyB0byBzZWUgaWYgdGhlIFNoaXAgRml0cy5cbiAgY29uc3Qgc2hpcEZpdCA9IChjZWxsLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgaWYgKFxuICAgICAgICByb3cgPj0gMCAmJlxuICAgICAgICBjb2x1bW4gPj0gMCAmJlxuICAgICAgICBjb2x1bW4gKyBzaGlwTGVuZ3RoIC0gMSA8IGdhbWVCb2FyZEFycmF5Lmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgY29sdW1uID49IDAgJiZcbiAgICAgICAgcm93ID49IDAgJiZcbiAgICAgICAgcm93ICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmRBcnJheS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLy9DaGVja2luZyB0byBzZWUgaWYgdGhlIFNoaXAgZXhpc3RzIGluIHRoYXQgbG9jYXRpb24gb3Igbm90LlxuICBjb25zdCBwb3NpdGlvbkVtcHR5ID0gKGNlbGwsIGRpcmVjdGlvbiwgc2hpcExlbmd0aCkgPT4ge1xuICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgIGxldCBjaGVja0lmRW1wdHkgPSB0cnVlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByb3cgPj0gMCAmJlxuICAgICAgICAgIGNvbHVtbiA+PSAwICYmXG4gICAgICAgICAgY29sdW1uICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmRBcnJheS5sZW5ndGggJiZcbiAgICAgICAgICBnYW1lQm9hcmRBcnJheVtyb3ddW2NvbHVtbiArIGldICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNoZWNrSWZFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvbHVtbiA+PSAwICYmXG4gICAgICAgICAgcm93ID49IDAgJiZcbiAgICAgICAgICByb3cgKyBzaGlwTGVuZ3RoIC0gMSA8IGdhbWVCb2FyZEFycmF5Lmxlbmd0aCAmJlxuICAgICAgICAgIGdhbWVCb2FyZEFycmF5W3JvdyArIGldW2NvbHVtbl0gIT09IG51bGxcbiAgICAgICAgKSB7XG4gICAgICAgICAgY2hlY2tJZkVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNoZWNrSWZFbXB0eTtcbiAgfTtcblxuICBjb25zdCBwbGFjZUhvcml6b250YWxTaGlwcyA9IChjZWxsLCBzaGlwLCBkaXJlY3Rpb24pID0+IHtcbiAgICBpZiAoIXNoaXBGaXQoY2VsbCwgZGlyZWN0aW9uLCBzaGlwLmxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAoIXBvc2l0aW9uRW1wdHkoY2VsbCwgZGlyZWN0aW9uLCBzaGlwLmxlbmd0aCkpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcbiAgICAgIGdhbWVCb2FyZEFycmF5W2NlbGxbMF1dW2NlbGxbMV0gKyBpXSA9IHNoaXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgLy8gIHggYXhpcyBpcyBhIGNvbHVtbiBzaGlmdCwgeSBheGlzIGlzIGEgcm93IHNoaWZ0LlxuICBjb25zdCBwbGFjZVZlcnRpY2FsU2hpcHMgPSAoY2VsbCwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKCFzaGlwRml0KGNlbGwsIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFwb3NpdGlvbkVtcHR5KGNlbGwsIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheVtjZWxsWzBdICsgaV1bY2VsbFsxXV0gPSBzaGlwO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGRpcmVjdGlvbk9mU2hpcHMgPSAoY2VsbCwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICByZXR1cm4gcGxhY2VWZXJ0aWNhbFNoaXBzKFtyb3csIGNvbHVtbl0sIHNoaXAsIGRpcmVjdGlvbik7XG4gICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICByZXR1cm4gcGxhY2VIb3Jpem9udGFsU2hpcHMoW3JvdywgY29sdW1uXSwgc2hpcCwgZGlyZWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjZWxsKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG5cbiAgICBpZiAoZ2FtZUJvYXJkQXJyYXlbcm93XVtjb2x1bW5dID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gKGdhbWVCb2FyZEFycmF5W3Jvd11bY29sdW1uXSA9IFwibWlzc1wiKTtcbiAgICB9IGVsc2UgaWYgKGdhbWVCb2FyZEFycmF5W3Jvd11bY29sdW1uXSAhPT0gbnVsbCkge1xuICAgICAgZ2FtZUJvYXJkQXJyYXlbcm93XVtjb2x1bW5dLmhpdCgpO1xuICAgICAgYWxsU3VuaygpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IGFycmF5U3Vua1N0YXR1cyA9IChlYWNoU2hpcCkgPT4gZWFjaFNoaXAuaXNTdW5rKCk7XG4gICAgcmV0dXJuIGFsbFNoaXBzLmV2ZXJ5KGFycmF5U3Vua1N0YXR1cyk7XG4gIH07XG5cbiAgLy9QbGFjaW5nIGVhY2ggc2hpcCBpbiB0aGVpciByZXNwZWN0aXZlIHBvc2l0aW9uc1xuICBjb25zdCBwbGFjZVNoaXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcGxhY2VXYXRlckNhcnJpZXIgPSAoY2VsbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbk9mU2hpcHMoW3JvdywgY29sdW1uXSwgd2F0ZXJDYXJyaWVyLCBkaXJlY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZURlc3Ryb3llciA9IChjZWxsLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgICByZXR1cm4gZGlyZWN0aW9uT2ZTaGlwcyhbcm93LCBjb2x1bW5dLCBkZXN0cm95ZXIsIGRpcmVjdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlQmF0dGxlc2hpcCA9IChjZWxsLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgICByZXR1cm4gZGlyZWN0aW9uT2ZTaGlwcyhbcm93LCBjb2x1bW5dLCBiYXR0bGVTaGlwLCBkaXJlY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVN1Ym1hcmluZSA9IChjZWxsLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgICByZXR1cm4gZGlyZWN0aW9uT2ZTaGlwcyhbcm93LCBjb2x1bW5dLCBzdWJtYXJpbmUsIGRpcmVjdGlvbik7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYWNlUGF0cm9sbGVyID0gKGNlbGwsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICAgIHJldHVybiBkaXJlY3Rpb25PZlNoaXBzKFtyb3csIGNvbHVtbl0sIHBhdHJvbGxlciwgZGlyZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYWNlV2F0ZXJDYXJyaWVyLFxuICAgICAgcGxhY2VEZXN0cm95ZXIsXG4gICAgICBwbGFjZUJhdHRsZXNoaXAsXG4gICAgICBwbGFjZVN1Ym1hcmluZSxcbiAgICAgIHBsYWNlUGF0cm9sbGVyLFxuICAgIH07XG4gIH07XG4gIHJldHVybiB7XG4gICAgcGxhY2VTaGlwLFxuICAgIGdhbWVCb2FyZEFycmF5LFxuICAgIHNob3dCb2FyZCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIHNoaXBGaXQsXG4gICAgcG9zaXRpb25FbXB0eSxcbiAgICBwbGFjZUhvcml6b250YWxTaGlwcyxcbiAgICBwbGFjZVZlcnRpY2FsU2hpcHMsXG4gICAgZGlyZWN0aW9uT2ZTaGlwcyxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFsbFN1bmssXG4gIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL0dhbWVib2FyZEZhY3RvcnlcIjtcblxuY29uc3QgUGxheWVyID0gKG5hbWUsIHBsYXllck51bSkgPT4ge1xuICBjb25zdCBnZXROYW1lID0gKCkgPT4gbmFtZTtcbiAgY29uc3QgZ2V0UGxheWVyTnVtID0gKCkgPT4gcGxheWVyTnVtO1xuICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICBjb25zdCBhdHRhY2tSZWNlaXZlZCA9IChjZWxsKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgaWYgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3csIGNvbHVtbl0pKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2VuZEF0dGFjayA9IChjZWxsLCBwbGF5ZXIpID0+IHtcbiAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICByZXR1cm4gcGxheWVyLmF0dGFja1JlY2VpdmVkKFtyb3csIGNvbHVtbl0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VuZEF0dGFjayxcbiAgICBnZXROYW1lLFxuICAgIGdldFBsYXllck51bSxcbiAgICBnYW1lYm9hcmQsXG4gICAgYXR0YWNrUmVjZWl2ZWQsXG4gIH07XG59O1xuXG5jb25zdCBDb21wdXRlclBsYXllciA9ICgpID0+IHtcbiAgY29uc3QgeyBnYW1lYm9hcmQsIGdldE5hbWUsIGdldFBsYXllck51bSB9ID0gUGxheWVyKFwiQ29tcHV0ZXJcIiwgMik7IC8vSW5oZXJpdGluZyB0aGVzZSAzIG1ldGhvZHNcblxuICBjb25zdCBhdHRhY2tlZFBvc2l0aW9ucyA9IFtdOyAvL0FycmF5IG9mIHRoZSBhdHRhY2tlZCBwb3NpdGlvbnNcbiAgY29uc3QgZ2V0QXR0YWNrUG9zaXRpb25zID0gKCkgPT4gYXR0YWNrZWRQb3NpdGlvbnM7IC8vS2VlcGluZyBpdCBlbmNhcHN1bGF0ZWQuXG4gIGNvbnN0IGFkZEF0dGFja2VkUG9zaXRpb25zID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVzWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjb29yZGluYXRlc1sxXTtcbiAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFJhbmRvbVBvc2l0aW9uID0gKCkgPT4ge1xuICAgIGxldCByb3c7XG4gICAgbGV0IGNvbHVtbjtcbiAgICBkbyB7XG4gICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgfSB3aGlsZSAoYXR0YWNrZWRQb3NpdGlvbnMuaW5jbHVkZXMoW3JvdywgY29sdW1uXSkpO1xuICAgIGF0dGFja2VkUG9zaXRpb25zLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgcmV0dXJuIHJvdywgY29sdW1uO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1JlY2VpdmVkID0gKGNlbGwpID0+IHtcbiAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICBpZiAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soW3JvdywgY29sdW1uXSkpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBjb25zdCBzZW5kQXR0YWNrID0gKGNlbGwsIHBsYXllcikgPT4ge1xuICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgIHJldHVybiBwbGF5ZXIuYXR0YWNrUmVjZWl2ZWQoW3JvdywgY29sdW1uXSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzZW5kQXR0YWNrLFxuICAgIGdhbWVib2FyZCxcbiAgICBnZXROYW1lLFxuICAgIGdldFBsYXllck51bSxcbiAgICBnZXRBdHRhY2tQb3NpdGlvbnMsXG4gICAgZ2V0UmFuZG9tUG9zaXRpb24sXG4gICAgYWRkQXR0YWNrZWRQb3NpdGlvbnMsXG4gICAgYXR0YWNrUmVjZWl2ZWQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIsIENvbXB1dGVyUGxheWVyIH07XG4iLCJmdW5jdGlvbiBTaGlwKGxlbmd0aCwgbmFtZSkge1xuICBjb25zdCBzaGlwTmFtZSA9IG5hbWU7XG4gIGNvbnN0IF9zaGlwQXJyYXkgPSBBcnJheShsZW5ndGgpLmZpbGwobnVsbCk7XG4gIGNvbnN0IGdldFNoaXBBcnJheSA9ICgpID0+IFsuLi5fc2hpcEFycmF5XTtcblxuICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgX3NoaXBBcnJheS5zcGxpY2UoMCwgMSk7XG4gICAgcmV0dXJuIF9zaGlwQXJyYXk7XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgIGlmIChfc2hpcEFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNoaXBOYW1lLFxuICAgIGdldFNoaXBBcnJheSxcbiAgICBsZW5ndGgsXG4gICAgaGl0LFxuICAgIGlzU3VuayxcbiAgfTtcbn1cblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVcIjtcblxuZ2FtZUNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==