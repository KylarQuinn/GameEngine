import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';

export class GameBoard {
  public gameBoard: Array<GameTile>;
  private userPosition: number;
  private movementAmount: number;
  private currentMovementAmount: number;

  constructor() {
    this.gameBoard = new Array<GameTile>(GameConstants.TOTAL_COLUMNS * GameConstants.TOTAL_ROWS);
    for (let x = 0; x < GameConstants.TOTAL_ROWS; x++) {
      for (let y = 0; y < GameConstants.TOTAL_COLUMNS; y++) {
        this.gameBoard[x * GameConstants.TOTAL_COLUMNS + y] = new GameTile(x, y, true);
      }

    }
    this.movementAmount = this.currentMovementAmount = 3;
    this.setUserToken(GameConstants.TalonLocation);
  }

  /**
   * commitValidMove
   */
  public commitValidMove() {
    this.movementAmount -= 1;
  }

  /**
   * setUserToken
   */
  public setUserToken(destinationLocation: number) {
    this.userPosition = destinationLocation;
  }
  /**
   * getUserPosition
   */
  public getUserPosition(): number {
    return this.userPosition;
  }

  /**
   * getCurrentMovementAmount
   */
  public getCurrentMovementAmount() {
    return this.currentMovementAmount;
  }

  public getTileType(rowIndex: number, colIndex: number): string {
    return this.gameBoard[rowIndex * GameConstants.TOTAL_COLUMNS + colIndex].getTileType(rowIndex, colIndex);
  }
}
