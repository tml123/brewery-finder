import { IBrewery } from './../../models/brewery';
import { BreweryService } from './../../services/brewery.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-brewery-favorites',
  templateUrl: './brewery-favorites.component.html',
  styleUrls: ['./brewery-favorites.component.scss']
})
export class BreweryFavoritesComponent implements OnInit {
  favorites$: Observable<IBrewery[]>;
  constructor(private breweryService: BreweryService) { }

  ngOnInit() {
    this.favorites$ = this.breweryService.breweries$
      .pipe(
        map((breweries) =>
          breweries.filter(brewery => this.breweryService.favorites.includes(brewery.id))
      )
    );
  }
}
