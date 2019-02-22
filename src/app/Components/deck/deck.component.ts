import {Component, Input,Output,EventEmitter, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Deck } from 'src/app/Class/deck';
import { Card } from 'src/app/Class/card';
import { CardService } from 'src/app/Service/card.service';
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

  @Output()
  mainDeckChange: EventEmitter<Card[]> = new EventEmitter<Card[]>();
  tCard: Tile;
  mainDeck:Card[] = [];
  card:Card;
  @Output()
  sortieDeck: EventEmitter<Card> = new EventEmitter<Card>();
  //
  // tiles: Tile[] = [
  //   {id: "1", cols: 1, rows: 1},
  //
  // ];
  @Input()
  tiles: Tile[] = [];

  constructor(private cardService: CardService ) {
  }
  addTile(idCard: string){
      this.tCard = {id: idCard, cols: 1, rows: 1};
      this.tiles.push(this.tCard);
      
      this.cardService.getCardById(idCard).then(card => {
        //console.log(card);
        
        //@ts-ignore
        this.mainDeck.push(card);
      
      });
      
  }
  
  affCard(idCard: string) {

    this.cardService.getCardById(idCard).then( card => {
      // @ts-ignore
      this.sortieDeck.emit(card);
      // console.log(carte);
    });
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
      this.mainDeckChange.emit(this.mainDeck);

    } 


    //@ts-ignore
    console.log(event.item.element.nativeElement.id);
    //@ts-ignore

    
      
    
  }

}
