import { Injectable } from '@angular/core';
import {Deck} from "../Class/deck";
import {CardService} from "./card.service";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck: Deck;
  addCardDeck(idCard: string){
    // this.cardService.getCardById(idCard).then( card => this.mainDeck.cardList.push(card[0]));
  }
  getDecks() {

}
  constructor(private cardService: CardService) { }
}
