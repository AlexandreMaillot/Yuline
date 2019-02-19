import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeckService} from '../../Service/deck.service';
import {Deck} from '../../Class/deck';
import {Player} from '../../Class/player';

@Component({
  selector: 'app-deck-list',
  templateUrl: './deck-list.component.html',
  styleUrls: ['./deck-list.component.css']
})
export class DeckListComponent implements OnInit {
  deckList: Array<Deck>;
  player: Player;
  nomDeck: string;
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckList = [];
    this.player = new Player(1, 'PlayerTest', '', '123',this.deckList);
    this.deckService.createDeck('DeckTest', this.player);
    this.deckList = this.deckService.getDecks(this.player);
  }

  createDeck(){
    this.deckService.createDeck(this.nomDeck, this.player);
    this.deckList = this.deckService.getDecks(this.player);
    console.log("decklist : "+ this.deckList);
  }

}
