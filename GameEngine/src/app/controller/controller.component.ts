import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../game-board/game-board-service.service';
import { GameBoard } from '../game-board/game-board';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  public movementAmount: number;

  constructor(private gameBoardService: GameBoardService) { }

  ngOnInit() {
  }

  onArrowUp(event: any) {
    this.movementAmount = this.gameBoardService.onArrowUp();
  }

  onArrowDown(event: any) {
    this.movementAmount = this.gameBoardService.onArrowDown();
  }

  onArrowRight(event: any) {
    this.movementAmount = this.gameBoardService.onArrowRight();
  }

  onArrowLeft(event: any) {
    this.movementAmount = this.gameBoardService.onArrowLeft();
  }

  onCommitMoves(){
    this.gameBoardService.commitMoves();
  }
}
