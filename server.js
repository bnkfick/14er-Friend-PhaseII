// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var authRoutes = require("./routes/auth-routes");
const keys = require("./config/keys");
const cookieSession = require("cookie-session");
const passport = require('passport');
require("dotenv").config();
console.log(keys);


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

//for user login oauth
var passportSetup = require('./config/passport-setup');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

//set view engine to ejs
app.set('view engine', 'ejs');

// set up session cookies
app.use(cookieSession({
  //maxAge is dummy/example
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//app.use(expressSession({secret: 'mySecretKey'}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/auth', authRoutes);

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/mountain-api-routes.js")(app);
require("./routes/mtn-routes-api-routes.js")(app);
require("./routes/auth-routes.js")(app);
require("./routes/auth-routes.js")(app);
require("./routes/user-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app

//BE SURE TO REMOVE {FORCE:TRUE}!!!
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});