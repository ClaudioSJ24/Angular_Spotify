import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  {map, mergeMap,tap, catchError} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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
    return this.httpClient.get(`${this.URL}/tracks`)//modificando ruta de API para poder obtener el error en el pipe catchError
    .pipe(
      /**
       * map(({ data }: any) =>{//Utilizando destructuracion de tipeScript
        return data.reverse()//Array invertido
      }),
       */
      tap(data => console.log('Datos', data)),//para poder mostrar un mensaje desde la consola
      mergeMap(({data}: any) => this.skipById(data, 2)//mostrar canciones exepto la cancion con id 2
      ),
      catchError((error) =>{
        //destructuracion de javaScript para solo obtener las propiedades status y statusText del la variable error
        const { status, statusText} = error
        console.log('Error algo ocurrio en los filtros anteriores (pipe, tap, megeMap) revisa¡¡¡¡', error);
        return of([])//retorna un observable vacio
       }
      )
    )

  }
}
