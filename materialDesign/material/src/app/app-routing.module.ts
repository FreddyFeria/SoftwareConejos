import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyDashboardComponent } from "./my-dashboard/my-dashboard.component";

const routes: Routes = [{
  path: 'dashboard',
  component: MyDashboardComponent
},
{
  path: 'registro',
  loadChildren: './registro/registro.module#RegistroModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
