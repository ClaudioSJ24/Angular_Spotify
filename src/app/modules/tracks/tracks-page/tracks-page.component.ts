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
    /**
     *
     * Acceder a al informacion de dataRaw de una mamera mas limpia
    const { data }: any = (dataRaw as any).default

    this.mockTracksList = data

  }
     * */
    const observable1$ = this.trackservice.dataTracksSmall$
      //Con suscribe se obtienen los datos que contiene el servicio de trackservice en la variable de tipo observable dataTrackSmall
      .subscribe(response => {
        //Con variable response se asignan los valores contenidos en la variable observable1 a las variables trackSmall y trackBig para mostrar su contenido
        this.tracksSmall = response
        this.tracksBig = response
        console.log('obteniendo datos atraves de una suscripcion', response);
      })

      const observable2$ = this.trackservice.dataTracksBig$
      .subscribe(response => {
        //Agregando nueva musica a trackSmall, ... this.tracksSmall ->A lo que ya tienes, ... response --> agregale esta musica
        this.tracksSmall = [... this.tracksSmall, ... response]
        console.log('Agregando cancion random a trackSmall', response)
      })

      this.listObservers$ = [observable1$, observable2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(unsubscribe => unsubscribe.unsubscribe())
  }
}

