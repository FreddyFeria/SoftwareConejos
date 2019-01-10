import { Component, OnInit } from '@angular/core';
import { EntidadRegistro } from '../../entidades/entidad-registro';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
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
      { type: 'required', message: 'El campo sexo es obligatorio' }
    ],
    'fechaNacimiento': [
      { type: 'required', message: 'El campo fecha de nacimiento es obligatorio' }
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
    let formControl: AbstractControl;
    formControl = this.registroAnimalForm.get(control);
    if (formControl.dirty || formControl.touched) {
      var errorType = Object.keys(formControl.errors)[0];
      return (this.mensajes_error[control].find((x: {type: string; message: string;}) => x.type == errorType).message);
    }
  }
}
