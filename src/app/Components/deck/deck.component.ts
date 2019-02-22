import {Component, Input, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
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
  tiles: Tile[] = [];

  constructor() {
  }
  addTile(idCard: string){
      this.tCard = {id: idCard, cols: 1, rows: 1};
      this.tiles.push(this.tCard);
      
  }


deleteTile(tile : Tile) {
  const index = this.tiles.indexOf(tile);
  this.tiles.splice(index, 1);
}

  getIndex(){

  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer != event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      this.addTile(event.item.element.nativeElement.id);

    } 


    //@ts-ignore
    console.log(event.item.element.nativeElement.id);
    //@ts-ignore

    
      
    
  }

}
