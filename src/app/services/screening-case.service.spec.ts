import { TestBed } from '@angular/core/testing';

import { ScreeningCaseService } from './screening-case.service';

describe('ScreeningCaseService', () => {
  let service: ScreeningCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
