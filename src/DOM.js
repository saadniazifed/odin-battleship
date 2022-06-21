import { gameController } from "./Game";

const green = "#00ff0055";
const red = "#ff000055";
const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

function createElement(elementType, classes, otherAttributes) {
  const element = document.createElement(elementType);
  element.classList.add(...classes);
  for (let [key, value] of Object.entries(otherAttributes)) {
    element.setAttribute(key, value);
  }
  return element;
}
const renderPlayerBoard = () => {
  let board = gameController.player.gameboard.showBoard();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = createElement("div", ["grid"], {
        "data-row": row,
        "data-col": col,
      });
      playerBoard.append(board[row][col]);
    }
  }
};

const renderComputerBoard = () => {
  let boardTwo = gameController.computer.gameboard.showBoard();
  for (let row = 0; row < boardTwo.length; row++) {
    for (let col = 0; col < boardTwo[row].length; col++) {
      boardTwo[row][col] = createElement("div", ["grid"], {
        "data-row": row,
        "data-col": col,
      });
      computerBoard.append(boardTwo[row][col]);
    }
  }
};

const mouseOverEvent = () => {
  playerBoard.addEventListener("mouseover", (e) => {
    console.table(e.target.dataset);
  });
};

export { renderPlayerBoard, renderComputerBoard, mouseOverEvent };
