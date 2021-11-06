import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //Un observable siempre tiene que tener un subcribe para poder acceder a los datos que estan contenidos en el

  dataTracksSmall$: Observable<TrackModel[]> = of([])//Forma de iniciar un observable
  dataTracksBig$: Observable<any> = of ([])

  constructor() {
    const {data}:any = (dataRaw as any).default
    this.dataTracksSmall$ = of(data)//asignando datos a un obsevable
    this.dataTracksBig$ = new Observable((observer) => {
      //Canción de ejemplo para agregar a dataTracksSmall
      const trackExample: TrackModel = {
        _id: 10,
        name: 'Banda',
        album: 'La arrolladora',
        url: '',
        cover: ''
      }
      //agregar musica en despues de tres segundos
      setTimeout(() =>{
        observer.next([trackExample])
      }, 3000)
    })
  }
}
