import { Injectable } from '@angular/core';
import { GridCardsService } from 'src/app/shared/';
import { GridCard } from 'src/app/shared/';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class GridAnimalesService implements GridCardsService {
  private _cards: BehaviorSubject<GridCard[]> = new BehaviorSubject<GridCard[]>([]);
  
  constructor() {}

  addCard(card: GridCard): void {
    this._cards.getValue().push(card);
    this._cards.next(this._cards.getValue());
  }
    
   get cards(): Observable<GridCard[]> {
    return this._cards.asObservable();
  }

}
