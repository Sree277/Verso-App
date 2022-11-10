import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconpartComponent } from './iconpart.component';

describe('IconpartComponent', () => {
  let component: IconpartComponent;
  let fixture: ComponentFixture<IconpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
