import { TestBed } from '@angular/core/testing';

import { AuthSerivcesService } from './auth-serivces.service';

describe('AuthSerivcesService', () => {
  let service: AuthSerivcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthSerivcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
