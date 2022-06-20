/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.grid {\n  border-radius: 12%;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  border: 1px solid maroon;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,wBAAwB;AAC1B","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.grid {\n  border-radius: 12%;\n  width: 25px;\n  height: 25px;\n  background-color: white;\n  border: 1px solid maroon;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderPlayerBoard": () => (/* binding */ renderPlayerBoard)
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game.js");

const bodyDiv = document.querySelector(".experiment");

const createElement = (elementType, className) => {
  const htmlElement = document.createElement(elementType);
  htmlElement.classList.add(className);
  return htmlElement;
};

const renderPlayerBoard = () => {
  let board = _Game__WEBPACK_IMPORTED_MODULE_0__.gameController.player.gameboard.showBoard();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = createElement("div", "grid");
      bodyDiv.append(board[row][col]);
    }
  }
};




/***/ }),

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


const gameController = (function () {
  let player;
  let computer;
  let activeOpponentBoard;
  let activePlayer;
  player = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.Player)("John", 1);
  computer = (0,_playerFactory__WEBPACK_IMPORTED_MODULE_0__.ComputerPlayer)("Computer", 2);

  const setUpGame = () => {
    // player = Player("John", 1);
    // computer = ComputerPlayer("Computer", 2);
    activePlayer = player;
    activeOpponentBoard = computer.gameboard;
  };

  const shipPlacement = () => {
    player.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    player.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    player.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    player.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    player.gameboard.placeShip().placePatroller([4, 0], "horizontal");

    computer.gameboard.placeShip().placeWaterCarrier([0, 0], "horizontal");
    computer.gameboard.placeShip().placeBattleship([1, 0], "horizontal");
    computer.gameboard.placeShip().placeDestroyer([2, 0], "horizontal");
    computer.gameboard.placeShip().placeSubmarine([3, 0], "horizontal");
    computer.gameboard.placeShip().placePatroller([4, 0], "horizontal");
  };

  const attackShip = () => {
    player.sendAttack([0, 4], computer);
    isGameOver();
    player.sendAttack([0, 3], computer);
    isGameOver();
    player.sendAttack([0, 2], computer);
    isGameOver();
    player.sendAttack([0, 1], computer);
    isGameOver();
    player.sendAttack([0, 0], computer);
    isGameOver();
    player.sendAttack([1, 0], computer);
    isGameOver();
    player.sendAttack([1, 1], computer);
    isGameOver();
    player.sendAttack([1, 2], computer);
    isGameOver();
    player.sendAttack([1, 3], computer);
    isGameOver();
    player.sendAttack([1, 4], computer);
    isGameOver();
    player.sendAttack([2, 0], computer);
    isGameOver();
    player.sendAttack([2, 1], computer);
    isGameOver();
    player.sendAttack([2, 2], computer);
    isGameOver();
    player.sendAttack([2, 3], computer);
    isGameOver();
    player.sendAttack([3, 3], computer);
    isGameOver();
    player.sendAttack([3, 2], computer);
    isGameOver();
    player.sendAttack([3, 1], computer);
    isGameOver();
    player.sendAttack([3, 0], computer);
    isGameOver();
    player.sendAttack([4, 3], computer);
    isGameOver();
    player.sendAttack([4, 2], computer);
    isGameOver();
    player.sendAttack([4, 1], computer);
    isGameOver();
    player.sendAttack([4, 0], computer);
    isGameOver();
  };

  const isGameOver = () => {
    if (player.gameboard.allSunk() === true) {
      console.log(`${computer.getName()} is the winner!`);
    } else if (computer.gameboard.allSunk() === true) {
      console.log(`${player.getName()} is the winner!`);
    } else if (
      player.gameboard.allSunk() === false &&
      computer.gameboard.allSunk() === false
    ) {
      return false;
    }
  };

  return {
    setUpGame,
    shipPlacement,
    attackShip,
    player,
  };
})();




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


const Gameboard = () => {
  const gameBoardArray = [];
  const showBoard = () => [...gameBoardArray];

  for (let row = 0; row < 10; row++) {
    gameBoardArray[row] = [];
    for (let col = 0; col < 10; col++) {
      gameBoardArray[row][col] = null;
    }
  }

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM */ "./src/DOM.js");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./src/Game.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// import "./style.css";




