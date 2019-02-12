import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CardService} from '../../Service/card.service';
import {Card} from '../../Class/card';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cartesList: Array<Card>;
  @Output() sortie: EventEmitter<Card> = new EventEmitter<Card>();
  constructor(private CarteService: CardService) { }

  ngOnInit() {
    this.cartesList =  new Array<Card>();
    this.CarteService.getAllCards().then( cartes => {
      // @ts-ignore
      this.cartesList.push(cartes);
    });
    console.log(this.cartesList);
  }
  affImg(idCard: number) {
    this.CarteService.getCardById(idCard).then( carte => {
      // @ts-ignore
      this.sortie.emit(carte);
      console.log(carte);
    });


  }

}
