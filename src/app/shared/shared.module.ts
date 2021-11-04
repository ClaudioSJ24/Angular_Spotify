import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { RouterModule } from '@angular/router';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';



@NgModule({
  /**
   * Cada componente es asignado al modulo mas cercano por los mismo
   * se agregan automaticamente estos componentes en este modulo
   */
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  //Permite compartir o exportar los componentes que tiene en su interior en el apartado de declarations con otros
  //componestes del proyecto
  exports:[
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPlayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent
  ],
  
})
export class SharedModule { }
