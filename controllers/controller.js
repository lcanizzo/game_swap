// Import express package
var express = require("express")
// Establish router via express
var router = express.Router();

// Import the model to use its database functions.
var user = require("../models/user.js");
var game = require("../models/game.js");
// Create all our routes and set up logic within those routes where required.
//Login Page
router.get("/", function(request, response){
    response.render("index", {layout: 'landing'})
    console.log("Working Login")
})

//Home/Search Page
router.get("/search", function(request, response){
    //render to search handlebar
    response.render("index");
    console.log("Working Search");
});

router.post("/search", function(request, response){
    var locationID = 3; // TO DO: Make variable dynamic based on request
    console.log("Location ID: ", locationID);

    user.allBy("locations_id", locationID ,function(data) {
        console.log("Post Result:" , data);
        var hbsObject = {
            users: data
        };
        console.log(hbsObject);
        response.render("index", hbsObject);
      });
})

//Profile Page
router.get("/username/:id", function(request, response){
    //render to profile handlebar
    response.render("index")
    console.log("Working Profile")
})

//Add Game Page
router.get("/add/:username/:id", function(request, response){
    //render to add game handlebar
    response.render("index")
    console.log("Working Add Game")
})

// Export routes for server.js to use.
module.exports = router;