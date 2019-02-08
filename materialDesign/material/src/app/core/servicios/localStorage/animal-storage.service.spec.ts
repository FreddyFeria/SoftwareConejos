import { TestBed } from '@angular/core/testing';

import { AnimalStorageService } from './animal-storage.service';

describe('AnimalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimalStorageService = TestBed.get(AnimalStorageService);
    expect(service).toBeTruthy();
  });
});
