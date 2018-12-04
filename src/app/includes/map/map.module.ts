import { NgModule }  from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
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
    })
  ],
  providers: [
    MapService,
    CamelizePipe
  ]
})
export class MapModule {}