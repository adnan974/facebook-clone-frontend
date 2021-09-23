import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNewsFeedPostComponent } from './write-news-feed-post.component';

describe('WriteNewsFeedPostComponent', () => {
  let component: WriteNewsFeedPostComponent;
  let fixture: ComponentFixture<WriteNewsFeedPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteNewsFeedPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNewsFeedPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
