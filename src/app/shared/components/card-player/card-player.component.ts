import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
//import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {

  //Input() es la forma en el que un componente padre (section-generica) le manda valores a un componente hijo(card-player)

  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TrackModel = {name:'', album: '', cover: '',url: '', _id: 0 }
//Una inyeccion de dependecia o servicio se hace a traves de contructor
  constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  //utilizacion del servicio
  sendPlay( track: TrackModel): void{
   // console.log('Enviando cancion al reproductor....'+track)
    //Se utiliza un metodo emit por que se emite una propiedad de la variable
    //callback de multimedia.services.ts
    //this.multimediaService.callback.emit(track)

    this.multimediaService.trackInfo$.next(track)//envia informacion de la cancion

  }

}
