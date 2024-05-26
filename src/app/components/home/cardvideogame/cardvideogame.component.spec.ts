import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardvideogameComponent } from './cardvideogame.component';

describe('CardvideogameComponent', () => {
  let component: CardvideogameComponent;
  let fixture: ComponentFixture<CardvideogameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardvideogameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardvideogameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
