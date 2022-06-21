import "./style.css";
import { mouseOverEvent, renderComputerBoard, renderPlayerBoard } from "./DOM";
import { gameController } from "./Game";

renderPlayerBoard();
renderComputerBoard();
mouseOverEvent();
