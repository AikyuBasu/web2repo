const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const filmsRouter = require('./routes/films');
const authsRouter = require('./routes/auths');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/index', indexRouter);
app.use('/films', filmsRouter);
app.use('/auths', authsRouter);
module.exports = app;
