import { Component, OnInit } from '@angular/core';
import {CardService} from "../../Service/card.service";
import {forEach} from "@angular/router/src/utils/collection";
import {Card} from "../../Class/card";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cartesList: Array<Card>;
  constructor(private CarteService: CardService) { }

  ngOnInit() {
    this.cartesList =  new Array<Card>();
    this.CarteService.getAllCards().then( cartes => {
      // @ts-ignore
      this.cartesList.push(cartes);
    });
    console.log(this.cartesList);
  }

}
