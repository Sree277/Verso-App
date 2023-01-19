import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountofferSectionComponent } from './discountoffer-section.component';

describe('DiscountofferSectionComponent', () => {
  let component: DiscountofferSectionComponent;
  let fixture: ComponentFixture<DiscountofferSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountofferSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountofferSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
