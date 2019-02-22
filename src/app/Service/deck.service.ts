import {Injectable} from '@angular/core';
import {Deck} from '../Class/deck';
import {CardService} from './card.service';
import {Card} from '../Class/card';
import {Player} from '../Class/player';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  deck: Deck;
  listDeck: Array<Deck>;

  addCardMainDeck(card: Card, deck: Deck) {
    deck.mainDeck.push(card);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      const addDeck = this.http.post('http://localhost:54939/api/mainDeck', this.deck)
        .subscribe(
          res => {
            if (res != null) {
              resolve(res);
            }
          },
          err => {
            reject(err);
          }
        );
    });
  }

  addCardExtraDeck(card: Card, deck: Deck) {
    deck.extraDeck.push(card);
  }

  addCardSideDeck(card: Card, deck: Deck) {
    deck.sideDeck.push(card);
  }

  deleteCardMainDeck(card: Card, deck: Deck) {
    const index = deck.mainDeck.indexOf(card);
    deck.mainDeck.splice(index, 1);
  }

  deleteCardExtraDeck(card: Card, deck: Deck) {
    const index = deck.extraDeck.indexOf(card);
    deck.extraDeck.splice(index, 1);
  }

  deleteCardSideDeck(card: Card, deck: Deck) {
    const index = deck.sideDeck.indexOf(card);
    deck.sideDeck.splice(index, 1);
  }

  createDeck(nom: string, player: Player,mainDeck:Card[],sideDeck: Card[], extraDeck:Card[]) {
    this.deck = new Deck(nom, '', mainDeck, sideDeck, extraDeck, player);
    player.deckList.push(this.deck);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      const addDeck = this.http.post<Deck>('http://localhost:54939/api/Deck', this.deck)
        .subscribe(
          res => {
            if (res != null) {
              resolve(res);
            }
          },
          err => {
            reject(err);
          }
        );
    });
  }

  deleteDeck(player: Player, deck: Deck) {
    const index = player.deckList.indexOf(deck);
    player.deckList.splice(index, 1);
  }

  getDecks(player: Player) {
    return player.deckList;
  }

  constructor(private cardService: CardService, private http: HttpClient) {
  }
}
