import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/Card';
import { Deck } from 'src/app/shared/factories/Deck';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  deck: Card[];

  constructor() {
    this.deck = new Deck().getCards();
  }

  ngOnInit(): void {
    console.log(this.deck)
  }

  selectCard(card: Card) {
    card.isSelected = true;
  }

}
