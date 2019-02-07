import {Deck} from './deck';
import {Card} from './card';

export class SideDeck extends Deck {
  private _idSideDeck: number;
  private _limitedCard : number = 15;
  private _minimumCard: number = 0;
  private _cardList: Array<Card>;


  constructor(idDeck: number, name: string, banList: string, idSideDeck: number, cardList: Array<Card>) {
    super(idDeck, name, banList);
    this._idSideDeck = idSideDeck;
    this._cardList = cardList;
  }

  get idSideDeck(): number {
    return this._idSideDeck;
  }

  set idSideDeck(value: number) {
    this._idSideDeck = value;
  }

  get limitedCard(): number {
    return this._limitedCard;
  }

  set limitedCard(value: number) {
    this._limitedCard = value;
  }

  get minimumCard(): number {
    return this._minimumCard;
  }

  set minimumCard(value: number) {
    this._minimumCard = value;
  }

  get cardList(): Array<Card> {
    return this._cardList;
  }

  set cardList(value: Array<Card>) {
    this._cardList = value;
  }
}
