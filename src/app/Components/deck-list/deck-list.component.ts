import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core';
import {DeckService} from '../../Service/deck.service';
import {Deck} from '../../Class/deck';
import {Player} from '../../Class/player';
import { Card } from 'src/app/Class/card';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  deckList: Array<Deck>;
  player: Player;
  nomDeck: string;
  @Input()
  deckSelect: Card[];
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckList = [];
    this.player = new Player(1, 'PlayerTest', '', '123',this.deckList);
    this.deckList = this.deckService.getDecks(this.player);
  }

  createDeck(){
    console.log(this.deckSelect[0]);
    this.deckService.createDeck(this.nomDeck, this.player,this.deckSelect);
    this.deckList = this.deckService.getDecks(this.player);
    console.log("decklist : "+ <Card[]> this.deckList[0].mainDeck + this.deckList[0].name);
  }

}
