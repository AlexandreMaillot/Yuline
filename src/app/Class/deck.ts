import {Card} from "./card";
import {Player} from "./player";

export class Deck {
  private _idDeck: number;
  private _name: string;
  private _banList: string;
  private _mainDeck: Card[];
  private _sideDeck: Card[];
  private _extraDeck: Card[];
  private _player: Player;

  constructor(name: string, banList: string, mainDeck: Card[], sideDeck: Card[], extraDeck: Card[], player: Player) {
    this._name = name;
    this._banList = banList;
    this._mainDeck = mainDeck;
    this._sideDeck = sideDeck;
    this._extraDeck = extraDeck;
    this._player = player;
  }

  get player(): Player {
    return this.player;
  }

  set player(value: Player) {
    this.player = value;
  }


  get mainDeck(): Card[] {
    return this._mainDeck;
  }

  set mainDeck(value: Card[]) {
    this._mainDeck = value;
  }

  get sideDeck(): Card[] {
    return this._sideDeck;
  }

  set sideDeck(value: Card[]) {
    this._sideDeck = value;
  }

  get extraDeck(): Card[] {
    return this._extraDeck;
  }

  set extraDeck(value: Card[]) {
    this._extraDeck = value;
  }


  get idDeck(): number {
    return this._idDeck;
  }

  set idDeck(value: number) {
    this._idDeck = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get banList(): string {
    return this._banList;
  }

  set banList(value: string) {
    this._banList = value;
  }
}
