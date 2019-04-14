import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-description-card',
  templateUrl: './small-description-card.component.html',
  styleUrls: ['./small-description-card.component.css']
})
export class SmallDescriptionCardComponent implements OnInit {

  imgsrc = `https://picsum.photos/900/500?random&t=${Math.random()}`;
  title = "Titlu smecher";
  description = "Orice Pizza Medie (pentru 2 persoane) din categoriile Famous/Traditional  + 2 inghetate Ben&Jerrys 100ml "
  constructor() { }

  ngOnInit() {
  }

}
