const express = require('express'); // Here we import express inside node.js
const mongoose = require('mongoose'); // Import Mongoose
const config = require('./config/dev'); // Import DB configuration details

mongoose.connect(config.DB_URI, {useNewUrlParser: true});

const app = express();

app.get('/rentals', function(req, res) {
  res.json({'success': true});
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function() {
  console.log('Listening to port 3001');
});