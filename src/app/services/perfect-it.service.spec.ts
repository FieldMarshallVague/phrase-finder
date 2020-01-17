import { TestBed } from '@angular/core/testing';

import { PerfectItService } from './perfect-it.service';

describe('PerfectItService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfectItService = TestBed.get(PerfectItService);
    expect(service).toBeTruthy();
  });
});
