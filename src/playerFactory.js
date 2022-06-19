import { Gameboard } from "./GameboardFactory";

const Player = (name, playerNum) => {
  const getName = () => name;
  const getPlayerNum = () => playerNum;
  const gameboard = Gameboard();

  const attackReceived = (cell) => {
    let row = cell[0];
    let column = cell[1];
    if (gameboard.receiveAttack([row, column])) return true;
    return false;
  };

  const sendAttack = (cell, player) => {
    let row = cell[0];
    let column = cell[1];
    player.receiveAttack([row, column]);
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
    player.receiveAttack([row, column]);
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

export { Player, ComputerPlayer };
