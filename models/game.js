var orm = require("../config/orm.js");

var game = {
    all: function(cb){
        orm.all("games", function(res){
            cb(res);
        });
    },
    allBy: function(cond, val, cb){
        orm.allBy("games", cond, val, function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        // creates a new games
       orm.create("games", cols, vals, function(res){
           cb(res);
       });
    },
    addtoUsers: function(cols, vals, cb){
        orm.create("gamesToUsers", cols, vals, function(res){
            cb(res);
        });
    },
}

module.exports = game;