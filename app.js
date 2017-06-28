
require('dotenv').config(); // looks for environment variable first. So this must go at the very top of the app.js file.
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/index');
var session = require('express-session');
var passport = require('passport');
var auth = require('./routes/auth');
require('./config/database-connection')(); //mongoose is configured at this location instead of inside this app.js


// need to wrap this seeder in an if statement because it's checking true or false.
// we NEVER upload .env stuff to github - DELETE or COMMENT OUT!!!
//  if(process.env.SEED_DATABASE === "true"){
//    require('./config/database-seeder')();
//  }

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const isProd = process.env.NODE_ENV === 'production';
const clientPath = isProd ? 'client/build' : 'client/public';

if (isProd) {
  app.use(express.static(clientPath));
}


routes(app);

app.get('/test', function(req,res){
  res.json({message: "App functioning properly"})
});


app.use(session({
 secret: 'blahblahblah'
})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(session({
 cookie: {
   maxAge: 60000
 }
}));
require('./config/passport')(passport); // pass passport for configuration
require('./routes/auth')(app, passport); // load our routes and pass in our app and fully configured passport


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
      .send({
        message: err.message,
        error: err
      })
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
    .send({
      message: err.message,
      error: {}
    })
});

// serve client path (from the client folder - the bundle folder that gets created)
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, clientPath, 'index.html'));
});

module.exports = app;
