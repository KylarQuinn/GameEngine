import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';

export class GameBoard {
  public gameBoard: Array<GameTile>;
  private userPosition: number;
  private movementAmount: number;

  constructor() {
    this.gameBoard = new Array<GameTile>(GameConstants.TOTAL_COLUMNS * GameConstants.TOTAL_ROWS);
    for (let x = 0; x < GameConstants.TOTAL_ROWS; x++) {
      for (let y = 0; y < GameConstants.TOTAL_COLUMNS; y++) {
        this.gameBoard[x * GameConstants.TOTAL_COLUMNS + y] = new GameTile(x, y, true);
      }

    }
    this.movementAmount = 3;
    this.setUserToken(GameConstants.TalonLocation);
  }

  /**
   * setUserToken
   */
  public setUserToken(destinationLocation: number) {
    this.userPosition = destinationLocation;
  }

  /**
   * commitValidMove
   */
  public commitValidDownMove(): number {
    const currentTile = this.gameBoard[this.userPosition];
    if (currentTile.rowIndex !== GameConstants.TOTAL_ROWS) {
      this.setUserToken(this.userPosition + GameConstants.TOTAL_COLUMNS);
      this.movementAmount -= 1;
    }
    return this.movementAmount;
  }

  /**
   * commitValidMove
   */
  public commitValidUpMove(): number {
    const currentTile = this.gameBoard[this.userPosition];
    if (currentTile.rowIndex !== 0) {
      this.setUserToken(this.userPosition - GameConstants.TOTAL_COLUMNS);
      this.movementAmount -= 1;
    }
    return this.movementAmount;
  }

  /**
   * commitValidMove
   */
  public commitValidLeftMove(): number {
    const currentTile = this.gameBoard[this.userPosition];
    if (currentTile.colIndex !== 0) {
      this.setUserToken(this.userPosition - 1);
      this.movementAmount -= 1;
    }
    return this.movementAmount;
  }

  /**
   * commitValidMove
   */
  public commitValidRightMove(): number {
    const currentTile = this.gameBoard[this.userPosition];
    if (currentTile.rowIndex !== GameConstants.TOTAL_COLUMNS) {
      this.setUserToken(this.userPosition + 1);
      this.movementAmount -= 1;
    }
    return this.movementAmount;
  }

  /**
   * getUserPosition
   */
  public getUserPosition(): number {
    return this.userPosition;
  }

  /**
   * getMovementAmount
   */
  public getMovementAmount(movement: number): number {
    return this.commitValidMove(movement);
  }

  public getTileType(rowIndex: number, colIndex: number): string {
    return this.gameBoard[rowIndex * GameConstants.TOTAL_COLUMNS + colIndex].getTileType(rowIndex, colIndex);
  }
}
