//require igdb npm package
var igdb = require('igdb-api-node').default;

//set api key to variable 
var client = igdb('be1ea7dccb14bcf3ae57b1e16d62cb74');

//variable for game string
//********************************* HARD CODED TITLE, NEEDS TO BE REPLACED WITH USER INPUT********************************** */
//********************************** POSSIBLE TO CONCATONATE PLATFORM TO END OF TITLE, EX DOOM XBOX ONE BRINGS UP DIF THEN DOOM */
let string = "Doom xbox one";

//constructor function for creating game
var game = function(name, image) {
    this.name = name;
    this.image = image;
}

//empty array for game results
var gameResults = [];

//function for game search
var gameSearch = function(search){
    gameResults = [];
    //call for game
    client.games({
    fields: '*', // Return all fields
    limit: 1, // Limit results
    offset: 0, // Index offset for results
    //order: 'release_dates.date:desc',
    search: string
}).then(function(response){
    gameResults=[];
    for (i=0; i < response.body.length; i++) {
    let image;
    //console.log(response.body[i].name)
    //console.log(response.body[i])
    if (response.body[i].cover){
    let imageId = response.body[i].cover.cloudinary_id
    //console.log("image ID", response.body[i].cover.cloudinary_id)
    // response.body contains the parsed JSON response to this query
    image = client.image({
        cloudinary_id: imageId, 
    }, 'cover_big', 'jpg')
}
    else {
        image = "//publications.iarc.fr/uploads/media/default/0001/02/thumb_1199_default_publication.jpeg"
    }
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

gameSearch(string)
//export
module.exports = gameSearch

