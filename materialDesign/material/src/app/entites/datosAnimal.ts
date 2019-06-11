import { GeneroEnum } from './generoEnum';
import { Deserializable } from './deserializable';
import { AnimalModel } from './animalModel';

export class DatosAnimal implements Deserializable, AnimalModel {
    id: number;
    nombre: string;
    color: string;
    raza: string;
    sexo: GeneroEnum;
    peso: string;
    padre: string;
    madre: string;
    fechaNacimiento: Date;
    foto: string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
