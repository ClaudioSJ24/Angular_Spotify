import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * routing principal, (padre) de todas las demas modulos a mostrar al usuario
 */
const routes: Routes = [
  {
    path: 'home',//todo:http://localhost:4200/home es decir la ruta por defecto
    loadChildren: ()=> import (`./modules/home/home.module`).then(m=>m.HomeModule)
    /**
     * import (`./modules/home/home.module`) ruta del modulo a mostrar al usuario, que mediante
     * una promesa .then se dirige a HomeModule, es en este modulo en su respectivo archivo de home.routing.module en donde se 
     * el que se define las siguientes rutas de la aplicacion 
     */
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
