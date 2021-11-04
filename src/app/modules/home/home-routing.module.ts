import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';

const routes: Routes = [
  /**
   * Este componente se va a inicializar desde el <router-outlet></router-outlet> que es el encargado de mostrar
   * todos los modulos contenidos en el archivo app-routin.module.ts
   * {
    path: 'dashboard',//todo:http://localhost:4200/home/dashboard
    //path: ':parametro/:other',//todo:http://localhost:4200/home/dashboard ó http://localhost:4200/home/claudio
    component: HomePageComponent
  }

    Modulos a renderizar en el <router-outlet name="child"></router-outlet> contenido en archivo home-page.component.html de carpeta home
   */
  {
    path:'tracks',
    loadChildren: () => import('@modules/tracks/tracks.module').then(m => m.TracksModule)

  },
  {
    path: 'history',
    loadChildren: () => import('@modules/history/history.module').then( m => m.HistoryModule)
  },
  {
    path:'favorites',
    loadChildren: () => import('@modules/Favorites/favorites.module').then(m => m.FavoritesModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
