import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../constants/game-constants.constants';

export class Road {
  public static SouthRoad: Array<GameTile> = [
    new GameTile(GameConstants.TOTAL_ROWS, 0),
    new GameTile(GameConstants.TOTAL_ROWS - 1, 0),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 0),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 1),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 2),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 3),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 4),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 5),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 6),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 7),
    new GameTile(GameConstants.TOTAL_ROWS - 2, 8)
  ];
  public road: Array<GameTile>;

  constructor() { }
}

export class RoadDefinition implements Road {
  public road: Array<GameTile>;

  constructor(road: Array<GameTile>) {
    this.road = road;
  }

  public contains(rowIndex: number, columnIndex: number): boolean {
    let found = false;
    this.road.forEach(tile => {
      if (rowIndex * GameConstants.TOTAL_COLUMNS + columnIndex === tile.tileNumber) {
        found = true;
      }
    });

    return found;
  }
}
