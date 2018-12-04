import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  private geoCode;

  public geocodeLocation(location: string): Observable<any> {
    this.geoCode = new (<any>window).google.maps.Geocoder();
    return new Observable((observer) => {
      this.geoCode.geocode({address: location}, (result, status) => {
        if(status === 'OK') {
          const geometry = result[0].geometry.location;
          observer.next({lat: geometry.lat(), lng: geometry.lng()});
        } else {
          observer.error('Unable to find the exact location...');
        }
      });
    });
  }
}