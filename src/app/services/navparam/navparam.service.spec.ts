import { TestBed } from '@angular/core/testing';

import { NavparamService } from './navparam.service';

describe('NavparamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavparamService = TestBed.get(NavparamService);
    expect(service).toBeTruthy();
  });
});
