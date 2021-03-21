const express = require('express');
const app = express();
const helmet = require('helmet');
const morgan = require('morgan');
const createError = require('http-errors');
const authRouter = require('./routes/authRoutes');
const itemRouter = require('./routes/itemRoutes');
const connectDB = require('./config/db');

const error = require('./middleware/error_middleware');

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true, useUnifiedTopology: true }));
app.use(morgan('dev'));

connectDB();

app.use('/api/v1/items', itemRouter);
app.use('/api/v1/users', authRouter);

app.all('*', (req, res, next) => {
  return next(createError(404, 'Oops! Page not found.'));
});

app.use(error);

module.exports = app;
