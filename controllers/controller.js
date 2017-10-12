//require igdb npm package
const igdb = require('igdb-api-node').default;

//set api key to variable 
const client = igdb('be1ea7dccb14bcf3ae57b1e16d62cb74');


// Import express package
var express = require("express")
//Importing apiSearch.js
var gameSearch = require("../models/search.js")
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

// Home/Search Page
router.get("/search", function(request, response){
    //render to search handlebar
    response.render("search");
});

router.post("/search", function(request, response){
    var locationID = request.body.location;
    response.redirect("/search/"+locationID);
});

router.get("/search/:locationID", function(request, response){
    var locationID = request.params.locationID;
    
    user.allBy( "locations_id", locationID, function(data) {
        // console.log("Post Result:" , data);
        var hbsObject = {
            users: data
        };
        console.log("Passing object", hbsObject);
        response.render("search", hbsObject);
    });
});

//Profile Page
router.get("/username/:id", function(request, response){
    // console.log(request.params.id);
    console.log(request.params.id);
    user.allBy("id",request.params.id, function(data){
        console.log(data);

        var hbsObject = {
            users_id : data
        }
        //render to profile handlebar
        response.render("user-page", hbsObject);
    });
    console.log("Working Profile");
});

//Add Game Page
router.get("/add/:username/:id", function(request, response){
    //render to add game handlebar
    response.render("index")
    console.log("Working Add Game")
})

// User Library
router.get("/library/:id?", function(request, response){
    //render to library handlebar
    response.render("user-library");
});

//Post game search
//*****************************************NEEDS TO BE TESTED TO MAKE SURE CALLING CORRECTLY*************************/

router.get("/gamesearch", function(request, response){
    console.log(request);
    response.render("gamesearch");
})

router.post("/gamesearch", function(request, response){
    // console.log("Looking for games");
    // var string = request.params.string
    // gameSearch.search(string, function (data) {
    //     console.log (data);
    // });
    
    let game = request.body.game
    console.log('game string:\,', game);
    response.redirect("/gamesearch/"+game)
    response.end();
})

router.get("/gamesearch/:game", function(request, response){    
    function gameBuilder(name, image) {
        this.name = name;
        this.image = image;
        // this.id = id;
    }
    let game = request.params.game;
    var gameResults = [];
    
    //console.log(game)
    gameSearch.search(game, function (data) {
        gameResults=[];
        //console.log (data);
        for (i = 0; i < data.body.length; i++) {
            let image;
            // console.log(data.body[i].name)
            //console.log(data.body[i])
            //if statement where cover art is available
            if (data.body[i].cover) {
                let imageId = data.body[i].cover.cloudinary_id
                //console.log("image ID", data.body[i].cover.cloudinary_id)
                // data.body contains the parsed JSON response to this query
                image = client.image({
                    cloudinary_id: imageId,
                }, 'cover_big', 'jpg')
            }
            
            //else set img link for when cover art is not available
            else {
                image = "//publications.iarc.fr/uploads/media/default/0001/02/thumb_1199_default_publication.jpeg"
            }
            //console.log("Image link", image)
            var newGame = new gameBuilder(data.body[i].name, image, data.body[i].id)
            // console.log("New Game: ", newGame)
            gameResults.push(newGame)
            console.log("Array: ", gameResults)   
        };         
            // console.log(image)
                var hbsObject = {
                    games: gameResults
                };
        response.render("gamesearch", hbsObject);        
    });
});

// this route gets activated when the submit button gets clicked.
// this submit button is found in form for creating a new user
router.post("/create-user", function(request, response){
    user.create( "users",
    // the cols of the users table,  is location_id necessary?
    ["name", "email", "password", "locations_id"],
    // the user input in the form that is the vals
    [request.body.name, request.body.email, request.body.password, request.body.location],
     function(data) {
        console.log(data);
    });
});

// Export routes for server.js to use.
module.exports = router;