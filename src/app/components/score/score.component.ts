import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/models/Player';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input()
  player!: Player;
  
  constructor() { }

  ngOnInit(): void {
  }

}
