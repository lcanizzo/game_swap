var igdb = require('igdb-api-node').default;

var client = igdb('be1ea7dccb14bcf3ae57b1e16d62cb74');

client.games({
    fields: '*', // Return all fields
    limit: 5, // Limit to 5 results
    offset: 15 // Index offset for results
}).then(response, function() {
    console.log(response.body)
    // response.body contains the parsed JSON response to this query
}).catch(error, function() {
    throw error;
});