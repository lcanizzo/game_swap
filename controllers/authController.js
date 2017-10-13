// Import express package
const express = require("express")
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const currentuserID = require('../config/currentuser.js');

// Establish router via express
var router = express.Router();

// Redirect the user to Facebook for authentication.  When complete,
// Facebook will redirect the user back to the application at
//     /auth/facebook/callback
router.get('/auth/facebook', passport.authenticate('facebook'));

// Facebook will redirect the user to this URL after approval.  Finish the
// authentication process by attempting to obtain an access token.  If
// access was granted, the user will be logged in.  Otherwise,
// authentication has failed.
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/login' }),
    function (req, res) {
        console.log("Auth user", req.user);
        var user = {user: req.user[0]};
        var string = encodeURIComponent(req.user[0].id);
        currentuserID.currentID = req.session.passport.user[0].id;
        console.log("Session User ID", currentuserID.currentID);

        res.redirect('/search?'+ req.user[0].id);
});


module.exports = router;