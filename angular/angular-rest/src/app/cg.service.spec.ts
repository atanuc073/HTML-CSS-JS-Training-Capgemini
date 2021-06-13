import { TestBed } from '@angular/core/testing';

import { CgService } from './cg.service';

describe('CgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CgService = TestBed.get(CgService);
    expect(service).toBeTruthy();
  });
});
