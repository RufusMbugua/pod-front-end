import { Component, OnInit } from '@angular/core';
import { Property } from '../property/property';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Property [];
  constructor() { }

  ngOnInit() {
    this.properties = [
      {
        name: 'Test',
        description: 'Words'
      },
      {
        name: 'Rongai Home',
        description: 'Words'
      }
    ];
  }

}
