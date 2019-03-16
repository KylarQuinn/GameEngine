import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './gameBoard/gameBoard.component';
import { GameTileComponent } from './gameBoard/game-tile/game-tile.component';
import { SeaGameTileComponent } from './gameBoard/sea-game-tile/sea-game-tile.component';
import { LandGameTileComponent } from './gameBoard/land-game-tile/land-game-tile.component';
import { RoadGameTileComponent } from './gameBoard/road-game-tile/road-game-tile.component';
import { UserTokenComponent } from './user-token/user-token.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameTileComponent,
    SeaGameTileComponent,
    LandGameTileComponent,
    RoadGameTileComponent,
    UserTokenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, GameBoardComponent]
})
export class AppModule { }
