import { Component, OnInit } from '@angular/core';
import { GameTile } from '../game-tile/game-tile';
import { GameBoard } from '../game-board';
import { GameConstants } from 'src/app/game-constants/game-constants.constants';

@Component({
  selector: 'app-user-token',
  templateUrl: './user-token.component.html',
  styleUrls: ['./user-token.component.css']
})
export class UserTokenComponent implements OnInit {
  private movementAmount: number;
  private movement: Array<number>; // Tile numbers to move across. from top left tile to one diagonal right: 0, 1, 26
  public location: number;

  constructor(private gameBoard: GameBoard) {
    this.movementAmount = 3;
    this.location = GameConstants.TalonLocation;
  }
  ngOnInit() {
  }

  /**
   * executeMove
   */
  public executeMove() {

  }
}
