import { IBrewery } from './../models/brewery';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreweryService {

  favorites: number[] = [];
  breweries: BehaviorSubject<IBrewery[]> = new BehaviorSubject([]);
  breweries$ = this.breweries.asObservable();

  constructor(private http: HttpClient) { }

  add(id: number) {
    const find = this.breweries.value.find(brewery => brewery.id === id);
    console.log(find);
    find.favorited = true;
    this.breweries.next([...this.breweries.value]);
  }

  getSingleBreweryById(id: number) {
    return this.http.get(`https://api.openbrewerydb.org/breweries/${id}`);
  }

  remove(id: number) {
    this.favorites = this.favorites.filter(favorite => favorite !== id);
  }

  search(query: string) {
    return this.http.get<IBrewery[]>(`https://api.openbrewerydb.org/breweries/search?query=${query}`)
      .subscribe(breweries => this.breweries.next([...breweries, ...this.breweries.value]));
  }
}
