import { Injectable } from '@angular/core';

@Injectable()
export class RentalService {
  
  private rentals: any[] = [{
    id: 1,
    title: "Centric apartment well located",
    city: "Madrid",
    street: "Calle del arpa 132",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    description: "Very nice and spacious apartment.",
    dailyRate: 34,
    shared: false,
    createdAt: "30/11/2018"
  },
  {
    id: 2,
    title: "Amazing new apartment",
    city: "Paris",
    street: "Rua Le Roche 441",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    description: "Great deal, very nice new apartment.",
    dailyRate: 51,
    shared: false,
    createdAt: "27/11/2018"
  },
  {
    id: 3,
    title: "Small but cozy apartment",
    city: "Berlin",
    street: "144 Höffman st",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    description: "Very nice and spacious apartment.",
    dailyRate: 30,
    shared: false,
    createdAt: "25/11/2018"
  },
  {
    id: 4,
    title: "Well located apartment in the city",
    city: "Malmö",
    street: "Lilla Vägen 144",
    category: "Apartment",
    image: "http://via.placeholder.com/350x250",
    description: "Opportunity nice apartment in the center of Malmö.",
    dailyRate: 59,
    shared: false,
    createdAt: "29/11/2018"
  }];

  public getRentals(): any[] {
    return this.rentals;
  }
}