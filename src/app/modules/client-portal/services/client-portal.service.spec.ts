import { TestBed } from '@angular/core/testing';

import { ClientPortalService } from './client-portal.service';

describe('ClientPortalService', () => {
  let service: ClientPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
