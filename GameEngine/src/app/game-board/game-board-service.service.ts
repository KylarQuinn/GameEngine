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

  /**
   * getMovementAmount
   */
  public commitMoves(): number {
    return this.activeGameBoard.getMovementAmount();
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
    let tileType = this.activeGameBoard.getTileType(rowIndex, colIndex);
    if (rowIndex * GameConstants.TOTAL_COLUMNS + colIndex === this.activeGameBoard.getUserPosition()) {
      tileType = 'UserToken';
    }
    return tileType;
  }

  public onArrowUp(): number {
    return this.activeGameBoard.commitValidUpMove();
  }

  public onArrowDown(): number {
    return this.activeGameBoard.commitValidDownMove();
  }

  public onArrowRight(): number {
    return this.activeGameBoard.commitValidRightMove();
  }

  public onArrowLeft(): number {
    return this.activeGameBoard.getUserPosition();
  }
}
