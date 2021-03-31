import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordedVideosComponent } from './recorded-videos.component';

describe('RecordedVideosComponent', () => {
  let component: RecordedVideosComponent;
  let fixture: ComponentFixture<RecordedVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordedVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
