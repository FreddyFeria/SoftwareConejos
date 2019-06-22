import { Component, OnInit } from '@angular/core';
import { GridCardsService } from 'src/app/shared';
import { GridAnimalesService } from '../../servicios/grid-animales.service';
import { DatosAnimal } from 'src/app/entites/datosAnimal';

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
    this.animalService.addCard(new DatosAnimal().deserialize({
      id: 101,
      nombre: "Conejo",
      sexo: "Hembra",
      peso: "21"
    }))
  }

  ngOnInit() { }

}
