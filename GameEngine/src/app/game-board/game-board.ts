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
    this.setUserToken(GameConstants.TalonLocation, null);
  }

  /**
   * setUserToken
   */
  public setUserToken(destinationLocation: number, movementAmount: number) {
    if (movementAmount !== null) {
      this.validateMovement(destinationLocation, movementAmount);
      this.userPosition = destinationLocation;
    } else { this.userPosition = destinationLocation; }
    return;
  }

  /**
   * validateMovement
   */
  public validateMovement(destinationLocation: number, movementAmount: number) {

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
  public getMovementAmount(): number {
    return this.movementAmount;
  }

  public getTileType(rowIndex: number, colIndex: number): string {
    return this.gameBoard[rowIndex * GameConstants.TOTAL_COLUMNS + colIndex].getTileType(rowIndex, colIndex);
  }
}
