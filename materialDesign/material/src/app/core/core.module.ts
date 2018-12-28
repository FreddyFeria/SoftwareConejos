import { NgModule, ModuleWithProviders } from '@angular/core';
import { Optional } from '@angular/core';
import { SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';

import { CatalogService } from "./servicios/catalog.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule {
  static forRoot(){
    return{
      ngModule: CoreModule,
      providers: [CatalogService]
    }
  }
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('El servicio ya fue instanciado');
    }
  }
}
