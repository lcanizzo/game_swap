var igdb = require('igdb-api-node').default;

var client = igdb('be1ea7dccb14bcf3ae57b1e16d62cb74');

let string = "halo";

client.games({
    fields: '*', // Return all fields
    limit: 1, // Limit to 5 results
    offset: 0, // Index offset for results
    search: string
}).then(function(response){
    console.log(response.body[0].name)
    let imageId = response.body[0].cover.cloudinary_id
    console.log("image ID", response.body[0].cover.cloudinary_id)
    // response.body contains the parsed JSON response to this query
    let image = client.image({
        cloudinary_id: imageId, 
    }, 'cover_big', 'jpg')
    console.log("Image link", image)
}).catch(function(error){
    throw error;
});

