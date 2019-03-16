import { GameConstants } from '../../game-constants/game-constants.constants';
import { Road } from 'src/app/game-constants/road-definition.constants';

export class GameTile {
  public tileNumber: number;
  private leaveEvent: boolean;
  private displayText: string;
  private tileType: string;

  constructor(rowIndex: number, columnIndex: number, randomTile: boolean) {
    this.tileNumber = rowIndex * GameConstants.TOTAL_COLUMNS + columnIndex;
    if (this.tileNumber === 2) {
      this.leaveEvent = true;
    }
  }

  /**
   * getLeaveEvent
   */
  public getLeaveEvent(): boolean {
    return this.leaveEvent;
  }

  /**
   * getDisplayText
   */
  public getDisplayText() {
    return this.displayText;
  }

  getTileType(rowIndex: number, colIndex: number): string {
    let tileType = 'LandTile';
    if (this.isSeaTile(rowIndex, colIndex)) {
      tileType = 'SeaTile';
    }
    if (Road.contains(Road.SouthRoad, rowIndex, colIndex)) {
      tileType = 'RoadTile';
    }
    return tileType;
  }

  private isSeaTile(rowIndex: number, colIndex: number): boolean {
    return rowIndex > 65 && 75 > rowIndex && (10 > colIndex || colIndex > 12);
  }
}
