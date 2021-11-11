import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json';
import { TrackService } from '../services/track.service';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit , OnDestroy{

  tracksSmall: Array<TrackModel> = []
  tracksBig: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  //inyecccion de servicio trackService para poder utilizar metodos (suscribe)
  constructor(private trackservice: TrackService) { }

  ngOnInit(): void {

    this.showTrackSmall()
    this.showTracksBig()

  }

  ngOnDestroy(): void {

  }
////////////Formas de consumir un API mediante un servicio de track.service.ts//////////////
  //1.- Método implementado como promesa
 async showTrackSmall():Promise<any> {
    //Obtiene un objeto que contiene un array de canciones, para poder entrar al objeto y obtener
    //solo el array de caciones es nesesario modificar el metodo desde el servicio
    this.tracksSmall= await this.trackservice.getAllTracks$()
                    .toPromise()


  }
  //2.- Método implementado como suscripción
  showTracksBig():void {
    this.trackservice.getAllTracksFilters$()
      .subscribe((
          response: TrackModel[]
        )=>{
          this.tracksBig = response
        }
      )
  }
}

