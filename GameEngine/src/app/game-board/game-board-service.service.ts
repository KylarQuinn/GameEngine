import { Injectable } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { GameBoard } from './game-board';
import { Subject, Observable } from 'rxjs';
import { UserTokenComponent } from './user-token/user-token.component';

@Injectable()
export class GameBoardService {
  private displayText: string;
  private activeGameBoard: GameBoard;
  private movesToCommit: Array<number>;
  private userMovementInfo: any;

  constructor() {
    this.activeGameBoard = new GameBoard();
    this.movesToCommit = new Array<number>();
  }

  // Used when I figure out a save system
  public setGameBoard(inputBoard: GameBoard): void {
    this.activeGameBoard = inputBoard;
  }

  public getGameBoard(): GameBoard {
    return this.activeGameBoard;
  }

  /**
   * getMovesToCommit
   */
  public getMovesToCommit() {
    return this.movesToCommit;
  }

  /**
   * getCurrentMovementAmount
   */
  public getCurrentMovementAmount(): number {
    return this.activeGameBoard.getCurrentMovementAmount();
  }

  /**
   * commitMoves
   */
  public commitMoves(): number {
    const currentUserTile = this.activeGameBoard[this.activeGameBoard.getUserPosition()];
    this.userMovementInfo = {
      rowIndex: currentUserTile.rowIndex,
      colIndex: currentUserTile.colIndex,
      movesToCommit: this.movesToCommit
    };
    return this.activeGameBoard.getCurrentMovementAmount();

  }

  public getMoves(): Array<number> {
    return this.movesToCommit;
  }

  /**
   * getUserMovementInfo
   */
  public getUserMovementInfo(): any {
    return this.userMovementInfo;
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

  // Try to refactor these into common methods
  public onArrowUp(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovementAmount();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.rowIndex !== 0) {
        const newPosition = userPosition - GameConstants.TOTAL_COLUMNS;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }

  public onArrowDown(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovementAmount();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.rowIndex !== GameConstants.TOTAL_ROWS + GameConstants.TOTAL_COLUMNS) {
        const newPosition = userPosition - GameConstants.TOTAL_COLUMNS;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }

  public onArrowRight(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovementAmount();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.colIndex !== GameConstants.TOTAL_COLUMNS - 1) {
        const newPosition = userPosition + 1;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }

  public onArrowLeft(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovementAmount();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.colIndex !== 0) {
        const newPosition = userPosition - 1;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }
}
