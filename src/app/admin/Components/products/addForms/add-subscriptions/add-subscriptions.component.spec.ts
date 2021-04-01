import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubscriptionsComponent } from './add-subscriptions.component';

describe('AddSubscriptionsComponent', () => {
  let component: AddSubscriptionsComponent;
  let fixture: ComponentFixture<AddSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
