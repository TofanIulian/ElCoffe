import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
