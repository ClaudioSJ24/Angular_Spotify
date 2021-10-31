import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [//se cargan automaticamente los modulos mas cercanos a este modulo
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule//Se utilizan todos los componentes que el modulo ShareModule exporta a otros modulos
  ]
})
export class HomeModule { }
