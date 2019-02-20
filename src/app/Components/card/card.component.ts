import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {CardService} from '../../Service/card.service';
import {Card} from '../../Class/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() c: Card;

  constructor(private CardService: CardService) {
  }

  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //     console.log(changes);
  //
  // }
}
