import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationSectnComponent } from './pagination-sectn.component';

describe('PaginationSectnComponent', () => {
  let component: PaginationSectnComponent;
  let fixture: ComponentFixture<PaginationSectnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationSectnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationSectnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
