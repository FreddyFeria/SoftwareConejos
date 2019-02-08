import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from "./core/core.module";
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FormsModule } from '@angular/forms';

import { NavegacionComponent } from './navegacion/navegacion.component';
import { ListarComponent } from './adultos/paginas/listar/listar.component'


@NgModule({
  declarations: [
    NavegacionComponent,
    ListarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    AngularMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [NavegacionComponent]
})
export class AppModule { }
