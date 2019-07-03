import { Component, OnInit } from '@angular/core';
import { Property } from './property';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {

  properties: Property []
  constructor() { }

  ngOnInit() {
    this.properties = [
      {
        name: 'Nairobi Home',
        description: 'Words'
      },
      {
        name: 'Rongai Home',
        description: 'Words'
      }
    ];
  }

}
