// app.configure(function() {
//     app.use(express.static('public'));
//     app.use(express.cookieParser());
//     app.use(express.bodyParser());
//     app.use(express.session({ secret: 'keyboard cat' }));
//     app.use(passport.initialize());
//     app.use(passport.session());
//     app.use(app.router);
// });

// var session = require("express-session"),
// bodyParser = require("body-parser");

// app.use(express.static("public"));
// app.use(session({ secret: "cats" }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(passport.initialize());
// app.use(passport.session());

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport');

passport.use(new GoogleStrategy({
    clientID: "261185968769-bjg3u9ohp2gg4mb0vfulpn8te5s1bigi.apps.googleusercontent.com",
    clientSecret: "pvkM3m9hOmPossryAt8f2cNP",
    callbackURL: "http://www.example.com/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
passport.authenticate('google', { failureRedirect: '/login' }),
function(req, res) {
  // Successful authentication, redirect home.
  res.redirect('/');
});