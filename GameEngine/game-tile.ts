import { GameConstants } from '../../constants/game-constants.constants';

export class GameTile {
  public tileNumber: number;

  constructor(rowIndex: number, columnIndex: number) {
    this.tileNumber = rowIndex * GameConstants.TOTAL_COLUMNS + columnIndex;
  }
}
