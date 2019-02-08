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
    {text: 'One', cols: 6, rows: 2},
    {text: 'One', cols: 5, rows: 2},
    {text: 'One', cols: 5, rows: 6},
    {text: 'Two', cols: 4, rows: 9},
    {text: 'Three', cols: 7, rows: 5},
    {text: 'Four', cols: 5, rows: 5},
    {text: 'Four', cols: 7, rows: 2},
    {text: 'Four', cols: 7, rows: 2},



  ];
  constructor() { }

  ngOnInit() {
  }

}
