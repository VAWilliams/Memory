import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { reducers } from './reducers';

import { AppComponent    } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GameComponent   } from './components/game/game.component';
import { ButtonComponent } from './components/button/button.component';
import { ScoreComponent  } from './components/score/score.component';
import { BoardComponent  } from './components/board/board.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { SplashComponent } from './components/splash/splash.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    GameComponent,
    ScoreComponent,
    BoardComponent,
    PopUpComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
