import { Component, OnInit } from '@angular/core';
import { EntidadRegistro } from '../../entidades/entidad-registro';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  private entidad: EntidadRegistro;
  registroAnimalForm: FormGroup;
  mensajes_error = {
    'nombre': [
      { type: 'required', message: 'El campo nombre es obligatorio' },
      { type: 'maxlength', message: 'El nombre no puede superar los 25 caracteres' }
    ],
    'color': [
      { type: 'required', message: 'El campo color es obligatorio' }
    ],
    'raza': [
      { type: 'required', message: 'El campo raza es obligatoria' }
    ],
    'peso': [
      { type: 'required', message: 'El campo peso es obligatorio' },
      { type: 'min', message: 'El peso debe ser mayor a 0' }
    ],
    'sexo': [
      { type: 'pattern', message: 'El campo sexo es obligatorio' }
    ],
    'fechaNacimiento': [
      { type: 'pattern', message: 'El campo fecha de nacimiento es obligatorio' }
    ]
  }

  constructor(private formBuilder: FormBuilder) {
    this.entidad = {} as EntidadRegistro;
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.registroAnimalForm = this.formBuilder.group({
      nombre: new FormControl(this.entidad.nombre, [Validators.required, Validators.maxLength(25)]),
      color: new FormControl(this.entidad.color, Validators.required),
      raza: new FormControl(this.entidad.raza, Validators.required),
      peso: new FormControl(this.entidad.peso, [Validators.required, Validators.min(0)]),
      sexo: new FormControl(this.entidad.sexo, Validators.required),
      madre: new FormControl(this.entidad.madre),
      padre: new FormControl(this.entidad.padre),
      fechaNacimiento: new FormControl(this.entidad.fechaNacimiento, Validators.required)
    });
  }
  registrar(modelo: EntidadRegistro) {
    console.log("Validado")
  }

  getErrorMessage(control: string) {
    if (this.registroAnimalForm.get(control).dirty || this.registroAnimalForm.get(control).touched) {
      var errorType = Object.keys(this.registroAnimalForm.get(control).errors)[0];
      return (this.mensajes_error[control].find(x => x.type == errorType).message);
    }
  }
}
