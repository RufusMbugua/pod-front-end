import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class PropertyService {
  headers: any;
  options: any;
  propertyUrl: string = environment.apiUrl + 'api/property/';
  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.propertyUrl).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
