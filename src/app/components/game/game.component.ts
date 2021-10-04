import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  players!: IPlayer[];
  constructor() {
  }

  ngOnInit(): void {
    this.players = [
      {
        imageUrl: "../../assets/player/Player-1.svg",
        name: "Player 1",
        score: 0
      },
      {
        imageUrl: "../../assets/player/Player-2.svg",
        name: "Player 2",
        score: 0
      }
    ]
  }

}
