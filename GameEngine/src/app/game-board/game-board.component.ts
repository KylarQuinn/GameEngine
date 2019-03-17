import { Component, OnInit } from '@angular/core';
import { GameTile } from './game-tile/game-tile';
import { GameConstants } from '../game-constants/game-constants.constants';
import { GameBoardService } from './game-board-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {
  public columns: Array<GameTile> = new Array(GameConstants.TOTAL_COLUMNS);
  public rows: Array<GameTile> = new Array(GameConstants.TOTAL_ROWS);
  private userTokenMovement: Subscription = null;

  constructor(private gameBoard: GameBoardService) {
    this.userTokenMovement = this.gameBoard.movementEnd$.subscribe((movementPair) => {
      // the event should emit data such that I can change the board accordingly
    })
  }

  ngOnInit() {

  }

  getTileType(rowIndex: number, colIndex: number): string {
    return this.gameBoard.getTileType(rowIndex, colIndex);
  }


}
