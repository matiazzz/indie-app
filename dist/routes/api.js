'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _band = require('../models/band');

var _band2 = _interopRequireDefault(_band);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

// get a list of band fron the db
router.get('/bands', function (req, res, next) {
  res.send({ type: 'get' });
});

// add a new band to the db
router.post('/bands', function (req, res, next) {

  _band2.default.create(req.body).then(function (band) {
    res.send(band);
  }).catch(next);
});

// update a band in the db
router.put('/bands/:id', function (req, res, next) {
  _band2.default.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
    _band2.default.findOne({ _id: req.params.id }).then(function (band) {
      res.send(band);
    });
  });
});

// delete a band from the db
router.delete('/bands/:id', function (req, res, next) {
  _band2.default.findByIdAndRemove({ _id: req.params.id }).then(function (band) {
    res.send(band);
  });
});

module.exports = router;