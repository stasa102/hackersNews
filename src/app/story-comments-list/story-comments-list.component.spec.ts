import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCommentsListComponent } from './story-comments-list.component';

describe('StoryCommentsListComponent', () => {
  let component: StoryCommentsListComponent;
  let fixture: ComponentFixture<StoryCommentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryCommentsListComponent]
    });
    fixture = TestBed.createComponent(StoryCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
