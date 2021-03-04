const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const pointSchema = new mongoose.Schema({
  timestamp: Number,
  coords: {
    latitude: Number,
    longitude: Number,
    altitude: Number,
    accuracy: Number,
    heading: Number,
    speed: Number,
  },
});

const trackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    default: '',
  },
  locations: [pointSchema],
});

// add plugin that converts mongoose to json
trackSchema.plugin(toJSON);
trackSchema.plugin(paginate);

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
