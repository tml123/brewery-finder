import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweryListComponent } from './components/brewery-list/brewery-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BreweryListItemComponent } from './components/brewery-list-item/brewery-list-item.component';
import { BreweryFavoritesComponent } from './components/brewery-favorites/brewery-favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweryListComponent,
    BreweryListItemComponent,
    BreweryFavoritesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
