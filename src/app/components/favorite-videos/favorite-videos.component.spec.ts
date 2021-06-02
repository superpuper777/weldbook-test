import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritevideosComponent } from './favorite-videos.component';

describe('FavoritevideosComponent', () => {
  let component: FavoritevideosComponent;
  let fixture: ComponentFixture<FavoritevideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritevideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritevideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
