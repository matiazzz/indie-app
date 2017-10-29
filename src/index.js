/* @flow */

import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';

// import routes
import routes from './routes/api';
// import mongoose
import mongoose from 'mongoose';

// set up express app
const app = express();
const upload = multer();

// connect to mongodb
const promise = mongoose.connect('mongodb://localhost/bandgo', {
  useMongoClient: true,
});
promise.then(db => {});

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// error handling middleware
app.use((err, req, res, next) => {
  //console.log(err);
  res.status(442).send({error: err.errors});
});

app.use('/api', routes);

// listen for requests
app.listen(process.env.port ||3000, () => {
  console.log('Server is listening');
});
