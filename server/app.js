require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');

const error = require('./middleware/error_middleware');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, useUnifiedTopology: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.json({ message: 'Response from server!' });
});

app.all('*', (req, res, next) => {
  return next(createError(404, 'Oops! Page not found.'));
});

app.use(error);

module.exports = app;
