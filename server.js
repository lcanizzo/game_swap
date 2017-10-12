``// Dependencies
// =========================================
const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require("express-session");
const user = require('./models/user.js');

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
      console.log("Looking for profile id: " + profile.id);
      console.log("Profile: " + JSON.stringify(profile, null, 2));
    user.findOne(profile.id, function(user){
        if (!user){
            console.log("No User Found");
        }
        else
        {
            console.log("Found User: ", user);
            return done(null, user);
        }
    });
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