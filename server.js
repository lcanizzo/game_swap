// Dependencies
// =========================================
const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');
const passport = require('passport');
const util = require('util');

var GoogleStrategy = require('passport-google').Strategy();

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete Google profile is serialized
//   and deserialized.
passport.serializeUser(function(user, done) {
    done(null, user);
});
  
passport.deserializeUser(function(obj, done) {
    done(null, obj);
});

// Use the GoogleStrategy within Passport.
passport.use(new GoogleStrategy({
    returnURL: 'http://localhost:3000/auth/google/return',
    realm: 'http://localhost:3000/'
  },
  function(identifier, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's Google profile is returned to represent the logged-in user.
      // TO DO: Associate account with a user record in your database and return that user instead.
      profile.identifier = identifier;
      return done(null, profile);
    });
  }
));


// Setup App
// =========================================
var app = express();
var PORT = process.env.PORT || 3000;

// Use Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.logger());
app.use(express.cookieParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

// Routing 
// Import routes from Controllers and give the server access to them.
// ============================================================
var routes = require("./controllers/controller.js")
var authRoutes = require("./controllers/authController.js")

app.use("/", routes);
app.use("/", authRoutes);


// Listen
// ======================================
app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
});