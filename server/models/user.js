const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Here we create the rental Schema
const userSchema = new Schema({
  username: {
    type: String,
    min: [4, 'Too short, min allowed is 4 characters.'],
    max: [32, 'Too long, max allowed is 32 characters.']
  },
  email: {
    type: String,
    min: [4, 'Too short, min allowed is 4 characters.'],
    max: [32, 'Too long, max allowed is 32 characters.'],
    unique: true,
    lowercase: true,
    required: 'The Email field is required!',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  password: {
    type: String,
    min: [4, 'Too short, min allowed is 4 characters.'],
    max: [32, 'Too long, max allowed is 32 characters.'],
    required: 'The password field is required.'
  },
  rentals: [{type: Schema.Types.ObjectId, ref: 'Rental'}]
});

module.exports = mongoose.model('User', userSchema );