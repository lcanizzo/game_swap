var orm = require("../config/orm.js");


// Export the database functions for the controller

var user = {
    all: function(cb){
        // creates an index of users (change 'users')
        orm.all("users", function(res){
           cb(res);
        });
    },
   create: function(vals,cols,val, cb){
        // creates a new user  
       orm.create("users", cols, val, function(res){
           cb(res);
       })
   }
}