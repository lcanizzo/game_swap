var orm = require("../config/orm.js");

// Export the database functions for the controller
var user = {
    all: function(cb){
        // creates an index of users (change 'users')
        orm.all("users", function(res){
           cb(res);
        });
    },
    allBy: function(cond, val, cb){
        orm.allBy("users", cond, val, function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        // creates a new user  
       orm.create("users", cols, vals, function(res){
           cb(res);
       });
    },
    findByFacebook: function(facebookID, cb){
        orm.oneBy("users", `facebook_id`, facebookID, function(res){
            console.log("User Values: ", facebookID);
            cb(res);
        });
    }
};

module.exports = user;