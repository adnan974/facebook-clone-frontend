import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteNewsFeedPostDialogComponent } from './write-news-feed-post-dialog.component';

describe('WriteNewsFeedPostDialogComponent', () => {
  let component: WriteNewsFeedPostDialogComponent;
  let fixture: ComponentFixture<WriteNewsFeedPostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteNewsFeedPostDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteNewsFeedPostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
