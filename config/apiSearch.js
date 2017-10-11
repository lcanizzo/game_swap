//require igdb npm package
var igdb = require('igdb-api-node').default;

//set api key to variable 
var client = igdb('be1ea7dccb14bcf3ae57b1e16d62cb74');

//variable for game string
//********************************* HARD CODED TITLE, NEEDS TO BE REPLACED WITH USER INPUT********************************** */
let string = "halo";

//constructor function for creating game
var game = function(name, image) {
    this.name = name;
    this.image = image;
}

//empty array for game results
var gameResults = [];

//function for game search
var gameSearch = function(){
    //call for game
    client.games({
    fields: '*', // Return all fields
    limit: 5, // Limit results
    offset: 0, // Index offset for results
    search: string
}).then(function(response){
    gameResults=[];
    for (i=0; i < response.body.length; i++) {
    //console.log(response.body[i].name)
    let imageId = response.body[i].cover.cloudinary_id
    //console.log("image ID", response.body[i].cover.cloudinary_id)
    // response.body contains the parsed JSON response to this query
    let image = client.image({
        cloudinary_id: imageId, 
    }, 'cover_big', 'jpg')
    //console.log("Image link", image)
    var newGame = new game(response.body[i].name, image)
    //console.log("New Game: ", newGame)
    gameResults.push(newGame)
}
console.log("New Game: ", gameResults)
}).catch(function(error){
    throw error;
});
}
//export
module.exports = gameSearch
