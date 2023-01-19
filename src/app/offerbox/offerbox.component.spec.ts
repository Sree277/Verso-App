 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferboxComponent } from './offerbox.component';

describe('OfferboxComponent', () => {
  let component: OfferboxComponent;
  let fixture: ComponentFixture<OfferboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
