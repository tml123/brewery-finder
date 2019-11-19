import { BreweryListComponent } from './components/brewery-list/brewery-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreweryFavoritesComponent } from './components/brewery-favorites/brewery-favorites.component';


const routes: Routes = [
  {
    path: '',
    component: BreweryListComponent
  },
  {
    path: 'favorites',
    component: BreweryFavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
