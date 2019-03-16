import { GameConstants } from './game-constants.constants';

export class Road {
  // Todo:  Think about reformatting.
  public static SouthRoad: Array<number> = [
    5000, 4975, 4975, 4976, 4977, 4978, 4979, 4980, 4981, 4982, 4983, 4984, 4985, 4986, 4987
  ];

  public static contains(road: Array<number>, rowIndex: number, columnIndex: number): boolean {
    return road.includes(rowIndex * GameConstants.TOTAL_COLUMNS + columnIndex);
  }

  constructor() { }
}
