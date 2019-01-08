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

  constructor(private formBuilder: FormBuilder) {
    this.entidad = {} as EntidadRegistro;
    this.createForm();
  }

  ngOnInit() {

  }

  createForm() {
    this.registroAnimalForm = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      color: new FormControl('', Validators.required),
      raza: new FormControl('', Validators.required),
      peso: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      madre: new FormControl(''),      
      padre: new FormControl(''),
      fechaNacimiento: new FormControl('', Validators.required)
    });
  }
  guardar() {
    console.log("Validado")
  }

}
