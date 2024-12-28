const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  imdbID: {
    required: false,
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  runTime: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  writer: {
    type: String,
    required: false,
  },
  actors: {
    type: String,
    required: false,
  },
  plot: {
    type: String,
  },
  images: {
    required: false,
    type: Array,
  },
  imdbRating: {
    type: String,
  }
});

module.exports = mongoose.model("Data", dataSchema);
