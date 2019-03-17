import { GameConstants } from './game-constants.constants';

export class Road {
  // Todo:  Think about reformatting.
  public static SouthRoad: Array<number> = [
    4975, 4950, 4951, 4952, 4953, 4954, 4955, 4956, 4957, 4958, 4959, 4960, 4961, 4962
  ];

  public static contains(road: Array<number>, rowIndex: number, columnIndex: number): boolean {
    return road.includes(rowIndex * GameConstants.TOTAL_COLUMNS + columnIndex);
  }

  constructor() { }
}
