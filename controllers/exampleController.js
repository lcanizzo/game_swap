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
    console.log("Working Login")
})

//Home/Search Page
router.post("/search", function(request, response){
    console.log("Working Search")
})

//Profile Page
router.post("/username/:id", function(request, response){
    console.log("Working Profile")
})

//Add Game Page
router.post("/add/:username/:id", function(request, response){
    console.log("Working Add Game")
})

// Export routes for server.js to use.
module.exports = router