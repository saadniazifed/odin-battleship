import { ComputerPlayer, Player } from "./playerFactory";

let player = Player("John", 1);
let computer = ComputerPlayer("Computer", 2);

player.sendAttack([0, 0], computer);

console.log(computer.gameboard.gameBoardArray);
