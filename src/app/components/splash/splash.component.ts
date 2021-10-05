import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {
  players!: Player[];
  winner!: Player;
  positions!: string[];
  
  constructor(private store: Store<{players: Player[]}>) {
    this.store.pipe(select("players"))
      .subscribe(players => {
        this.players = [...players].sort((a, b) => b.score - a.score);
        [this.winner,] = this.players;
      });
  }

  ngOnInit(): void {
    this.positions = [ "1st", "2nd" ];
  }

  onClick() {
    location.reload();
  }

}
