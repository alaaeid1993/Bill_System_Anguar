import { TestBed } from '@angular/core/testing';

import { unitService } from './unit.service';

describe('UnitService', () => {
  let service: unitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(unitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
