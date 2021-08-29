import { Board } from '../../Model/components/board.js';
import { ConfigInput } from '../../Model/components/config-input.js';
import {CheckIfNewRecord} from "../../View/AddPlayer.js";

export class Game {
  constructor(timer) {
    this.gameContainer = document.createElement('div');
    this.gameContainer.className = 'game-container';
    // default vals
    const boardSize = 3;
    const tileSize = 100;
    document.querySelector('#GetSchwifty-puzzle .time-container').textContent = `Time: ${0}`;
     this.timer = timer;
     this.timer.start();
    this.addInputField('Board size (no. rows/cols)', boardSize, 2, (value) => this.onBoardSizeChange(value));
    this.addInputField('Tile size (px)', tileSize, 25, (value) => this.onTileSizeChange(value));
    this.addWinMessageEl('WINNER!!');

    this.board = new Board({
      boardSize,
      tileSize,
      onGameWin: () => this.onGameWin()
    });
    this.gameContainer.appendChild(this.board.element);
  }

  addInputField(label, defaultVal, minVal, onInputChange) {
    const input = new ConfigInput(label, defaultVal, minVal, (value) => onInputChange(value));
    this.gameContainer.appendChild(input.element);
  }

  addWinMessageEl(winText) {
    this.winMessageEl = document.createElement('div');
    this.winMessageEl.className = 'winner-message';
    this.winMessageEl.innerHTML = `<p>${winText}</p>`;
    this.gameContainer.appendChild(this.winMessageEl);
  }

  onBoardSizeChange(value) {
    this.timer.clearUp();
    this.board.countMoves=0;
    document.querySelector('#GetSchwifty-puzzle .moves-container').textContent = `Moves: ${this.board.countMoves}`;
    this.board.setBoardSize(value);
    this.timer.start();
  }

  onTileSizeChange(value) {
    this.board.setTileSize(value);
  }

  onGameWin() {
    this.gameContainer.classList.add('won');
    CheckIfNewRecord(this.board.countMoves.toString(),this.timer.count.toString(),this.board.boardSize.toString());
    this.timer.clearUp();
  }

  get element() {
    return this.gameContainer;
  }
}
