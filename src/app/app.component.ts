import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Player } from './shared/models/Player';

const numberOfCards = 54;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isGameDone!: boolean;

  constructor(private store: Store<{players: Player[]}>) {
    this.store.pipe(select("players"))
      .subscribe(players => {
        let total = players
          .map(player => player.score)
          .reduce((previousScore, currentScore) => previousScore + currentScore);
        this.isGameDone = total == numberOfCards;
      });
  }
}