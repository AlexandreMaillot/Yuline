export class Deck {
  private _idDeck: number;
  private _name: string;
  private _banList: string;

  constructor(idDeck: number, name: string, banList: string) {
    this._idDeck = idDeck;
    this._name = name;
    this._banList = banList;
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
