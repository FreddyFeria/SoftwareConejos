export interface EntidadRegistro {
    nombre: String;
    color: String;
    raza: String;
    sexo: "Macho" | "Hembra";
    peso: String;
    padre: String;
    madre: String;
    id: Number;
    fechaNacimiento: Date;
    foto: String;
}
