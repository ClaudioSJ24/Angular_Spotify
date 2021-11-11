import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listSearch: TrackModel[]=[]
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  receibeData(event:string):void{
    //Obtienes el termino cuando contiene 4 caracteres
    console.log('Estoy en el componente padre y vengo del componente hijo',event)
    this.searchService.searchTracks$(event)
    .subscribe(({ data }) =>{
     // console.log('respuesta--->',data)
      this.listSearch = data//para mostrar el resultado es nesesario llenar la lista en el history-page.component.html
    })
  }

}
