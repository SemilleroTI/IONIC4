import { TestBed } from '@angular/core/testing';

import { ParaService } from './para.service';

describe('ParaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParaService = TestBed.get(ParaService);
    expect(service).toBeTruthy();
  });
});
