import express from 'express';
import Band from '../models/band';

const router = express.Router();

// get a list of band fron the db
router.get('/bands', (req, res, next) => {
  res.send({type: 'get'});
});

// add a new band to the db
router.post('/bands', (req, res, next) => {

  Band.create(req.body).then( band => {
    res.send(band);
  }).catch(next);

});

// update a band in the db
router.put('/bands/:id', (req, res, next) => {
  Band.findByIdAndUpdate({_id: req.params.id}, req.body).then( () => {
    Band.findOne({_id: req.params.id}).then(band => {
      res.send(band);
    });
  });
});

// delete a band from the db
router.delete('/bands/:id', (req, res, next) => {
  Band.findByIdAndRemove({_id: req.params.id}).then(band => {
    res.send(band);
  });
});

module.exports = router;
