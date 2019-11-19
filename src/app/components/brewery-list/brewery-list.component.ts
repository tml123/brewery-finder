import { Observable } from 'rxjs';
import { BreweryService } from './../../services/brewery.service';
import { IBrewery } from './../../models/brewery';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-brewery-list',
  templateUrl: './brewery-list.component.html',
  styleUrls: ['./brewery-list.component.scss']
})
export class BreweryListComponent {

  breweries$: Observable<IBrewery[]> = this.breweryService.breweries$;

  constructor(private breweryService: BreweryService) {
    this.breweryService.breweries$.subscribe(breweries => console.log(breweries));
  }

  searchByState(state: string) {
    this.breweryService.search(state);
  }

  onToggleSave(breweryId: number) {
    this.breweryService.add(breweryId);
  }
}
