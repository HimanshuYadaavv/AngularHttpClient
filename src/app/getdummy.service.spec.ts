import { TestBed } from '@angular/core/testing';

import { GetdummyService } from './getdummy.service';

describe('GetdummyService', () => {
  let service: GetdummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
