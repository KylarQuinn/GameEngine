import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { GameTileComponent } from './game-board/game-tile/game-tile.component';
import { UserTokenComponent } from './game-board/user-token/user-token.component';
import { SeaTileComponent } from './game-board/sea-tile/sea-tile.component';
import { LandTileComponent } from './game-board/land-tile/land-tile.component';
import { RoadTileComponent } from './game-board/road-tile/road-tile.component';
import { GameBoardService } from './game-board/game-board-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent,
    UserTokenComponent,
    SeaTileComponent,
    LandTileComponent,
    RoadTileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GameBoardService],
  bootstrap: [AppComponent, GameBoardComponent]
})
export class AppModule { }
