import { TestBed } from '@angular/core/testing';

import { GridAnimalesService } from './grid-animales.service';

describe('GridAnimalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GridAnimalesService = TestBed.get(GridAnimalesService);
    expect(service).toBeTruthy();
  });
});
