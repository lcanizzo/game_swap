// Import express package
var express = require("express")
//Importing apiSearch.js
var gameSearch = require("../config/apiSearch.js")
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
    response.render("search");
    console.log("Working Search");
});

router.post("/search", function(request, response){
    var locationID = 1  // TO DO: Make variable dynamic based on request
    console.log("Location ID: ", locationID);

    user.allBy( "locations_id", locationID, function(data) {

        console.log("Post Result:" , data);
        var hbsObject = {
            users: data
        };
        console.log(hbsObject);
        response.render("search", hbsObject);
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

//Post game search
//*****************************************NEEDS TO BE TESTED TO MAKE SURE CALLING CORRECTLY*************************/
router.post("/gamesearch/:string", function(request, response){
    var string = request.params.string
    //gameSearch(string)
    console.log(gameSearch(string))

})

// Export routes for server.js to use.
module.exports = router;