var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public'))); => c'est lui qui s'occupe de générer un serveur de fichiers statiques. On ne s'en
// sert pas dans cet exercice car dans cet exo les RESTful API n'en possèdent pas

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
