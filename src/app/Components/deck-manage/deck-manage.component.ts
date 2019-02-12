import { Component, OnInit } from '@angular/core';
import {CardListComponent} from "../card-list/card-list.component";
export interface Tile {
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-deck-manage',
  templateUrl: './deck-manage.component.html',
  styleUrls: ['./deck-manage.component.css']
})
export class DeckManageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Liste Deck', cols: 6, rows: 2},
    {text: 'Filter', cols: 5, rows: 2},
    {text: 'Carte', cols: 5, rows: 6},
    {text: 'Resultat', cols: 4, rows: 9},
    {text: 'Deck', cols: 7, rows: 5},
    {text: 'Description', cols: 5, rows: 5},
    {text: 'Side-Deck', cols: 7, rows: 2},
    {text: 'Extra-Deck', cols: 7, rows: 2}

  ];
  constructor() { }

  ngOnInit() {
  }

}
