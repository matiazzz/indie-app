'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;

var BandSchema = new Schema({
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

var Band = _mongoose2.default.model('band', BandSchema);

module.exports = Band;