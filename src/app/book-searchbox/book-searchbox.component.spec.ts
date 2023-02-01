import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSearchboxComponent } from './book-searchbox.component';

describe('BookSearchboxComponent', () => {
  let component: BookSearchboxComponent;
  let fixture: ComponentFixture<BookSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSearchboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
