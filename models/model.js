var orm = require("../config/orm.js");


// Export the database functions for the controller
var user = {
    all: function(cb){
        // creates an index of users (change 'users')
        orm.all("users", function(res){
           cb(res);
        });
    },
   create: function(cols, vals, cb){
        // creates a new user  
       orm.create("users",cols, vals, function(res){
           cb(res);
       });
   },
   add_game: function(cols, vals,db){
       orm.create_game("")
   }
}

var game = {
    all: function(cb){
        orm.all("games", function(res){
            cb(res);
        });
    }
}
