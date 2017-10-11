const searcher = require("../config/apiSearch");

var search = {
    search: function (string, cb) {
        searcher.gameSearch(string, cb)
        // for (i = 0; i < response.body.length; i++) {
        //     let image;
        //     //console.log(response.body[i].name)
        //     //console.log(response.body[i])
        //     //if statement where cover art is available
        //     if (response.body[i].cover) {
        //         let imageId = response.body[i].cover.cloudinary_id
        //         //console.log("image ID", response.body[i].cover.cloudinary_id)
        //         // response.body contains the parsed JSON response to this query
        //         image = client.image({
        //             cloudinary_id: imageId,
        //         }, 'cover_big', 'jpg')
        //     }
        //     //else set img link for when cover art is not available
        //     else {
        //         image = "//publications.iarc.fr/uploads/media/default/0001/02/thumb_1199_default_publication.jpeg"
        //     }
        //     //console.log("Image link", image)
        //     var newGame = new game(response.body[i].name, image, response.body[i].id)
        //     // console.log("New Game: ", newGame)
        //     gameResults.push(newGame)
        // }
        // console.log("Game Result: ", gameResults)
        // cb (gameResults);
    }
}

module.exports = search;
