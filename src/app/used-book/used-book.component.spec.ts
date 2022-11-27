import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedBookComponent } from './used-book.component';

describe('UsedBookComponent', () => {
  let component: UsedBookComponent;
  let fixture: ComponentFixture<UsedBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsedBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
