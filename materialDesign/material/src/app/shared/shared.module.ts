import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotasComponent } from './componentes/notas/notas.component';
import { NotasDetailComponent } from './componentes/notas/notas-detail/notas-detail.component';
import { TableroComponent } from './componentes/tablero/tablero.component';

@NgModule({
  declarations: [NotasComponent, NotasDetailComponent, TableroComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
