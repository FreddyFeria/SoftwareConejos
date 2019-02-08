import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from "./paginas/registro/registro.component";
import { ListarComponent } from "./paginas/listar/listar.component";

const routes: Routes = [
  {
    path: 'registro', component: RegistroComponent
  },
  {
    path: '', component: ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdultosRoutingModule { }
