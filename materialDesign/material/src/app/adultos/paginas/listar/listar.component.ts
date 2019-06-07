import { Component, OnInit } from '@angular/core';
import { GridCardsService, GridCard } from 'src/app/shared';
import { AnimalGridCardComponent } from './animal-grid-card/animal-grid-card.component';
import { GridAnimalesService } from '../../servicios/grid-animales.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [
    { provide: GridCardsService, useClass: GridAnimalesService }
  ]

})
export class ListarComponent implements OnInit {
  animalService : GridCardsService;

  constructor(gridService : GridCardsService) {
    this.animalService = gridService;
  }

  actualizarServicio() {
    this.animalService.addCard(
      new GridCard(
        {
          name: {
            key: GridCard.metadata.NAME,
            value: 'users'
          },
          routerLink: {
            key: GridCard.metadata.ROUTERLINK,
            value: '/dashboard/users'
          },
          iconClass: {
            key: GridCard.metadata.ICONCLASS,
            value: 'fa-users'
          },
          color: {
            key: GridCard.metadata.COLOR,
            value: 'blue'
          }
        }, AnimalGridCardComponent /* Reference to the component we'd like to spawn */
      )
    )
  }

  ngOnInit() { }

}
