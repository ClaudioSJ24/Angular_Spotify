import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  /**
   * Cada componente es asignado al modulo mas cercano por los mismo
   * se agregan automaticamente estos componentes en este modulo
   */
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
