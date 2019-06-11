import { Component, OnInit } from '@angular/core';
import { GridCardsService } from 'src/app/shared';
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
  }

  ngOnInit() { }

}
