import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  listSearch$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  receibeData(event:string):void{
    //Obtienes el termino cuando contiene 4 caracteres
    console.log('Estoy en el componente padre y vengo del componente hijo',event)
    this.listSearch$ = this.searchService.searchTracks$(event)

  }

}
