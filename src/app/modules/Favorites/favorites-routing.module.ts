import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritePageComponent } from './favorite-page/favorite-page.component';

///Se indican las rutas en las cuales sera visible este componente
const routes: Routes = [
  {
    path: '',
    component: FavoritePageComponent,
    ///Es nesesario especificar el nombre del outlet al que pertenecen especificado
    //en <router-outlet name = "childHome"></router-outlet> del archivo home-page.component.html
    outlet: 'childHome'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritesRoutingModule { }
