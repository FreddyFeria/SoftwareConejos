import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotasComponent } from './componentes/notas/notas.component';
import { NotasDetailComponent } from './componentes/notasDetail/notas-detail/notas-detail.component';

@NgModule({
  declarations: [NotasComponent, NotasDetailComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
