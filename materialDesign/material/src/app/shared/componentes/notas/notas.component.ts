import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ItemNota } from "../../../entites";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  @Input() notas: ItemNota[];
  @Output() notasAprobadas = new EventEmitter<ItemNota[]>();

  constructor() { }

  ngOnInit() {
  }

  eliminarNota(nota: ItemNota){
    const index: number = this.notas.indexOf(nota);
    if (index !== -1) {
        this.notas.splice(index, 1);
    }
  }
}
