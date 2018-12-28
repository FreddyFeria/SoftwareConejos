import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from "./core/core.module";
import { AngularMaterialModule } from "./angular-material/angular-material.module";

import { NavegacionComponent } from './navegacion/navegacion.component'

@NgModule({
  declarations: [
    NavegacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [NavegacionComponent]
})
export class AppModule { }
