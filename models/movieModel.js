const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  budget: Number,
  genres: [{
    id: Number,
    name: String
  }],
  homepage: String,
  id: Number,
  keywords: [{
    id: Number,
    name: String
  }],
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  production_companies: [{
    name: String,
    id: Number
  }],
  production_countries: [{
    iso_3166_1: String,
    name: String
  }],
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: [{
    iso_639_1: String,
    name: String
  }],
  status: String,
  tagline: String,
  title: String,
  vote_average: Number,
  vote_count: Number
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;