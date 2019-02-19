import { Injectable } from '@angular/core';
import {Player} from '../Class/player';
import {Deck} from '../Class/deck';
import {Card} from '../Class/card';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player : Player;

  constructor() { }

  addPlayer(idPlayer: number, pseudo: string, email: string, password: string){
    const deck = new Array<Deck>();

    this.player = new Player(idPlayer, pseudo, email, password, deck);
  }
}
