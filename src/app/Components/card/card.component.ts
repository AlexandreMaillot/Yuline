import { Component, OnInit } from '@angular/core';
import {CardService} from "../../Service/card.service";
import {Observable} from "rxjs";
import {Card} from "../../Class/card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
idCart: Card;


  constructor(private CardService: CardService) { }

  ngOnInit() {
  }

}
