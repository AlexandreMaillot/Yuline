import {Deck} from './deck';
import {Card} from './card';

export class ExtraDeck extends Deck {
  private _idExtraDeck: number;
  private _limitedCard : number = 15;
  private _minimumCard: number = 0;
  private _cardList: Array<Card>;

  constructor(idDeck: number, name: string, banList: string, idExtraDeck: number, cardList: Array<Card>) {
    super(idDeck, name, banList);
    this._idExtraDeck = idExtraDeck;
    this._cardList = cardList;
  }

  get idExtraDeck(): number {
    return this._idExtraDeck;
  }

  set idExtraDeck(value: number) {
    this._idExtraDeck = value;
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
