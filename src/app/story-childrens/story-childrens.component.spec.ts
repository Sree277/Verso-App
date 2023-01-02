import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryChildrensComponent } from './story-childrens.component';

describe('StoryChildrensComponent', () => {
  let component: StoryChildrensComponent;
  let fixture: ComponentFixture<StoryChildrensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryChildrensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryChildrensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
