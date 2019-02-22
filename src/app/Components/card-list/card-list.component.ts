import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CardService} from '../../Service/card.service';
import {Card} from '../../Class/card';
import {DeckService} from '../../Service/deck.service';

import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {BehaviorSubject, Observable, Subscription} from "rxjs";
import {CollectionViewer} from "@angular/cdk/collections";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
  
})

export class CardListComponent implements OnInit {
  cardsList: Card[];
  constructor(private cardService: CardService, private deckService: DeckService) { }
  @Output() idCardModel = new EventEmitter<number>();
  @Output()
  sortie: EventEmitter<Card> = new EventEmitter<Card>();
  ngOnInit() {
    this.cardService.getAllCards().then( Cards => {
      //@ts-ignore
       this.cardsList =Cards ;
       console.log(Cards);

    });
    console.log(this.cardsList);
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
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }

}
