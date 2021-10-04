import { Card } from "../models/Card";

const numbers: string[] = [
    'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
]
const shapes: string[] = [
    "Heart", "Spade", "Diamond", "Club"
]
export class Deck {
    
    private deck: Card[];
    static numberOfCards: number = 0;

    constructor() {
        this.deck = [];
        for (let shape of shapes)
            for (let number of numbers)
                this.deck.push(new Card(number, shape));
                
        this.deck.push(new Card("Joker", "Red"));
        this.deck.push(new Card("Joker", "Black"));

        this.shuffleDeck()
        this.halfDeck()
        this.doubleDeck()
        this.shuffleDeck()
    }


    private shuffleDeck() {
        this.deck = this.deck.sort(() => Math.random() - 0.5);
    }

    private halfDeck() {
        const half = Math.ceil(this.deck.length / 2);    
        this.deck = this.deck.slice(0, half)
    }

    private doubleDeck() {
        this.deck = [...this.deck, ...this.deck];
    }

    getCards(): Card[] {
        return this.deck.map(card => {
            let uniqueCard = { ...card };
            uniqueCard.id = ++Deck.numberOfCards;
            return uniqueCard;
        });
    }

}