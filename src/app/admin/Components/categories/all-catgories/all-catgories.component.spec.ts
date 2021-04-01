import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCatgoriesComponent } from './all-catgories.component';

describe('AllCatgoriesComponent', () => {
  let component: AllCatgoriesComponent;
  let fixture: ComponentFixture<AllCatgoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCatgoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCatgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
