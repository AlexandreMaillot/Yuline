import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
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
    {text: 'One', cols: 1, rows: 4, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 2, rows: 3, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 4, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 4, color: '#DDBDF1'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
