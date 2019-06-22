import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DatosAnimal } from 'src/app/entites/datosAnimal';
import { of } from 'rxjs';
import { GeneroEnum } from 'src/app/entites/generoEnum';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor() { }

  listarAnimales(genero: GeneroEnum): Observable<DatosAnimal[]> {
    let animales: DatosAnimal[] = [
      new DatosAnimal().deserialize({
        id: 10, nombre: 'Lola', color: 'negro',
        raza: 'hotot', sexo: GeneroEnum.HEMBRA, peso: '', padre: '',
        madre: '', fechaNacimiento: new Date(), foto: ''
      }),
      new DatosAnimal().deserialize({
        id: 11, nombre: 'Petra', color: 'blanco',
        raza: 'hotot', sexo: GeneroEnum.MACHO, peso: '', padre: '',
        madre: '', fechaNacimiento: new Date(), foto: ''
      })
    ];
    let resultado: DatosAnimal[] = [];

    animales.forEach(
      animal => {
        if (animal.sexo === genero) {
          resultado.push(animal);
        }
      }
    );
    return of(resultado);

  }
}
