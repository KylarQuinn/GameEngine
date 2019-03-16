import { Component, OnInit } from '@angular/core';
import { GameTile } from '../gameBoard/game-tile/game-tile';

@Component({
  selector: 'app-user-token',
  templateUrl: './user-token.component.html',
  styleUrls: ['./user-token.component.css']
})
export class UserTokenComponent implements OnInit {

  public movement: number;
  public location: GameTile;
  constructor() {
    this.movement = 3;
    this.location = new GameTile(0, 1);
  }

  ngOnInit() {
  }

}
