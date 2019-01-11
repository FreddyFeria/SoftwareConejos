import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/entites/animal';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor() { }

  listarAnimales(genero: string): Observable<Animal[]> {
    let animales: Animal[] = [
      {
        id: 10, nombre: 'Lola', color: 'negro',
        raza: 'hotot', sexo: "Macho", peso: '', padre: '',
        madre: '', fechaNacimiento: new Date(), foto: ''
      }, {
        id: 11, nombre: 'Petra', color: 'blanco',
        raza: 'hotot', sexo: "Hembra", peso: '', padre: '',
        madre: '', fechaNacimiento: new Date(), foto: ''
      }
    ];
    let resultado: Animal[] = [];
    
    animales.forEach(
      animal => {
        if (animal.sexo.toUpperCase() === genero.toUpperCase()) {
          resultado.push(animal);
        }
      }
    );
    return of(resultado);

  }
}
