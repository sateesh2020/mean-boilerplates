var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');
var passport	  = require('passport');
var config      = require('./server/config/database'); // get db config file
var port 	      = process.env.PORT || 3100;

// get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log to console
app.use(morgan('dev'));

// Use the passport package in our application
app.use(passport.initialize());

// demo Route (GET http://localhost:8080)
app.get('/', function(req, res) {
  res.send('Hello! The API is at http://localhost:' + port + '/api');
});

// connect to database
mongoose.connect(config.database);
// pass passport for configuration
require('./server/config/passport')(passport);
// pass app for route configuration
require('./server/config/routes')(app);
// Start the server
app.listen(port);
console.log('There will be dragons: http://localhost:' + port);
