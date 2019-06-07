import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdultosRoutingModule } from './adultos-routing.module';
import { RegistroComponent } from './paginas/registro/registro.component';
import { ListarComponent } from './paginas/listar/listar.component';
//import { GridAnimalesService } from './servicios/grid-animales.service';
import { SharedModule } from '../shared/shared.module';
import { AnimalGridCardComponent } from './paginas/listar/animal-grid-card/animal-grid-card.component';

@NgModule({
  imports: [
    CommonModule,
    AdultosRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    RegistroComponent, 
    ListarComponent, 
    AnimalGridCardComponent
  ],
  providers: [],
  exports: [
    AnimalGridCardComponent
  ],
  entryComponents: [
    AnimalGridCardComponent
  ]
})
export class AdultosModule { }
