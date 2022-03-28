import { TestBed } from '@angular/core/testing';

import { CompanytypeService } from './companytype.service';

describe('CompanytypeService', () => {
  let service: CompanytypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanytypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
