import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CamelizePipe } from 'ngx-pipes';

@Injectable()
export class MapService {

  private geoCode;
  private locationCache: any = {};

  constructor(private camelizePipe: CamelizePipe) {}

  private camelize(value: string): string {
    return this.camelizePipe.transform(value);
  }

  private cacheLocation(location: string, coordinates: any) {
    this.locationCache[this.camelize(location)] = coordinates;
  }

  private isCached(location): boolean {
    return this.locationCache[this.camelize(location)];
  }

  private geocodeLocation(location: string): Observable<any> {
    this.geoCode = new (<any>window).google.maps.Geocoder();
    if(!this.geoCode) { this.geoCode = new (<any>window).google.maps.Geocoder(); }

    return new Observable((observer) => {
      this.geoCode.geocode({address: location}, (result, status) => {
        if(status === 'OK') {
          const geometry = result[0].geometry.location;
          const coordinates = {lat: geometry.lat(), lng: geometry.lng()};
          this.cacheLocation(location, coordinates);
          observer.next(coordinates);
        } else {
          observer.error('Unable to find the exact location...');
        }
      });
    });
  }

  public getMapGeoLocation(location: string): Observable<any> {
    
    if(this.isCached(location)) {
      return of(this.locationCache[this.camelize(location)]);
    } else {
      return this.geocodeLocation(location);
    } 
  }
}