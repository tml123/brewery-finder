import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryListItemComponent } from './brewery-list-item.component';

describe('BreweryListItemComponent', () => {
  let component: BreweryListItemComponent;
  let fixture: ComponentFixture<BreweryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
