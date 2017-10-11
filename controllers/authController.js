// Import express package
const express = require("express")


// Establish router via express
var router = express.Router();

router.get('/account', ensureAuthenticated, function (req, res) {
    res.render('account', { user: req.user });
});

router.get('/login', function (req, res) {
    res.render('login', { user: req.user });
});

router.get('/auth/google',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });

    
// GET /auth/google/return
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/auth/google/return',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});


module.exports = router;