import { Component, OnInit } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { GameBoardService } from './game-board-service.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public columns: Array<GameTile> = new Array(GameConstants.TOTAL_COLUMNS);
  public rows: Array<GameTile> = new Array(GameConstants.TOTAL_ROWS);

  constructor(private gameBoard: GameBoardService) {
  }

  ngOnInit() {

  }

  getTileType(rowIndex: number, colIndex: number): string {
    return this.gameBoard.getTileType(rowIndex, colIndex);
  }
}
