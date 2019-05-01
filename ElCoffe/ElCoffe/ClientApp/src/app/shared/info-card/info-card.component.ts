import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent implements OnInit {

  @Input() title = "";
  @Input() description = ""
  @Input() buttonText = ""
  @Input() buttonURL = ""
  @Input() type = "black"
  @Output() buttonClick: EventEmitter<any> = new EventEmitter() 

  constructor() { }

  ngOnInit() {
  }

  buttonFunc() {
    this.buttonClick.emit(null);
  }

}
