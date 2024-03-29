import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {

  //Input envia informacion de un componente padere a un componente hijo
  @Input() tracks: TrackModel [] = []
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  constructor() { }

  ngOnInit(): void {
    const { data }: any = (dataRaw as any).default
    this.tracks = data
  }

  //permite ordenar los elementos del objeto tracks de forma accendente o descendente mediante el pipe orderList.pipe.ts
  changeSort(property: string):void{

    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order=== 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort)
  }

}
