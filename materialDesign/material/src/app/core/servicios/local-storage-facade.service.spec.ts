import { TestBed } from '@angular/core/testing';

import { LocalStorageFacadeService } from './local-storage-facade.service';

describe('LocalStorageFacadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalStorageFacadeService = TestBed.get(LocalStorageFacadeService);
    expect(service).toBeTruthy();
  });
});
