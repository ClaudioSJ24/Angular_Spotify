import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';//Programacion reactiva

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {


  //mockCover!: TrackModel

  listObserverT: Array<Subscription> = []
  //Lan inyeccion de una dependencia de un servicio se realiza
  //mediante el constructor
  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
   // this.multimediaService.trackInfo$.subscribe(res =>{
     // console.log('Debo reproducir la cancion', res)
    //})

  }

  //Al implementar la propiedad OnDestroy es necesario agregar este metodo que es el
  //primero que se ejecuta y tambien el ultimo antes de destruiren componente en el ciclo de vida

  ngOnDestroy(): void{

    this.listObserverT.forEach(aUnsuscribe => aUnsuscribe.unsubscribe());
    console.log('Ejecutando metodo ngOnDestroy');

  }

}
