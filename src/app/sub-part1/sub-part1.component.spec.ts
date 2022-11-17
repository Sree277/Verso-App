import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPart1Component } from './sub-part1.component';

describe('SubPart1Component', () => {
  let component: SubPart1Component;
  let fixture: ComponentFixture<SubPart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPart1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubPart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
