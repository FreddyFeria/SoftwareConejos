import { GeneroEnum } from './generoEnum';
import { Deserializable } from './deserializable';
import { AnimalModel } from './animalModel';

export class DatosAnimal implements Deserializable, AnimalModel {
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

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }

}
