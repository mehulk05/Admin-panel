import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDocsComponent } from './pdf-docs.component';

describe('PdfDocsComponent', () => {
  let component: PdfDocsComponent;
  let fixture: ComponentFixture<PdfDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
