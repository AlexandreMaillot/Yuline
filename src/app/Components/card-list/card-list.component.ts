import { Component, OnInit } from '@angular/core';
import {CardService} from "../../Service/card.service";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private CarteService: CardService) { }

  ngOnInit() {
    this.CarteService.getAllCards().then( cartes => console.log(cartes))
  }

}
