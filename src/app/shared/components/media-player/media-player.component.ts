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


  mockCover: TrackModel = {
    name: 'name',
    album: 'album',
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    url: 'url',
    _id: 1,
  }

  listObserverT: Array<Subscription> = []
  //Lan inyeccion de una dependencia de un servicio se realiza
  //mediante el constructor
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1: Subscription = this.multimediaService.callback.subscribe(

      (response:TrackModel)=>{
        console.log('Recibiendo cancion.....',response);
      }
    )
    this.listObserverT = [observer1]

  }

  //Al implementar la propiedad OnDestroy es necesario agregar este metodo que es el
  //primero que se ejecuta y tambien el ultimo antes de destruiren componente en el ciclo de vida

  ngOnDestroy(): void{
    
    this.listObserverT.forEach(aUnsuscribe => aUnsuscribe.unsubscribe());
    console.log('Ejecutando metodo ngOnDestroy');

  }

}
