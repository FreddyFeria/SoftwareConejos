import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from "../angular-material/angular-material.module";

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './paginas/registro/registro.component';

@NgModule({
  imports: [
    CommonModule,
    RegistroRoutingModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  declarations: [RegistroComponent]
})
export class RegistroModule { }
