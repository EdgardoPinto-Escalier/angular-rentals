import { NgModule }  from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { MapService } from './map.service';
import { CamelizePipe } from 'ngx-pipes';
import { mapApi } from '../../../environments/mapApi';


@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: mapApi.apiKey
    }),
    CommonModule
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule {}