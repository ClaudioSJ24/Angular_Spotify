import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {

  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined)

  public audio!: HTMLAudioElement
  callback: EventEmitter<any> = new EventEmitter<any>()

  constructor() {
    this.audio = new Audio()
    this.trackInfo$.subscribe( responseOk => {
     if(responseOk){

      this.setAudio(responseOk)
     }

    })
   }

   private listenAllEvents(): void{

   }

   public setAudio(track: TrackModel): void{
    console.log('obteniendo audio desde servicio', track)
    this.audio.src = track.url
    this.audio.play()


   }
}
