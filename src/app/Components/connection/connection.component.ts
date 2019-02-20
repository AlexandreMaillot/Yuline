import {Component, OnInit} from '@angular/core';
import {CardService} from "../../Service/card.service";
import {Card} from "../../Class/card";
import {PlayerService} from "../../Service/player.service";
import {take} from "rxjs/operators";
import {interval} from "rxjs";

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

  constructor(private cardService: CardService, private playerService: PlayerService) {
  }

  ngOnInit() {
  }

  EnregistreCard() {

    // //
    //
    // // @ts-ignore
    //   this.listeCarteS[0].forEach.delay(500)( cardS => {
    //    console.log(cardS);
    // this.cardService.getCardById(cardS.id).then.(  completeCard => {
    //   console.log(completeCard);
    // @ts-ignore
    // this.cardService.addCardDb(completeCard);
    // }

//@ts-ignore
    // for (let _i = 1; _i < 10; _i++) {
    //   inter(() => {
    //
    //       this.playerService.getPlayerById(_i).then(p => console.log(p));
    //
    //   }, 5000);
    this.listeCarteS = new Array<Card>();
     console.log(this.listeCarteS);
    this.cardService.getAllCards().then(Cards => {
      // @ts-ignore
      this.listeCarteS.push(Cards);
    });
    const numbers = interval(2000);
    const takeFourNumbers = numbers.pipe(take(520));
    // const takeFourNumbers = numbers.pipe(take((this.listeCarteS.length / 15));
// console.log(this.listeCarteS[0].length / 15);
    takeFourNumbers.subscribe(x => {

        for (let _i = this.id; _i <= this.id + 19; _i++) {

          this.card = <Card>this.listeCarteS[0][_i];
          this.cardService.getCardById(this.card.id).then(completeCard => {
            // @ts-ignore
             this.cardService.addCardDb(completeCard[0]).then('Carte Ajouté');
            //  console.log(completeCard);
             // console.log(this.id2);

          });
          this.id2 = _i;
        }
        this.id = this.id2 + 1;


      }
    )
    // )
    // });


  }
}
