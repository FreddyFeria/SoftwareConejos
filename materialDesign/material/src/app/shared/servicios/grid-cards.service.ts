import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GridCard } from '../componentes/grid/cards/grid-card';


@Injectable()
export abstract class GridCardsService {
  abstract addCard(card: GridCard): void;
  abstract get cards(): Observable<GridCard[]>;
}
