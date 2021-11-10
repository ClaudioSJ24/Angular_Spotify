import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {map, mergeMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.model';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  //Variable de solo lectura que permite accedera a las constantes declaradas en el archivo environment.ts
  private readonly URL = environment.api

  constructor(private httpClient: HttpClient) {

  }

  private skipById(listTracks: TrackModel[], id: number):Promise<TrackModel[]>{
    return new Promise ((resolve, reject) =>{
      const listTmp = listTracks.filter(a => a._id != id)
      resolve(listTmp)
    })
  }

  //Método que obtiene las canciones desde el API utilizada
  getAllTracks$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(//pipe Obtiene el objeto de la API y con map se obtienen las propiedades del objeto(el array)
      map((dataRaw: any) =>{//dataRaw es el objeto que contiene el array de canciones
        return dataRaw.data //data el el array de canciones

      })
    )

  }

  getAllTracksFilters$(): Observable<any>{
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      /**
       * map(({ data }: any) =>{//Utilizando destructuracion de tipeScript
        return data.reverse()//Array invertido
      }),
       */
      mergeMap(({data}: any) => this.skipById(data, 1)
        //mostrar canciones exepto la cancion con id 2
      )
    )

  }
}
