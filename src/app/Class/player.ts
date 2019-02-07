import {Deck} from './deck';

export class Player {
  private _idPlayer: number;
  private _pseudo: string;
  private _email: string;
  private _password: string;
  private _deckList: Array<Deck>;


  constructor(idPlayer: number, pseudo: string, email: string, password: string) {
    this._idPlayer = idPlayer;
    this._pseudo = pseudo;
    this._email = email;
    this._password = password;
  }


  get idJoueur(): number {
    return this._idPlayer;
  }

  set idJoueur(value: number) {
    this._idPlayer = value;
  }

  get pseudo(): string {
    return this._pseudo;
  }

  set pseudo(value: string) {
    this._pseudo = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get deckList(): Array<Deck> {
    return this._deckList;
  }

  set deckList(value: Array<Deck>) {
    this._deckList = value;
  }
}
