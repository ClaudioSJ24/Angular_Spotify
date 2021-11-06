import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TracksPageComponent } from './tracks-page/tracks-page.component';

const routes: Routes = [
  {
    path:'',
    component: TracksPageComponent,
    outlet: 'childHome'

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule { }
