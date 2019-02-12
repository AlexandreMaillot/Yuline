import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CardService} from "../../Service/card.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Card} from "../../Class/card";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cartesList: Array<Card>;
  constructor(private CarteService: CardService) { }
  @Output() idCardModel = new EventEmitter<number>();
  ngOnInit() {
    this.cartesList =  new Array<Card>();
    this.CarteService.getAllCards().then( cartes => {
      // @ts-ignore
      this.cartesList.push(cartes);
    });
    console.log(this.cartesList);
  }
  affImg(idCard: number) {
    console.log(idCard);
  }

}
