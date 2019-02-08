import { Component, OnInit } from '@angular/core';
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
    {text: 'One', cols: 6, rows: 1},
    {text: 'One', cols: 5, rows: 1},
    {text: 'One', cols: 5, rows: 2},
    {text: 'Two', cols: 4, rows: 8},
    {text: 'Three', cols: 7, rows: 6},
    {text: 'Four', cols: 5, rows: 7},
    {text: 'Four', cols: 7, rows: 1},
    {text: 'Four', cols: 7, rows: 1},



  ];
  constructor() { }

  ngOnInit() {
  }

}
