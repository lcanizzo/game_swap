// Import express package
var express = require("express")
// Establish router via express
var router = express.Router();

// Import the model to use its database functions.
var game = require("../models/exampleModel.js");
// Create all our routes and set up logic within those routes where required.
//Login Page
router.get("/", function(request, response){
    response.render("index")
    console.log("Working")
})

//Home/Search Page

//Profile Page

//Add Game Page

// Export routes for server.js to use.


module.exports = router