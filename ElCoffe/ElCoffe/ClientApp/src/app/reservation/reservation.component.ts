import { Component, OnInit, Input } from '@angular/core';
import { CdkDrag } from '../../../node_modules/@angular/cdk/drag-drop';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('cdkDragBoundary')
  boundaryElementSelector: string

  a: CdkDrag

}
