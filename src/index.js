/* @flow */
import express from 'express';
import path from 'path';
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

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// error handling middleware
app.use((err, req, res, next) => {
  //console.log(err);
  res.status(442).send({error: err.errors});
});

app.use('/api', routes);

app.use('/dist', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));

app.use(express.static(path.join(__dirname, '../src')));

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

// listen for requests
app.listen(process.env.port || 3000, () => {
  console.log('Server is listening');
});
