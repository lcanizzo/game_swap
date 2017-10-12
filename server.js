// Dependencies
// =========================================
const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require("express-session");

// Setup App
// =========================================
var app = express();
var PORT = process.env.PORT || 3000;


// ========================================
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use(new FacebookStrategy({
    clientID: 209804176226433,
    clientSecret: "c4f0e33d82134262ac76e68dcf875359",
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate( function(err, user) {
      if (err) { return done(err); }
      console.log('Deserialize user called.');
      return done(null, { firstName: 'Foo', lastName: 'Bar' });
    });
    console.log('Deserialize user called.');    
    return done(null, { firstName: 'Foo', lastName: 'Bar' });
  }
));


// Use Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(session({ secret: "cats" }));
app.use(passport.initialize());
app.use(passport.session());

// Routing 
// Import routes from Controllers and give the server access to them.
// ============================================================
var routes = require("./controllers/controller.js");
var authRoutes = require("./controllers/authController.js")

app.use("/", routes);
app.use("/", authRoutes);

// Listen
// ======================================
app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
});