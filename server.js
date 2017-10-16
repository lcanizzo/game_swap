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
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

passport.use(new FacebookStrategy({
    clientID: 209804176226433,
    clientSecret: "c4f0e33d82134262ac76e68dcf875359",
    callbackURL: "https://sleepy-oasis-78182.herokuapp.com/auth/facebook/callback"
    // callbackURL: "http://localhost:3000/auth/facebook/callback"    
},
    function (accessToken, refreshToken, profile, done) {
        console.log("Looking for profile: " + JSON.stringify(profile, null, 2));
        user.findByFacebook(profile.id, function (data) {
            console.log("Returned User", data);
            if (data.length < 1) {
                console.log("No User Found, Making New User");
                var columns = [`name`, `facebook_id`];
                var values = [profile.displayName, profile.id];
                console.log;
                user.create(columns, values, function (data) {
                    return done(null, data);
                });
            }
            else {
                console.log("Found User: ", data);
                return done(null, data);
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
app.listen(PORT, function () {
    console.log("Listening on Port: " + PORT)
});