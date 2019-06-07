import {inject, TestBed} from '@angular/core/testing';

import {GridCardsService} from './grid-cards.service';

describe('GridCardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridCardsService]
    });
  });

  it('should be created', inject([GridCardsService], (service: GridCardsService) => {
    expect(service).toBeTruthy();
  }));
});
