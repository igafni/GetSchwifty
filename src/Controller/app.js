import { Game } from './components/game.js';
import {Timer} from "../UtilsFunctions/Timer.js";

var timer = new Timer();
(() => {
  function init() {
    addGame();
    addNewBoardButton();
    addTime();
    addMoves();
  }

  function addGame() {
    document.querySelector('#GetSchwifty-puzzle .moves-container').textContent = 'Moves: 0';
    timer.clearUp();
    const game = new Game(timer);
    const puzzleContainer = document.querySelector('#GetSchwifty-puzzle .puzzles-container');
    puzzleContainer.innerHTML = '';
    puzzleContainer.appendChild(game.element);
  }

  function addNewBoardButton() {
    const addBoardBtn = document.createElement('button');
    addBoardBtn.className = 'add-board-btn';
    addBoardBtn.textContent = 'New Game';
    addBoardBtn.addEventListener('click', addGame);
    const buttonContainer = document.querySelector('#GetSchwifty-puzzle .button-container');
    buttonContainer.appendChild(addBoardBtn);
  }
  function addTime() {
    const addBoardTime = document.createElement('div');
    addBoardTime.className = 'add-time';
    const timeContainer = document.querySelector('#GetSchwifty-puzzle .time-container');
    timeContainer.appendChild(addBoardTime);
  }
  function addMoves() {
    const addBoardTime = document.createElement('div');
    addBoardTime.className = 'add-moves';
    const movesContainer = document.querySelector('#GetSchwifty-puzzle .moves-container');
    movesContainer.appendChild(addBoardTime);
  }

  init();
})();
