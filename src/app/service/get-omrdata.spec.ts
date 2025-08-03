import { TestBed } from '@angular/core/testing';

import { GetOmrdata } from './get-omrdata';

describe('GetOmrdata', () => {
  let service: GetOmrdata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOmrdata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
