import { Component, OnInit } from '@angular/core';
import {CardListComponent} from "../card-list/card-list.component";
export interface Tile {
  cols: number;
  rows: number;
  text: string;
  componentAdd: string;
}
@Component({
  selector: 'app-deck-manage',
  templateUrl: './deck-manage.component.html',
  styleUrls: ['./deck-manage.component.css']
})
export class DeckManageComponent implements OnInit {
  tiles: Tile[] = [
    {text: 'Liste Deck', cols: 6, rows: 2, componentAdd: "<app-filters></app-filters>"},
    {text: 'Filter', cols: 5, rows: 2, componentAdd: "<app-filters></app-filters>"},
    {text: 'Carte', cols: 5, rows: 6, componentAdd: "<app-filters></app-filters>"},
    {text: 'Resultat', cols: 4, rows: 9, componentAdd: "<app-filters></app-filters>"},
    {text: 'Deck', cols: 7, rows: 5, componentAdd: "<app-filters></app-filters>"},
    {text: 'Description', cols: 5, rows: 5, componentAdd: "<app-filters></app-filters>"},
    {text: 'Side-Deck', cols: 7, rows: 2, componentAdd: "<app-filters></app-filters>"},
    {text: 'Extra-Deck', cols: 7, rows: 2, componentAdd: "<app-filters></app-filters>"}

  ];
  constructor() { }

  ngOnInit() {
  }

}
