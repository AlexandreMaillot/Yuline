import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CardService} from '../../Service/card.service';
import {Card} from '../../Class/card';
import {DeckService} from '../../Service/deck.service';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})

export class CardListComponent implements OnInit {
  cardsList: Array<Card>;
  constructor(private cardService: CardService, private deckService: DeckService) { }
  @Output() idCardModel = new EventEmitter<number>();
  @Output()
  sortie: EventEmitter<Card> = new EventEmitter<Card>();
  ngOnInit() {
    //this.cardsList =  new Array<Card>();
    this.cardService.getAllCards().then( Cards => {
    //   @ts-ignore
       this.cardsList =Cards ;
      // console.log(Cards);
      // this.cardsList = Array.from({length: 100000}).map((_, i) => `Item #${i}`);
    });
    // console.log(this.cardsList);
  }
  affCard(idCard: string) {

    this.cardService.getCardById(idCard).then( card => {
      // @ts-ignore
      this.sortie.emit(card);
      // console.log(carte);
    });
  }

  addCard(idCard: string) {
      // this.deckService.addCardDeck(idCard);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log('test');
  }

}
