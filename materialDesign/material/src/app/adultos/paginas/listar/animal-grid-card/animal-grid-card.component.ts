import { Component, OnInit, Injector } from '@angular/core';
import { AbstractGridCard, GridCard } from 'src/app/shared/';

@Component({
  selector: 'app-animal-grid-card',
  templateUrl: './animal-grid-card.component.html',
  styleUrls: ['./animal-grid-card.component.scss']
})
export class AnimalGridCardComponent extends AbstractGridCard implements OnInit {

  constructor(private injector: Injector) {
    super(injector.get(GridCard.metadata.NAME),
      injector.get(GridCard.metadata.ROUTERLINK),
      injector.get(GridCard.metadata.COLOR),
      injector.get(GridCard.metadata.COLS),
      injector.get(GridCard.metadata.ROWS));
  }

  ngOnInit() {
  }

}
