import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '@modules/home/pages/home-page/home-page.component';

/**
 * routing principal, (padre) de todas las demas modulos a mostrar al usuario
 */
const routes: Routes = [

  
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',//todo:http://localhost:4200/home es decir la ruta por defecto
    component: HomePageComponent,//componente a inicializar mediante <router-outlet></router-outlet> contenido en archivo app.component.html 
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
