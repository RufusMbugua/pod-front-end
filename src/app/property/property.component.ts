import { Component, OnInit, Input } from '@angular/core';
import { PropertyService } from '../property.service';
import { Property } from './property';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  constructor(private propertyService: PropertyService) { }

  @Input() property: Property [];




  ngOnInit() {
  }

}
