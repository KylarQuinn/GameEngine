import { Injectable } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { GameBoard } from './game-board';

@Injectable()
export class GameBoardService {
  private displayText: string;
  private activeGameBoard: GameBoard;

  constructor() {
    this.activeGameBoard = new GameBoard();
  }

  // Used when I figure out a save system
  public setGameBoard(inputBoard: GameBoard): void {
    this.activeGameBoard = inputBoard;
  }

  public getGameBoard(): GameBoard {
    return this.activeGameBoard;
  }

  public makeMove(movement: Array<number>): number {
    let currentGameTile: GameTile;
    let endLocation: number;
    let move: number;
    for (move of movement) {
      currentGameTile = this.activeGameBoard.gameBoard[move];
      if (currentGameTile.getLeaveEvent()) {
        this.displayText = currentGameTile.getDisplayText();
        endLocation = currentGameTile.tileNumber;
      }
    }
    return endLocation;
  }

  /**
   * getTileType
   */
  public getTileType(rowIndex: number, colIndex: number): string {
    return this.activeGameBoard.gameBoard[rowIndex * GameConstants.TOTAL_COLUMNS + colIndex].getTileType(rowIndex, colIndex);
  }

}
