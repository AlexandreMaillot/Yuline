import { Injectable } from '@angular/core';
import {Deck} from "../Class/deck";
import {CardService} from "./card.service";
import {Card} from "../Class/card";
import {Player} from "../Class/player";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck: Deck;
  listDeck : Array<Deck>;

  addCardMainDeck(card:Card, deck:Deck){
    deck.mainDeck.push(card);
  }

  addCardExtraDeck(card:Card, deck:Deck){
    deck.extraDeck.push(card);
  }

  addCardSideDeck(card:Card, deck:Deck){
    deck.sideDeck.push(card);
  }
  
  deleteCardMainDeck(card:Card, deck:Deck){
    var index = deck.mainDeck.indexOf(card);
    deck.mainDeck.splice(index,1);
  }

  deleteCardExtraDeck(card:Card, deck:Deck){
    var index = deck.extraDeck.indexOf(card);
    deck.extraDeck.splice(index,1);
  }

  deleteCardSideDeck(card:Card, deck:Deck){
    var index = deck.sideDeck.indexOf(card);
    deck.sideDeck.splice(index,1);
  }

  createDeck(nom:string, banList:string, mainDeck:Card[], sideDeck: Card[], extraDeck: Card[], player:Player){
    this.deck = new Deck(nom, banList, mainDeck, sideDeck, extraDeck, player);
    player.deckList.push(this.deck);
  }

  deleteDeck(player:Player, deck:Deck){
    var index = player.deckList.indexOf(deck);
    player.deckList.splice(index,1);
  }

  getDecks() {
    return this.listDeck;
}
  constructor(private cardService: CardService) { }
}
