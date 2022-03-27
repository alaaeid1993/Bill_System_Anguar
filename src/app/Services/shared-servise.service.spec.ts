import { TestBed } from '@angular/core/testing';

import { SharedServiseService } from './shared-servise.service';

describe('SharedServiseService', () => {
  let service: SharedServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
