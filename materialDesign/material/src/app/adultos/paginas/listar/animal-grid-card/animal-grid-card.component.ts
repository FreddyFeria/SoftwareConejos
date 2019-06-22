import { Component, OnInit, Injector } from '@angular/core';
import { AbstractGridCard, GridCard } from 'src/app/shared/';
import { DatosAnimal } from 'src/app/entites/datosAnimal';

@Component({
  selector: 'app-animal-grid-card',
  templateUrl: './animal-grid-card.component.html',
  styleUrls: ['./animal-grid-card.component.scss']
})
export class AnimalGridCardComponent extends AbstractGridCard implements OnInit {
  datosAnimal : DatosAnimal;
  constructor(private injector: Injector) {
    super(injector.get(GridCard.metadata.NAME),
      injector.get(GridCard.metadata.ROUTERLINK),
      injector.get(GridCard.metadata.COLOR),
      injector.get(GridCard.metadata.COLS),
      injector.get(GridCard.metadata.ROWS),
      injector.get(GridCard.metadata.DATA));
      this.datosAnimal = new DatosAnimal().deserialize(this.data);
  }

  ngOnInit() {
  }
}
