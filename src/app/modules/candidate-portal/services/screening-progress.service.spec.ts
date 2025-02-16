import { TestBed } from '@angular/core/testing';

import { ScreeningProgressService } from './screening-progress.service';

describe('ScreeningProgressService', () => {
  let service: ScreeningProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreeningProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
