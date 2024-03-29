import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentSectionComponent } from './rent-section.component';

describe('RentSectionComponent', () => {
  let component: RentSectionComponent;
  let fixture: ComponentFixture<RentSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RentSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
