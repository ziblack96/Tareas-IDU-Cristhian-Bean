import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversCards } from './drivers-cards';

describe('DriversCards', () => {
  let component: DriversCards;
  let fixture: ComponentFixture<DriversCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriversCards]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DriversCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
