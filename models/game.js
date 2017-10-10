var orm = require("../config/orm.js");

var game = {
    all: function(cb){
        orm.all("games", function(res){
            cb(res);
        });
    }
}
