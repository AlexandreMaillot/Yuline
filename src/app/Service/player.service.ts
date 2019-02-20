import {Injectable} from '@angular/core';
import {Player} from '../Class/player';
import {Deck} from '../Class/deck';
import {Card} from '../Class/card';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player: Player;

  constructor(private http: HttpClient) {
  }

  addPlayer(idPlayer: number, pseudo: string, email: string, password: string) {
    const deck = new Array<Deck>();
    this.player = new Player(idPlayer, pseudo, email, password, deck);
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      const addPlayer = this.http.post<Player>('http://localhost:54939/api/Players', this.player)
        .subscribe(
          res => {
            resolve("PlayerAdd");
          },
          err => {
            console.log('Error occured');
            reject(err);
          }
        );
    });
  }

  getPlayerById(id: number) {

    return new Promise((resolve, reject) => {

      // tslint:disable-next-line:max-line-length
      const SinglePlayer = this.http.get<Player>('http://localhost:54939/api/Players/' + id)
        .subscribe(
          res => {

            if (res != null) {
              this.player = res;
              // console.log(this.player);
              resolve(this.player);
            }

          },
          err => {
            console.log('Error occured');
            reject(err);
          }
        );
    });
  }
}
