import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../game-board/game-board-service.service';
import { GameConstants } from '../game-constants/game-constants.constants';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {
  public movesToCommit: Array<number>;
  public movementAmount: number;

  constructor(private gameBoardService: GameBoardService) {
    this.movesToCommit = [GameConstants.TalonLocation];
    this.movementAmount = 3;
  }

  ngOnInit() {

  }

  onArrowUp(event: any) {
    this.movementAmount = this.gameBoardService.onArrowUp();
    this.movesToCommit = this.gameBoardService.getMoves();
  }

  onArrowDown(event: any) {
    this.movementAmount = this.gameBoardService.onArrowDown();
    this.movesToCommit = this.gameBoardService.getMoves();
  }

  onArrowRight(event: any) {
    this.movementAmount = this.gameBoardService.onArrowRight();
    this.movesToCommit = this.gameBoardService.getMovesToCommit();
  }

  onArrowLeft(event: any) {
    this.movementAmount = this.gameBoardService.onArrowLeft();
    this.movesToCommit = this.gameBoardService.getMovesToCommit();
  }

  onCommitMoves() {
    this.gameBoardService.commitMoves();
    // Battles?
    // Event?
    // change location
    // remove the overlay
    this.movementAmount = this.gameBoardService.getCurrentMovementAmount();
  }
}
