import {Component, Input, OnInit} from '@angular/core';
// export interface Tile {
//   id: string;
//   cols: number;
//   rows: number;
// }
export interface Tile {
  cols: number;
  rows: number;
  id: string;
}
@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})


export class DeckComponent implements OnInit {
  tCard: Tile;
  //
  // tiles: Tile[] = [
  //   {id: "1", cols: 1, rows: 1},
  //
  // ];
  @Input()
  tiles: Tile[] = [
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '27551', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
    {id: '41777', cols: 1, rows: 1},
  ];

  constructor() {
  }
  addTile(idCard: string){
     this.tCard = {id: idCard, cols: 1, rows: 1};
     this.tiles.push(this.tCard);
  }
  ngOnInit() {
  }

}
