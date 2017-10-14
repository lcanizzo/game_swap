//require igdb npm package
const igdb = require('igdb-api-node').default;

//set api key to variable 
const client = igdb('f623d5dcfa8a8be3dd547c23358736e4');

//variable for game string
//********************************* HARD CODED TITLE, NEEDS TO BE REPLACED WITH USER INPUT********************************** */
//********************************** POSSIBLE TO CONCATONATE PLATFORM TO END OF TITLE, EX DOOM XBOX ONE BRINGS UP DIF THEN DOOM */

//constructor function for creating game
function game(name, image, id) {
    this.name = name;
    this.image = image;
    this.id = id;
}

var apiSearch = {
    gameSearch: function (string, cb) {
        //var gameResults = [];
        //call for game
        client.games({
            fields: '*', // Return all fields
            limit: 6, // Limit results
            offset: 0, // Index offset for results
            //order: 'release_dates.date:desc',
            search: string
        }).then(function (response) {
            // gameResults=[];
            cb(response);
        }).catch(function (err) {
            console.log("ERROR:\n", err);
            console.log("Promise Rejected");
       });
    }
}

//export
module.exports = apiSearch;


