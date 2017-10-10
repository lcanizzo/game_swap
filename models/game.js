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
        })
    }
}

module.exports = game;