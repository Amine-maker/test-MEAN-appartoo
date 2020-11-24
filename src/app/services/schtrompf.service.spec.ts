import { TestBed } from '@angular/core/testing';

import { SchtrompfService } from './schtrompf.service';

describe('SchtrompfService', () => {
  let service: SchtrompfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchtrompfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
