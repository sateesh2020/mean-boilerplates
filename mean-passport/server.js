var express             = require('express'),
    app                 = express(),
    passport            = require('passport');
var bodyParser          = require('body-parser'); 
var bson                = require('bson');
var mongoose            = require('mongoose');
var dbName              = 'spboassesment';
var dbUrl               = 'mongodb://127.0.0.1:27017/'+dbName;
var fs                  = require('fs')
var morgan              = require('morgan')
// Create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'})

/****************
Controllers
****************/

/**************** 
Connecting to DB
*****************/
mongoose.connect(dbUrl);
var db                  = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Connected to DB @ '+dbUrl);
});
/**************** 
Activating Express Server
*****************/
var server              = app.listen(3000, function () {
  var host              = server.address().address;
  var port              = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});
app.use(express.static('client'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
// Setup the logger
app.use(morgan('combined', {stream: accessLogStream}))
require('./server/config/passport')();
require('./server/config/routes')(app);