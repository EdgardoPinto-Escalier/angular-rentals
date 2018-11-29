import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA }  from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./includes/header/header.component";
import { RentalComponent } from './rental/rental.component';
import { RentalListComponent } from './rental/rental-list/rental-list.component';
import { RentalListItemComponent } from './rental/rental-list-item/rental-list-item.component';

const routes: Routes = [
  {path: '', component: RentalComponent}
]

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, RentalComponent, RentalListComponent, RentalListItemComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule {}
