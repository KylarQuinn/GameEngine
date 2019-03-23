import { Injectable } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { GameBoard } from './game-board';
import { Subject, Observable } from 'rxjs';
import { UserTokenComponent } from './user-token/user-token.component';
import { delay } from 'q';

@Injectable()
export class GameBoardService {
  private displayText: string;
  private activeGameBoard: GameBoard;
  private movesToCommit: Array<number>;
  private userMovementInfo: any;
  private userTokenMovementSource: Subject<void>;
  public movementEnd$: Observable<void>;

  constructor() {
    this.activeGameBoard = new GameBoard();
    this.movesToCommit = [GameConstants.TalonLocation];

    this.userTokenMovementSource = new Subject<void>();
    this.movementEnd$ = this.userTokenMovementSource.asObservable();
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
    return this.activeGameBoard.getCurrentMovesAllowed();
  }

  /**
   * commitMoves
   */
  public commitMoves(): number {
    // let currentTile: GameTile;
    for (let x of this.movesToCommit) {
      this.activeGameBoard.setUserToken(x);
    }

    this.movesToCommit = [this.activeGameBoard.getUserPosition()];
    this.userTokenMovementSource.next();
    return this.activeGameBoard.getCurrentMovesAllowed();
  }

  public getMoves(): Array<number> {
    return this.movesToCommit;
  }

  /**
   * Returns the movesToCommit array.
   */
  public getUserMovementInfo(): Array<number> {
    return this.movesToCommit;
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



    // testing the remove from list portion

// Misusing currentMovementAmount.  Rename


    let currentMovesAllowed: number = this.activeGameBoard.getCurrentMovesAllowed();
    const userPosition = this.activeGameBoard.getUserPosition();
    const currentTile = this.activeGameBoard.gameBoard[userPosition];
    const northTile = userPosition - 25;
    const willUndoPreviousMove = this.movesToCommit[this.movesToCommit.length - 1];
    if (willUndoPreviousMove === northTile) {
      this.movesToCommit.splice(currentMovesAllowed, 1);
      this.activeGameBoard.setUserToken(northTile);
    } else {
      currentMovesAllowed = this.addUpMove(currentMovesAllowed, currentTile, userPosition);
    }
    return currentMovesAllowed;
  }

  private addUpMove(currentMovesAllowed: number, currentTile: GameTile, userPosition: number) {
    if (this.movesToCommit.length < currentMovesAllowed) {
      if (currentTile.rowIndex !== 0) {
        const newPosition = userPosition - GameConstants.TOTAL_COLUMNS;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);
        this.userTokenMovementSource.next();
        this.activeGameBoard.commitValidMove();
        currentMovesAllowed -= 1;
      }
    }
    return currentMovesAllowed;
  }

  public onArrowDown(): number {
    let currentMovesAllowed: number = this.activeGameBoard.getCurrentMovesAllowed();
    if (this.movesToCommit.length < currentMovesAllowed) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.rowIndex !== GameConstants.TOTAL_ROWS + GameConstants.TOTAL_COLUMNS) {
        const newPosition = userPosition - GameConstants.TOTAL_COLUMNS;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);

        this.userTokenMovementSource.next();
        this.activeGameBoard.commitValidMove();
        currentMovesAllowed -= 1;
      }
    }
    return currentMovesAllowed;
  }

  public onArrowRight(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovesAllowed();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.colIndex !== GameConstants.TOTAL_COLUMNS - 1) {
        const newPosition = userPosition + 1;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);

        this.userTokenMovementSource.next();
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }

  public onArrowLeft(): number {
    let currentMovementAmount: number = this.activeGameBoard.getCurrentMovesAllowed();
    if (this.movesToCommit.length < currentMovementAmount) {
      const userPosition = this.activeGameBoard.getUserPosition();
      const currentTile = this.activeGameBoard.gameBoard[userPosition];
      if (currentTile.colIndex !== 0) {
        const newPosition = userPosition - 1;
        this.movesToCommit.push(newPosition);
        this.activeGameBoard.setUserToken(newPosition);

        this.userTokenMovementSource.next();
        this.activeGameBoard.commitValidMove();
        currentMovementAmount -= 1;
      }
    }
    return currentMovementAmount;
  }
}
