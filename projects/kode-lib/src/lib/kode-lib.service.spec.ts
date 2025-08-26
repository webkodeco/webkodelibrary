import { TestBed } from '@angular/core/testing';

import { KodeLibService } from './kode-lib.service';

describe('KodeLibService', () => {
  let service: KodeLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KodeLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
