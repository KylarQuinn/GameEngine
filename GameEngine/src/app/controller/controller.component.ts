import { Component, OnInit } from '@angular/core';
import { GameBoardService } from '../game-board/game-board-service.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent implements OnInit {

  movementAmount: number = 3;

  constructor(private gameBoard: GameBoardService) { }

  ngOnInit() {
  }

  onArrowUp(event: any) {
    this.movementAmount -= 1;
  }

  onArrowDown(event: any) {
    this.movementAmount -= 1;
  }

  onArrowRight(event: any) {
    this.movementAmount -= 1;
  }

  onArrowLeft(event: any) {
    this.movementAmount -= 1;
  }
}
