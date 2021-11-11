import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './history-page/history-page.component';

///Se indican las rutas en las cuales sera visible este componente
const routes: Routes = [
  {
    path: '',
    component: HistoryPageComponent,
    outlet: 'childHome'///Es nesesario especificar el nombre del outlet al que pertenecen especificado
    //en <router-outlet name = "childHome"></router-outlet> del archivo home-page.component.html
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
