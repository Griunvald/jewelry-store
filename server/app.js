require('dotenv').config();
const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');
const authRouter = require('./routes/authRoutes');
const connectDB = require('./config/db');

const items = require('./data/items');
const error = require('./middleware/error_middleware');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, useUnifiedTopology: true }));
app.use(morgan('dev'));

connectDB();

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.get('/api/items/:id', (req, res) => {
  const item = items.find((item) => item.id == req.params.id);
  res.json(item);
});

app.use('/api/v1/users', authRouter);

app.all('*', (req, res, next) => {
  return next(createError(404, 'Oops! Page not found.'));
});

app.use(error);

module.exports = app;
