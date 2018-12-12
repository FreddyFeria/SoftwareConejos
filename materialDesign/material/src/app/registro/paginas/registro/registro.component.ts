import { Component, OnInit } from '@angular/core';
import { EntidadRegistro } from '../../entidades/entidad-registro';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  private entidad: EntidadRegistro;
  
  constructor() { }

  ngOnInit() {
  }

}
