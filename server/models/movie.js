const mongoose = require('mongoose');


const Movie = new mongoose.Schema({
  title: String,
  year: Number,
  imdb: String
});

module.exports = mongoose.model('Movie', Movie);