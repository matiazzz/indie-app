import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BandSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required."]
  },
  genre: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
});

const Band = mongoose.model('band', BandSchema);

module.exports = Band;
