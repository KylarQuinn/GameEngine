import { Component, OnInit } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { RoadDefinition, Road } from '../game-constants/road-definition.constants';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public columns: Array<GameTile> = new Array(GameConstants.TOTAL_COLUMNS);
  public rows: Array<GameTile> = new Array(GameConstants.TOTAL_ROWS);
  private road: RoadDefinition;

  constructor() {
    this.road = new RoadDefinition(Road.SouthRoad);
  }

  ngOnInit() {

  }

  getTileType(rowIndex: number, colIndex: number): string {
    let tileType = 'LandTile';
    if (this.isSeaTile(rowIndex, colIndex)) {
      tileType = 'SeaTile';
    }
    if (this.road.contains(rowIndex, colIndex)) {
      tileType = 'RoadTile';
    }
    return tileType;
  }

  private isSeaTile(rowIndex: number, colIndex :number): boolean {
    return rowIndex > 65 && 75 > rowIndex && (10 > colIndex || colIndex > 12);
  }
}