(0,_DOM__WEBPACK_IMPORTED_MODULE_0__.renderPlayerBoard)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxVQUFVLG1DQUFtQyx5QkFBeUI7O0FBRXRFLGdDQUFnQztBQUNoQyxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7QUM1RWxDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVnQjs7Ozs7OztVQzFCaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDMEM7QUFDRjtBQUNuQjs7QUFFckIsdURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL0dhbWVib2FyZEZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXBGYWN0b3J5LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5ncmlkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEyJTtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCBtYXJvb247XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdyaWQge1xcbiAgYm9yZGVyLXJhZGl1czogMTIlO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIG1hcm9vbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBnYW1lQ29udHJvbGxlciB9IGZyb20gXCIuL0dhbWVcIjtcbmNvbnN0IGJvZHlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4cGVyaW1lbnRcIik7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoZWxlbWVudFR5cGUsIGNsYXNzTmFtZSkgPT4ge1xuICBjb25zdCBodG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudFR5cGUpO1xuICBodG1sRWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBodG1sRWxlbWVudDtcbn07XG5cbmNvbnN0IHJlbmRlclBsYXllckJvYXJkID0gKCkgPT4ge1xuICBsZXQgYm9hcmQgPSBnYW1lQ29udHJvbGxlci5wbGF5ZXIuZ2FtZWJvYXJkLnNob3dCb2FyZCgpO1xuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRbcm93XS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZ3JpZFwiKTtcbiAgICAgIGJvZHlEaXYuYXBwZW5kKGJvYXJkW3Jvd11bY29sXSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyByZW5kZXJQbGF5ZXJCb2FyZCB9O1xuIiwiaW1wb3J0IHsgQ29tcHV0ZXJQbGF5ZXIsIFBsYXllciB9IGZyb20gXCIuL3BsYXllckZhY3RvcnlcIjtcblxuY29uc3QgZ2FtZUNvbnRyb2xsZXIgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcGxheWVyO1xuICBsZXQgY29tcHV0ZXI7XG4gIGxldCBhY3RpdmVPcHBvbmVudEJvYXJkO1xuICBsZXQgYWN0aXZlUGxheWVyO1xuICBwbGF5ZXIgPSBQbGF5ZXIoXCJKb2huXCIsIDEpO1xuICBjb21wdXRlciA9IENvbXB1dGVyUGxheWVyKFwiQ29tcHV0ZXJcIiwgMik7XG5cbiAgY29uc3Qgc2V0VXBHYW1lID0gKCkgPT4ge1xuICAgIC8vIHBsYXllciA9IFBsYXllcihcIkpvaG5cIiwgMSk7XG4gICAgLy8gY29tcHV0ZXIgPSBDb21wdXRlclBsYXllcihcIkNvbXB1dGVyXCIsIDIpO1xuICAgIGFjdGl2ZVBsYXllciA9IHBsYXllcjtcbiAgICBhY3RpdmVPcHBvbmVudEJvYXJkID0gY29tcHV0ZXIuZ2FtZWJvYXJkO1xuICB9O1xuXG4gIGNvbnN0IHNoaXBQbGFjZW1lbnQgPSAoKSA9PiB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoKS5wbGFjZVdhdGVyQ2FycmllcihbMCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgpLnBsYWNlQmF0dGxlc2hpcChbMSwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgpLnBsYWNlRGVzdHJveWVyKFsyLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIHBsYXllci5nYW1lYm9hcmQucGxhY2VTaGlwKCkucGxhY2VTdWJtYXJpbmUoWzMsIDBdLCBcImhvcml6b250YWxcIik7XG4gICAgcGxheWVyLmdhbWVib2FyZC5wbGFjZVNoaXAoKS5wbGFjZVBhdHJvbGxlcihbNCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcblxuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoKS5wbGFjZVdhdGVyQ2FycmllcihbMCwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKCkucGxhY2VCYXR0bGVzaGlwKFsxLCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5wbGFjZVNoaXAoKS5wbGFjZURlc3Ryb3llcihbMiwgMF0sIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlci5nYW1lYm9hcmQucGxhY2VTaGlwKCkucGxhY2VTdWJtYXJpbmUoWzMsIDBdLCBcImhvcml6b250YWxcIik7XG4gICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnBsYWNlU2hpcCgpLnBsYWNlUGF0cm9sbGVyKFs0LCAwXSwgXCJob3Jpem9udGFsXCIpO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja1NoaXAgPSAoKSA9PiB7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzAsIDRdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFswLCAzXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMCwgMl0sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzAsIDFdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFswLCAwXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMSwgMF0sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzEsIDFdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFsxLCAyXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMSwgM10sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzEsIDRdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFsyLCAwXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMiwgMV0sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzIsIDJdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFsyLCAzXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMywgM10sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzMsIDJdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFszLCAxXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbMywgMF0sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzQsIDNdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICAgIHBsYXllci5zZW5kQXR0YWNrKFs0LCAyXSwgY29tcHV0ZXIpO1xuICAgIGlzR2FtZU92ZXIoKTtcbiAgICBwbGF5ZXIuc2VuZEF0dGFjayhbNCwgMV0sIGNvbXB1dGVyKTtcbiAgICBpc0dhbWVPdmVyKCk7XG4gICAgcGxheWVyLnNlbmRBdHRhY2soWzQsIDBdLCBjb21wdXRlcik7XG4gICAgaXNHYW1lT3ZlcigpO1xuICB9O1xuXG4gIGNvbnN0IGlzR2FtZU92ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHBsYXllci5nYW1lYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtjb21wdXRlci5nZXROYW1lKCl9IGlzIHRoZSB3aW5uZXIhYCk7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlci5nYW1lYm9hcmQuYWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmxvZyhgJHtwbGF5ZXIuZ2V0TmFtZSgpfSBpcyB0aGUgd2lubmVyIWApO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFsbFN1bmsoKSA9PT0gZmFsc2UgJiZcbiAgICAgIGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTdW5rKCkgPT09IGZhbHNlXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2V0VXBHYW1lLFxuICAgIHNoaXBQbGFjZW1lbnQsXG4gICAgYXR0YWNrU2hpcCxcbiAgICBwbGF5ZXIsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgeyBnYW1lQ29udHJvbGxlciB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBGYWN0b3J5XCI7XG5cbmNvbnN0IEdhbWVib2FyZCA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZUJvYXJkQXJyYXkgPSBbXTtcbiAgY29uc3Qgc2hvd0JvYXJkID0gKCkgPT4gWy4uLmdhbWVCb2FyZEFycmF5XTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCAxMDsgcm93KyspIHtcbiAgICBnYW1lQm9hcmRBcnJheVtyb3ddID0gW107XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgMTA7IGNvbCsrKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheVtyb3ddW2NvbF0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHdhdGVyQ2FycmllciA9IFNoaXAoNSwgXCJXYXRlciBDYXJyaWVyXCIpO1xuICBjb25zdCBiYXR0bGVTaGlwID0gU2hpcCg0LCBcIkJhdHRsZXNoaXBcIik7XG4gIGNvbnN0IGRlc3Ryb3llciA9IFNoaXAoMywgXCJEZXN0cm95ZXJcIik7XG4gIGNvbnN0IHN1Ym1hcmluZSA9IFNoaXAoMywgXCJTdWJtYXJpbmVcIik7XG4gIGNvbnN0IHBhdHJvbGxlciA9IFNoaXAoMiwgXCJQYXRyb2xsZXJcIik7XG5cbiAgY29uc3QgYWxsU2hpcHMgPSBbXTtcbiAgYWxsU2hpcHMucHVzaCh3YXRlckNhcnJpZXIsIGJhdHRsZVNoaXAsIGRlc3Ryb3llciwgc3VibWFyaW5lLCBwYXRyb2xsZXIpO1xuXG4gIC8vQ2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBTaGlwIEZpdHMuXG4gIGNvbnN0IHNoaXBGaXQgPSAoY2VsbCwgZGlyZWN0aW9uLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgcm93ID49IDAgJiZcbiAgICAgICAgY29sdW1uID49IDAgJiZcbiAgICAgICAgY29sdW1uICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmRBcnJheS5sZW5ndGhcbiAgICAgICkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGNvbHVtbiA+PSAwICYmXG4gICAgICAgIHJvdyA+PSAwICYmXG4gICAgICAgIHJvdyArIHNoaXBMZW5ndGggLSAxIDwgZ2FtZUJvYXJkQXJyYXkubGVuZ3RoXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIC8vQ2hlY2tpbmcgdG8gc2VlIGlmIHRoZSBTaGlwIGV4aXN0cyBpbiB0aGF0IGxvY2F0aW9uIG9yIG5vdC5cbiAgY29uc3QgcG9zaXRpb25FbXB0eSA9IChjZWxsLCBkaXJlY3Rpb24sIHNoaXBMZW5ndGgpID0+IHtcbiAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICBsZXQgY2hlY2tJZkVtcHR5ID0gdHJ1ZTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcm93ID49IDAgJiZcbiAgICAgICAgICBjb2x1bW4gPj0gMCAmJlxuICAgICAgICAgIGNvbHVtbiArIHNoaXBMZW5ndGggLSAxIDwgZ2FtZUJvYXJkQXJyYXkubGVuZ3RoICYmXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyYXlbcm93XVtjb2x1bW4gKyBpXSAhPT0gbnVsbFxuICAgICAgICApIHtcbiAgICAgICAgICBjaGVja0lmRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb2x1bW4gPj0gMCAmJlxuICAgICAgICAgIHJvdyA+PSAwICYmXG4gICAgICAgICAgcm93ICsgc2hpcExlbmd0aCAtIDEgPCBnYW1lQm9hcmRBcnJheS5sZW5ndGggJiZcbiAgICAgICAgICBnYW1lQm9hcmRBcnJheVtyb3cgKyBpXVtjb2x1bW5dICE9PSBudWxsXG4gICAgICAgICkge1xuICAgICAgICAgIGNoZWNrSWZFbXB0eSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGVja0lmRW1wdHk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VIb3Jpem9udGFsU2hpcHMgPSAoY2VsbCwgc2hpcCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgaWYgKCFzaGlwRml0KGNlbGwsIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKCFwb3NpdGlvbkVtcHR5KGNlbGwsIGRpcmVjdGlvbiwgc2hpcC5sZW5ndGgpKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG4gICAgICBnYW1lQm9hcmRBcnJheVtjZWxsWzBdXVtjZWxsWzFdICsgaV0gPSBzaGlwO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIC8vICB4IGF4aXMgaXMgYSBjb2x1bW4gc2hpZnQsIHkgYXhpcyBpcyBhIHJvdyBzaGlmdC5cbiAgY29uc3QgcGxhY2VWZXJ0aWNhbFNoaXBzID0gKGNlbGwsIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgIGlmICghc2hpcEZpdChjZWxsLCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGlmICghcG9zaXRpb25FbXB0eShjZWxsLCBkaXJlY3Rpb24sIHNoaXAubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcC5sZW5ndGg7IGkrKykge1xuICAgICAgZ2FtZUJvYXJkQXJyYXlbY2VsbFswXSArIGldW2NlbGxbMV1dID0gc2hpcDtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25PZlNoaXBzID0gKGNlbGwsIHNoaXAsIGRpcmVjdGlvbikgPT4ge1xuICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IFwidmVydGljYWxcIikge1xuICAgICAgcmV0dXJuIHBsYWNlVmVydGljYWxTaGlwcyhbcm93LCBjb2x1bW5dLCBzaGlwLCBkaXJlY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgcmV0dXJuIHBsYWNlSG9yaXpvbnRhbFNoaXBzKFtyb3csIGNvbHVtbl0sIHNoaXAsIGRpcmVjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY2VsbCkgPT4ge1xuICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuXG4gICAgaWYgKGdhbWVCb2FyZEFycmF5W3Jvd11bY29sdW1uXSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIChnYW1lQm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gPSBcIm1pc3NcIik7XG4gICAgfSBlbHNlIGlmIChnYW1lQm9hcmRBcnJheVtyb3ddW2NvbHVtbl0gIT09IG51bGwpIHtcbiAgICAgIGdhbWVCb2FyZEFycmF5W3Jvd11bY29sdW1uXS5oaXQoKTtcbiAgICAgIGFsbFN1bmsoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBhcnJheVN1bmtTdGF0dXMgPSAoZWFjaFNoaXApID0+IGVhY2hTaGlwLmlzU3VuaygpO1xuICAgIHJldHVybiBhbGxTaGlwcy5ldmVyeShhcnJheVN1bmtTdGF0dXMpO1xuICB9O1xuXG4gIC8vUGxhY2luZyBlYWNoIHNoaXAgaW4gdGhlaXIgcmVzcGVjdGl2ZSBwb3NpdGlvbnNcbiAgY29uc3QgcGxhY2VTaGlwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYWNlV2F0ZXJDYXJyaWVyID0gKGNlbGwsIGRpcmVjdGlvbikgPT4ge1xuICAgICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICAgIHJldHVybiBkaXJlY3Rpb25PZlNoaXBzKFtyb3csIGNvbHVtbl0sIHdhdGVyQ2FycmllciwgZGlyZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VEZXN0cm95ZXIgPSAoY2VsbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbk9mU2hpcHMoW3JvdywgY29sdW1uXSwgZGVzdHJveWVyLCBkaXJlY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZUJhdHRsZXNoaXAgPSAoY2VsbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbk9mU2hpcHMoW3JvdywgY29sdW1uXSwgYmF0dGxlU2hpcCwgZGlyZWN0aW9uKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2VTdWJtYXJpbmUgPSAoY2VsbCwgZGlyZWN0aW9uKSA9PiB7XG4gICAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgICAgcmV0dXJuIGRpcmVjdGlvbk9mU2hpcHMoW3JvdywgY29sdW1uXSwgc3VibWFyaW5lLCBkaXJlY3Rpb24pO1xuICAgIH07XG5cbiAgICBjb25zdCBwbGFjZVBhdHJvbGxlciA9IChjZWxsLCBkaXJlY3Rpb24pID0+IHtcbiAgICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgICByZXR1cm4gZGlyZWN0aW9uT2ZTaGlwcyhbcm93LCBjb2x1bW5dLCBwYXRyb2xsZXIsIGRpcmVjdGlvbik7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBwbGFjZVdhdGVyQ2FycmllcixcbiAgICAgIHBsYWNlRGVzdHJveWVyLFxuICAgICAgcGxhY2VCYXR0bGVzaGlwLFxuICAgICAgcGxhY2VTdWJtYXJpbmUsXG4gICAgICBwbGFjZVBhdHJvbGxlcixcbiAgICB9O1xuICB9O1xuICByZXR1cm4ge1xuICAgIHBsYWNlU2hpcCxcbiAgICBnYW1lQm9hcmRBcnJheSxcbiAgICBzaG93Qm9hcmQsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBzaGlwRml0LFxuICAgIHBvc2l0aW9uRW1wdHksXG4gICAgcGxhY2VIb3Jpem9udGFsU2hpcHMsXG4gICAgcGxhY2VWZXJ0aWNhbFNoaXBzLFxuICAgIGRpcmVjdGlvbk9mU2hpcHMsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhbGxTdW5rLFxuICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9HYW1lYm9hcmRGYWN0b3J5XCI7XG5cbmNvbnN0IFBsYXllciA9IChuYW1lLCBwbGF5ZXJOdW0pID0+IHtcbiAgY29uc3QgZ2V0TmFtZSA9ICgpID0+IG5hbWU7XG4gIGNvbnN0IGdldFBsYXllck51bSA9ICgpID0+IHBsYXllck51bTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgY29uc3QgYXR0YWNrUmVjZWl2ZWQgPSAoY2VsbCkgPT4ge1xuICAgIGxldCByb3cgPSBjZWxsWzBdO1xuICAgIGxldCBjb2x1bW4gPSBjZWxsWzFdO1xuICAgIGlmIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93LCBjb2x1bW5dKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IHNlbmRBdHRhY2sgPSAoY2VsbCwgcGxheWVyKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgcmV0dXJuIHBsYXllci5hdHRhY2tSZWNlaXZlZChbcm93LCBjb2x1bW5dKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHNlbmRBdHRhY2ssXG4gICAgZ2V0TmFtZSxcbiAgICBnZXRQbGF5ZXJOdW0sXG4gICAgZ2FtZWJvYXJkLFxuICAgIGF0dGFja1JlY2VpdmVkLFxuICB9O1xufTtcblxuY29uc3QgQ29tcHV0ZXJQbGF5ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZ2FtZWJvYXJkLCBnZXROYW1lLCBnZXRQbGF5ZXJOdW0gfSA9IFBsYXllcihcIkNvbXB1dGVyXCIsIDIpOyAvL0luaGVyaXRpbmcgdGhlc2UgMyBtZXRob2RzXG5cbiAgY29uc3QgYXR0YWNrZWRQb3NpdGlvbnMgPSBbXTsgLy9BcnJheSBvZiB0aGUgYXR0YWNrZWQgcG9zaXRpb25zXG4gIGNvbnN0IGdldEF0dGFja1Bvc2l0aW9ucyA9ICgpID0+IGF0dGFja2VkUG9zaXRpb25zOyAvL0tlZXBpbmcgaXQgZW5jYXBzdWxhdGVkLlxuICBjb25zdCBhZGRBdHRhY2tlZFBvc2l0aW9ucyA9IChjb29yZGluYXRlcykgPT4ge1xuICAgIGxldCByb3cgPSBjb29yZGluYXRlc1swXTtcbiAgICBsZXQgY29sdW1uID0gY29vcmRpbmF0ZXNbMV07XG4gICAgYXR0YWNrZWRQb3NpdGlvbnMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgfTtcblxuICBjb25zdCBnZXRSYW5kb21Qb3NpdGlvbiA9ICgpID0+IHtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2x1bW47XG4gICAgZG8ge1xuICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH0gd2hpbGUgKGF0dGFja2VkUG9zaXRpb25zLmluY2x1ZGVzKFtyb3csIGNvbHVtbl0pKTtcbiAgICBhdHRhY2tlZFBvc2l0aW9ucy5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgIHJldHVybiByb3csIGNvbHVtbjtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tSZWNlaXZlZCA9IChjZWxsKSA9PiB7XG4gICAgbGV0IHJvdyA9IGNlbGxbMF07XG4gICAgbGV0IGNvbHVtbiA9IGNlbGxbMV07XG4gICAgaWYgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3csIGNvbHVtbl0pKSByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3Qgc2VuZEF0dGFjayA9IChjZWxsLCBwbGF5ZXIpID0+IHtcbiAgICBsZXQgcm93ID0gY2VsbFswXTtcbiAgICBsZXQgY29sdW1uID0gY2VsbFsxXTtcbiAgICByZXR1cm4gcGxheWVyLmF0dGFja1JlY2VpdmVkKFtyb3csIGNvbHVtbl0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgc2VuZEF0dGFjayxcbiAgICBnYW1lYm9hcmQsXG4gICAgZ2V0TmFtZSxcbiAgICBnZXRQbGF5ZXJOdW0sXG4gICAgZ2V0QXR0YWNrUG9zaXRpb25zLFxuICAgIGdldFJhbmRvbVBvc2l0aW9uLFxuICAgIGFkZEF0dGFja2VkUG9zaXRpb25zLFxuICAgIGF0dGFja1JlY2VpdmVkLFxuICB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyLCBDb21wdXRlclBsYXllciB9O1xuIiwiZnVuY3Rpb24gU2hpcChsZW5ndGgsIG5hbWUpIHtcbiAgY29uc3Qgc2hpcE5hbWUgPSBuYW1lO1xuICBjb25zdCBfc2hpcEFycmF5ID0gQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpO1xuICBjb25zdCBnZXRTaGlwQXJyYXkgPSAoKSA9PiBbLi4uX3NoaXBBcnJheV07XG5cbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIF9zaGlwQXJyYXkuc3BsaWNlKDAsIDEpO1xuICAgIHJldHVybiBfc2hpcEFycmF5O1xuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICBpZiAoX3NoaXBBcnJheS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzaGlwTmFtZSxcbiAgICBnZXRTaGlwQXJyYXksXG4gICAgbGVuZ3RoLFxuICAgIGhpdCxcbiAgICBpc1N1bmssXG4gIH07XG59XG5cbmV4cG9ydCB7IFNoaXAgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIGltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyByZW5kZXJQbGF5ZXJCb2FyZCB9IGZyb20gXCIuL0RPTVwiO1xuaW1wb3J0IHsgZ2FtZUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9HYW1lXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5yZW5kZXJQbGF5ZXJCb2FyZCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9