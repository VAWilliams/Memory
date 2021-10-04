import { Component, Input, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/shared/interfaces/IPlayer';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  
  @Input()
  player!: IPlayer;
  
  constructor() { }

  ngOnInit(): void {
  }

}
