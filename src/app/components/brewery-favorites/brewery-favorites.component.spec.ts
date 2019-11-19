import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryFavoritesComponent } from './brewery-favorites.component';

describe('BreweryFavoritesComponent', () => {
  let component: BreweryFavoritesComponent;
  let fixture: ComponentFixture<BreweryFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
