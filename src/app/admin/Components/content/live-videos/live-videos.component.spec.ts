import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveVideosComponent } from './live-videos.component';

describe('LiveVideosComponent', () => {
  let component: LiveVideosComponent;
  let fixture: ComponentFixture<LiveVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveVideosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
