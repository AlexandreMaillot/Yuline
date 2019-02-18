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
  deckList: Deck[];
  player: Player;
  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.player = new Player(1, 'PlayerTest', '', '123');
    this.deckService.createDeck('DeckTest', this.player);
    this.deckList = this.deckService.getDecks();
  }

}
