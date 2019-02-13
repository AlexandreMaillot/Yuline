import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CardService} from '../../Service/card.service';
import {Card} from '../../Class/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cardsList: Array<Card>;
  constructor(private cardService: CardService) { }
  @Output() idCardModel = new EventEmitter<number>();
  ngOnInit() {
    this.cardsList =  new Array<Card>();
    this.cardService.getAllCards().then( Cards => {
      // @ts-ignore
      this.cardsList.push(cartes);
    });
    console.log(this.cardsList);
  }
  affImg(idCard: number) {
    this.CarteService.getCardById(idCard).then( carte => {
      // @ts-ignore
      this.sortie.emit(carte);
      console.log(carte);
    });


  }

}
