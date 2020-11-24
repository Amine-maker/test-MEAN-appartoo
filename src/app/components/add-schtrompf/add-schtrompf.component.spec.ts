import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSchtrompfComponent } from './add-schtrompf.component';

describe('AddSchtrompfComponent', () => {
  let component: AddSchtrompfComponent;
  let fixture: ComponentFixture<AddSchtrompfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSchtrompfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSchtrompfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
