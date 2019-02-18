import { Injectable } from '@angular/core';
import {Card} from "../Class/card";
import {Observable, of, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
export interface Tile {
  cols: number;
  rows: number;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Card[] = [];
  private card: Card = null;
  idEnCour: number;
  cardsSubject = new Subject<Card[]>();
  cardSubject = new Subject<Card>();



  getAllCards() {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      const req = this.http.get<Card[][]>('https://db.ygoprodeck.com/api/allcards.php')
        .subscribe(
          res => {
            //console.log(res);
            if (res != null) {
              res[0].forEach(card => {
                this.cards.push(card);
              });
              resolve(this.cards);
            }

          },
          err => {
            console.log('Error occured');
            reject(err);
          }
        );
    });
  }
  getCardById(id: string){
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line:max-line-length
      const SingleCard = this.http.get<Card>('https://db.ygoprodeck.com/api/cardinfo.php?name=' + id)
        .subscribe(
          res => {

            if (res != null) {
              this.card = res;
              console.log(this.card);
              // this.cardSubject = this.card.;
              resolve(this.card);
            }

          },
          err => {
            console.log('Error occured');
            reject(err);
          }
        );
    });
  }

  constructor(private http: HttpClient) { }
}
