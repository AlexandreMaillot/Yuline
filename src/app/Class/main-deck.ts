import {Deck} from './deck';
import {Card} from './card';

export class MainDeck extends Deck {
  private _idMainDeck: number;
  private _limitedCard : number = 60;
  private _minimumCard: number = 40;
  private _cardList: Array<Card>;

  constructor(idDeck: number, name: string, banList: string, idMainDeck: number, cardList: Array<Card>) {
    super(idDeck, name, banList);
    this._idMainDeck = idMainDeck;
    this._cardList = cardList;
  }

  get idMainDeck(): number {
    return this._idMainDeck;
  }

  set idMainDeck(value: number) {
    this._idMainDeck = value;
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
