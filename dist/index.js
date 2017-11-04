'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _api = require('./routes/api');

var _api2 = _interopRequireDefault(_api);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// set up express app


// import routes
var app = (0, _express2.default)();
// import mongoose

var upload = (0, _multer2.default)();

// connect to mongodb
var promise = _mongoose2.default.connect('mongodb://localhost/bandgo', {
  useMongoClient: true
});

promise.then(function (db) {});

app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

// error handling middleware
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(442).send({ error: err.errors });
});

app.use('/api', _api2.default);

app.use('/dist', _express2.default.static('dist'));
app.use('/node_modules', _express2.default.static('node_modules'));

app.use(_express2.default.static(_path2.default.join(__dirname, '../src')));

app.get('/', function (req, res) {
  res.sendFile(_path2.default.join(__dirname + '/index.html'));
});

// listen for requests
app.listen(process.env.port || 3000, function () {
  console.log('Server is listening');
});