import { Component, OnInit } from '@angular/core';
import { GridCardsService, GridCard } from 'src/app/shared';
import { GridAnimalesService } from '../../servicios/grid-animales.service';
import { AnimalGridCardComponent } from './animal-grid-card/animal-grid-card.component';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
  providers: [
    { provide: GridCardsService, useClass: GridAnimalesService }
  ]

})
export class ListarComponent implements OnInit {
  animalService : GridAnimalesService;

  constructor(gridService : GridAnimalesService) {
    this.animalService = gridService;
    gridService.cards.subscribe(cards => {
      console.log(cards);
    });
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

  ngOnInit() {
    this.actualizarServicio();
  }

}
