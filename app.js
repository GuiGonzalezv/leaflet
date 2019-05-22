var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')


//Setando pasta de Views
app.set('views', path.join(__dirname, 'views'))

//Setando tipo de view
app.set('view engine', 'ejs');

//setando body-parser e cookieParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//Setando pasta public
app.use(express.static(__dirname + '/public'));


app.use('/', require('./routes/index'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});