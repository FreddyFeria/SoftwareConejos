import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotasComponent } from './componentes/notas/notas.component';
import { NotasDetailComponent } from './componentes/notas/notas-detail/notas-detail.component';
import { GridCardsSpawnerComponent } from './componentes/grid/cards/grid-cards-spawner/grid-cards-spawner.component';
import { GridComponentComponent } from './componentes/grid/grid-component/grid-component.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

import {GridModule} from '@angular/flex-layout/grid';

@NgModule({
  declarations: [
    NotasComponent, 
    NotasDetailComponent,
    GridCardsSpawnerComponent, 
    GridComponentComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    GridModule
  ],
  exports: [
    GridComponentComponent
  ]
})
export class SharedModule { }
