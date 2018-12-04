import { Component, OnInit } from '@angular/core';
import { EntidadRegistro } from '../entidades/entidad-registro';

@Component({
  selector: 'app-registro-form',
  templateUrl: './registro-form.component.html',
  styleUrls: ['./registro-form.component.scss']
})
export class RegistroFormComponent implements OnInit {
  private entidad: EntidadRegistro;

  constructor() { }

  ngOnInit() {
  }

}
