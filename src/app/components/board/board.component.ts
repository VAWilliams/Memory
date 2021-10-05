import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/shared/models/Card';
import { Deck } from 'src/app/shared/factories/Deck';
import { CardComparison } from 'src/app/shared/enums/card-comparison.enum';
import { Player } from 'src/app/shared/models/Player'; 
import { Store, select } from '@ngrx/store';
import { PlayerUpdate } from 'src/app/actions/player.actions';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input()
  players!: Player[];

  deck: Card[];
  selectedCards: Card[];
  mustDisplayMessage: boolean = false;

  constructor(private store: Store<{players: Player[]}>) {
    this.store.pipe(select("players"))
      .subscribe(players => this.players = players)
    
    this.deck = new Deck().getCards();
    this.selectedCards = [];
  }

  ngOnInit(): void { }

  private compareCards(): CardComparison {
    let [firstCard, secondCard] = this.selectedCards;
    let isMatch = (firstCard.number == secondCard.number && firstCard.shape == secondCard.shape);

    return isMatch ? CardComparison.Match : CardComparison.Different;
  }

  private diselectCards() {
    this.selectedCards.forEach(card => card.isSelected = false);
    this.selectedCards = [];
  }

  private collectCards() {
    this.selectedCards.forEach(card => card.isCollected = true);
    this.selectedCards = [];
  }

  private toggleMessage() {
    this.mustDisplayMessage = !this.mustDisplayMessage;
  }

  selectCard(card: Card) {
    
    card.isSelected = true;
    this.selectedCards.push(card);
    if (this.selectedCards.length < 2) return;
    
    let isMatch = this.compareCards() == CardComparison.Match;
    if (isMatch) {

      this.store.dispatch(new PlayerUpdate(
        this.players.map(player => ({
          score: player.current ? player.score + 2 : player.score
        }))
      ));
      
      
      
      setTimeout(this.collectCards.bind(this), 500)
      setTimeout(this.toggleMessage.bind(this), 500)
      setTimeout(this.toggleMessage.bind(this), 1500)
      

    } else {

      // Toggle Player
      this.store.dispatch(new PlayerUpdate(
        this.players.map(player => ({
          current: !player.current
        }))
      ));
      setTimeout(this.diselectCards.bind(this), 1000)

    }
  }
}