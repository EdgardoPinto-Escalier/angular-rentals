import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model';

@Injectable()
export class RentalService {
  
  private rentals: Rental[] = [{
    id: "1",
    title: "Centric apartment well located",
    city: "Madrid",
    street: "Calle del arpa 132",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice and spacious apartment.",
    dailyRate: 34,
    shared: false,
    createdAt: "30/11/2018"
  },
  {
    id: "2",
    title: "Amazing new apartment",
    city: "Paris",
    street: "Rua Le Roche 441",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Great deal, very nice new apartment.",
    dailyRate: 51,
    shared: false,
    createdAt: "27/11/2018"
  },
  {
    id: "3",
    title: "Small but cozy apartment",
    city: "Berlin",
    street: "144 Höffman st",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very nice and spacious apartment.",
    dailyRate: 30,
    shared: false,
    createdAt: "25/11/2018"
  },
  {
    id: "4",
    title: "Well located apartment in the city",
    city: "Malmö",
    street: "Lilla Vägen 144",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Opportunity nice apartment in the center of Malmö.",
    dailyRate: 59,
    shared: false,
    createdAt: "29/11/2018"
  }];

  public getRentals():   Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable((observer) => {

      setTimeout(() => {
        
        observer.next(this.rentals);
      }, 1000);

      setTimeout(() => {
        
        observer.error("This is an Error!");
      }, 2000);

      setTimeout(() => {
        
        observer.complete();
      }, 3000);
      
      
    });
    
    return rentalObservable;
  }
}