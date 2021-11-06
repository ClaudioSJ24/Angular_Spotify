import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit {

  //@Input()->entrada, permite utilizar la variable title de forma dinamica en los compenetes de @Componet de este arcivo .ts
  @Input() title: String = ''

  @Input() mode:  'small' | 'big' = 'big' //solo puede contener big y small y se inicializa como small

  @Input() dataTracks: Array<TrackModel> = []
  constructor() { }

  ngOnInit(): void {
  }

}
