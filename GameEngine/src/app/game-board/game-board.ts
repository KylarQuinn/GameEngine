import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';

export class GameBoard {
  public gameBoard: Array<GameTile>;
  private userPosition: number;

  constructor() {
    this.gameBoard = new Array<GameTile>(GameConstants.TOTAL_COLUMNS * GameConstants.TOTAL_ROWS);
    for (let x = 0; x < GameConstants.TOTAL_ROWS; x++) {
      for (let y = 0; y < GameConstants.TOTAL_COLUMNS; y++) {
        this.gameBoard.push(new GameTile(x, y, true));
      }

    }
    this.setUserToken(GameConstants.TalonLocation, null);
  }

  /**
   * setUserToken
   */
  public setUserToken(destinationLocation: number, movementAmount: number) {
    if (movementAmount !== null) {
      this.validateMovement(destinationLocation, movementAmount);
    } else { this.userPosition = destinationLocation; }
    return;
  }

  /**
   * validateMovement
   */
  public validateMovement(destinationLocation: number, movementAmount: number) {

  }
}
