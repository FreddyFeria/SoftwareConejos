import { Component, OnInit } from '@angular/core';
import { EntidadRegistro } from '../../entidades/entidad-registro';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  private entidad: EntidadRegistro;
  private formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { 
    this.entidad = {} as EntidadRegistro;
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  guardar(){
    console.log("Validado")
  }

}
