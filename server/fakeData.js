const Rental = require('./models/rental');

class FakeData {
  constructor() {
    this.rentals = [{
      title: "Nice appartment with ocean views!",
      city: "Barcelona",
      street: "Carrer Arago 100",
      category: "apartment",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 4,
      shared: true,
      description: "Very nice apartment in the center of Barcelona city.",
      dailyRate: 65
      },
      {
      title: "Modern apartment in the center",
      city: "Madrid",
      street: "Calle the la Inmaculada 52",
      category: "apartment",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 1,
      shared: false,
      description: "Very nice apartment in center of Madrid",
      dailyRate: 36
      },
      {
      title: "Old house in the middle of nature!",
      city: "Valencia",
      street: "Carrer de L'Anoia 49",
      category: "house",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 5,
      shared: true,
      description: "Very nice house with spanish style close to the mountains.",
      dailyRate: 85
    }]
  }

  async cleanDb() {
    await Rental.deleteMany({});
  }

  pushRentalsToDB() {
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);
      newRental.save();
    })
  }

  seedTheDb() {
    this.cleanDb();
    this.pushRentalsToDB();
  }
}

module.exports = FakeData;