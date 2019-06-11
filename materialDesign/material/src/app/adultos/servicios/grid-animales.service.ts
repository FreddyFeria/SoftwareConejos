import { Injectable } from '@angular/core';
import { GridCardsService } from 'src/app/shared/';
import { GridCard } from 'src/app/shared/';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DatosAnimal } from 'src/app/entites/datosAnimal';
import { AnimalGridCardComponent } from '../paginas/listar/animal-grid-card/animal-grid-card.component';

@Injectable({
  providedIn: 'root'
})

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

  addAnimal(datosAnimal: DatosAnimal): void {
    let animalCard = new GridCard(
        {
          name: {
            key: GridCard.metadata.NAME,
            value: datosAnimal.nombre
          },
          routerLink: {
            key: GridCard.metadata.ROUTERLINK,
            value: datosAnimal.id.toString()
          },
          cols: {
            key: GridCard.metadata.COLS,
            value: of(1)
          },
          rows: {
            key: GridCard.metadata.ROWS,
            value: of(1)
          },
          color: {
            key: GridCard.metadata.COLOR,
            value: 'blue'
          }
        }, AnimalGridCardComponent
      )
    this.addCard(animalCard);
  }

}
