import {Component, Input, OnInit} from '@angular/core';
import {CardService} from "../../Service/card.service";
import {Card} from "../../Class/card";
import {PlayerService} from "../../Service/player.service";
import {take} from "rxjs/operators";
import {interval} from "rxjs";
import {Player} from "../../Class/player";
import { Router } from '@angular/router';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  listeCarteS: Card[];
  listeCarte: Card[];
  id: number = 1;
  id2: number;
  card: Card;
  @Input()
  pseudo: string;
  @Input()
  password: string;
  player: Player;
  constructor(private cardService: CardService, private playerService: PlayerService) {
  }

  ngOnInit() {
  }
login(){
  this.player = new Player(this.pseudo,this.password);
    this.playerService.connection(this.player).then( p => console.log(p));
}
  EnregistreCard() {
    this.listeCarteS = new Array<Card>();
     console.log(this.listeCarteS);
    this.cardService.getAllCards().then(Cards => {
      // @ts-ignore
      this.listeCarteS.push(Cards);
    });
    const numbers = interval(2000);
    const takeFourNumbers = numbers.pipe(take(520));
    takeFourNumbers.subscribe(x => {

        for (let _i = this.id; _i <= this.id + 19; _i++) {

          this.card = <Card>this.listeCarteS[0][_i];
          this.cardService.getCardById(this.card.id).then(completeCard => {
            // @ts-ignore
             this.cardService.addCardDb(completeCard[0]).then('Carte Ajouté');
          });
          this.id2 = _i;
        }
        this.id = this.id2 + 1;


      }
    )


  }
}
