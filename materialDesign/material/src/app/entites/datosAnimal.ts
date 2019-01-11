import { GeneroEnum } from './generoEnum';

export interface DatosAnimal {
    id: Number;
    nombre: String;
    color: String;
    raza: String;
    sexo: GeneroEnum;
    peso: String;
    padre: String;
    madre: String;
    fechaNacimiento: Date;
    foto: String;
}
