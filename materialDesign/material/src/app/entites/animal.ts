export interface Animal {
    id: Number;
    nombre: String;
    color: String;
    raza: String;
    sexo: "Macho" | "Hembra";
    peso: String;
    padre: String;
    madre: String;
    fechaNacimiento: Date;
    foto: String;
}
