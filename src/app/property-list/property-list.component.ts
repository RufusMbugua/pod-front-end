import { Component, OnInit } from '@angular/core';
import { Property } from '../property/property';
import { PropertyService } from '../property.service';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {

  properties: Property [];

  constructor(private propertyService: PropertyService){

  }

  ngOnInit() {
    this.get();
  }


  get() {
    this.propertyService.get().subscribe(
      res => {
        this.properties = res;
        console.log(this.properties)
      },
      err => {
        if (err.statusText === 'Unauthorized' || err.status === false || err.message === 'Ooops something went Wrong.') {
          console.log(err.message)
        }
      }
    );
  }

}
