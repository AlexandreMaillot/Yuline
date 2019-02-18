import { Injectable } from '@angular/core';
import {Player} from '../Class/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player : Player;

  constructor() { }

  addPlayer(idPlayer: number, pseudo: string, email: string, password: string){
    this.player = new Player(idPlayer, pseudo, email, password);
  }
}
