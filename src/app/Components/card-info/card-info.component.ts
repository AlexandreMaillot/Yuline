import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../../Class/card";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {
  @Input() c: Card;
  constructor() { }

  ngOnInit() {
  }

}
