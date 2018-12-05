import { Component, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'rentals-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  @Input() location: string;
  isPositionError: boolean = false;

  lat: any;
  lng: any;

  constructor(private mapService: MapService) { }

  mapReadyHandler() {
    this.mapService.getMapGeoLocation(this.location).subscribe(
    (coordinates) => {
      this.lat = coordinates.lat;
      this.lng = coordinates.lng;
    }, () => {
      this.isPositionError = true;
    });
  }
}
