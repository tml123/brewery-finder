import { IBrewery } from './../../models/brewery';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brewery-list-item',
  templateUrl: './brewery-list-item.component.html',
  styleUrls: ['./brewery-list-item.component.scss']
})
export class BreweryListItemComponent {
  @Input() brewery: IBrewery;
  @Input() favorited: boolean;
  @Output() toggleSave: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }
}
