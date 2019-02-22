import {Deck} from './deck';

export class Player {
  private _idPlayer: number;
  private Pseudo: string;
  private Email: string;
  private Password: string;
  private DeckList: Array<Deck>;


  constructor(pseudo: string, password: string) {
    this.Pseudo = pseudo;
    this.Password = password;
  }


  get idJoueur(): number {
    return this._idPlayer;
  }

  set idJoueur(value: number) {
    this._idPlayer = value;
  }

  get pseudo(): string {
    return this.Pseudo;
  }

  set pseudo(value: string) {
    this.Pseudo = value;
  }

  get email(): string {
    return this.Email;
  }

  set email(value: string) {
    this.Email = value;
  }

  get password(): string {
    return this.Password;
  }

  set password(value: string) {
    this.Password = value;
  }

  get deckList(): Array<Deck> {
    return this.DeckList;
  }

  set deckList(value: Array<Deck>) {
    this.DeckList = value;
  }
}
