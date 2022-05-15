const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  destination: {type: String, required: true},
  img: String,
  languages: [String],
  population: Number,
  yearTraveled: Number,
  funFact: String,
  knownFor: [String],
  thingsToDo: String
});

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
