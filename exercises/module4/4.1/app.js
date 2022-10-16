var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var addMovieRouter = require('./routes/addMovies');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public'))); je n'utiliserai pas de serv de fichier statiques

app.use('/', indexRouter);
app.use('/add-movie', addMovieRouter);

module.exports = app;
