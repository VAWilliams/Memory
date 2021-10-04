import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent    } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameComponent   } from './components/game/game.component';
import { ButtonComponent } from './components/button/button.component';
import { ScoreComponent  } from './components/score/score.component';
import { BoardComponent  } from './components/board/board.component';

const routes: Routes = [
  { path: '', component: GameComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    GameComponent,
    ScoreComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
