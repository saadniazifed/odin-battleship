import { gameController } from "./Game";
const playerBoard = document.querySelector(".playerBoard");
const computerBoard = document.querySelector(".computerBoard");

const createElement = (elementType, className) => {
  const htmlElement = document.createElement(elementType);
  htmlElement.classList.add(className);
  return htmlElement;
};

const renderPlayerBoard = () => {
  let board = gameController.player.gameboard.showBoard();
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      board[row][col] = createElement("div", "grid");
      playerBoard.append(board[row][col]);
    }
  }
};

const renderComputerBoard = () => {
  let boardTwo = gameController.computer.gameboard.showBoard();
  for (let row = 0; row < boardTwo.length; row++) {
    for (let col = 0; col < boardTwo[row].length; col++) {
      boardTwo[row][col] = createElement("div", "grid");
      computerBoard.append(boardTwo[row][col]);
    }
  }
};

export { renderPlayerBoard, renderComputerBoard };
