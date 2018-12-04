import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MapModule } from '../includes/map/map.module';

import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentalService } from './shared/rental.service';
import { RentalDetailsComponent } from './rental-details/rental-details.component';

import { UppercasePipe } from '../includes/pipes/uppercase.pipe';

const routes: Routes = [
  { path: 'rentals', 
    component: RentalComponent,
    children: [
      { path: '', component: RentalListComponent },
      { path: ':rentalId', component: RentalDetailsComponent }
    ]
  }
]

@NgModule({
  declarations: [
    RentalListComponent, 
    RentalListItemComponent,
    RentalComponent,
    RentalDetailsComponent,
    UppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MapModule
  ],
  providers: [RentalService]
})
export class RentalModule {}