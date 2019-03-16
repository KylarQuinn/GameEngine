import { Component, OnInit } from '@angular/core';
import { RoadDefinition, Road } from './road-definition.constants';
import { GameConstants } from '../constants/game-constants.constants';
import { GameTile } from './game-tile/game-tile';

@Component({
  selector: 'app-gameBoard',
  templateUrl: './gameBoard.component.html',
  styleUrls: ['./gameBoard.component.css']
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
