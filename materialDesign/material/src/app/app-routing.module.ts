import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  /*
  {
  path: 'dashboard',
  component: MyDashboardComponent
  },*/
  {
    path: 'adultos',
    loadChildren: './adultos/adultos.module#AdultosModule'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,   { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
