import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchtrompfDetailsComponent } from './schtrompf-details.component';

describe('SchtrompfDetailsComponent', () => {
  let component: SchtrompfDetailsComponent;
  let fixture: ComponentFixture<SchtrompfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchtrompfDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchtrompfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
