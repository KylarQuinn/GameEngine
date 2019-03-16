import { Injectable } from "@angular/core";
import { GameTile } from "./game-tile/game-tile";
import { GameConstants } from '../game-constants/game-constants.constants';

@Injectable()
export class GameBoardService {

  private activeGameBoard: Array<GameTile>;

  constructor() {
    this.activeGameBoard = new Array<GameTile>(GameConstants.TOTAL_ROWS * GameConstants.TOTAL_COLUMNS);
  }

  public setGameBoard(inputBoard: Array<GameTile>) {
    this.activeGameBoard = inputBoard;
  }

}