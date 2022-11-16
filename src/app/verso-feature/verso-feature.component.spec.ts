import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersoFeatureComponent } from './verso-feature.component';

describe('VersoFeatureComponent', () => {
  let component: VersoFeatureComponent;
  let fixture: ComponentFixture<VersoFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersoFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
