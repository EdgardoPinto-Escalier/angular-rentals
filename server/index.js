const express = require('express'); // Here we import express inside node.js
const mongoose = require('mongoose'); // Import Mongoose
const bodyParser = require('body-parser'); // Import body parser
const config = require('./config/dev'); // Import DB configuration details
const FakeData = require('./fakeData');
const Rental = require('./models/rental'); // Import the Schema

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');


mongoose.connect(config.DB_URI, {useNewUrlParser: true}).then(() => {
  fakeData = new FakeData();
  fakeData.seedTheDb();
});

const app = express();

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('The Server is running on port 3001, Congratulations!!!');
});