import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';

const routes: Routes = [
  {
    path: 'login',//http://localhost:4200/auth/login
    component: AuthPageComponent

  },
  {
    path:'**',//Si la ruta no existe ir a http://localhost:4200/auth/login
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
