import { Component, OnInit } from '@angular/core';
import { GridCard } from '../cards/grid-card';
import { Observable, of } from 'rxjs';

import { ObservableMedia, MediaChange} from '@angular/flex-layout';
import { startWith } from 'rxjs/operators';
import { GridCardsService } from '../../../servicios/grid-cards.service';


@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.scss']
})
export class GridComponentComponent implements OnInit {

  cards: GridCard[] = [];
  cols: Observable<number>;
  rowRelation: Observable<string>;

  constructor(private cardsService: GridCardsService,
    private observableMedia: ObservableMedia) {
  }

  ngOnInit() {
    
    this.cardsService.cards.subscribe(cards => {
      this.cards = cards;
    });

    /* Grid column map */
    const col_map = new Map([
      ['xs', {col: 1, relation: '2:1'}],
      ['sm', {col: 3, relation: '1.5:1'}],
      ['md', {col: 3, relation: '1.5:1'}],
      ['lg', {col: 4, relation: '2:1'}],
      ['xl', {col: 8, relation: '2:1'}]
    ]);
    
    this.observableMedia.subscribe((change : MediaChange) => {
      this.rowRelation = of(col_map.get(change.mqAlias).relation)
        .pipe(startWith('2:1'));
      this.cols = of(col_map.get(change.mqAlias).col)
        .pipe(startWith(1));
    });
  }
}
