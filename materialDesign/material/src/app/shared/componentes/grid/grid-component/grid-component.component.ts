import { Component, OnInit } from '@angular/core';
import {GridCard} from '../cards/grid-card';
import {Observable} from 'rxjs';

import {ObservableMedia} from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';
import { GridCardsService } from '../../../servicios/grid-cards.service';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {

  cards: GridCard[] = [];
  cols: Observable<number>;

  constructor(private cardsService: GridCardsService,
    private observableMedia: ObservableMedia) {
  }

  ngOnInit() {
    
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });

    /* Grid column map */
    let start_col: number;
    const col_map = new Map([
      ['xs', 1],
      ['sm', 4],
      ['md', 6],
      ['lg', 8],
      ['xl', 10]
    ]);

    col_map.forEach((cols, mqAlias) => {
      if (this.observableMedia.isActive(mqAlias)) {
        start_col = cols;
      }
    });

    this.cols = this.observableMedia.asObservable()
    .pipe(map(change => {
        return col_map.get(change.mqAlias);
      }))
    .pipe(startWith(start_col));
  }
}
