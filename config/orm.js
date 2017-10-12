// Import MySQL connection.
const connection = require("../config/connection.js");

// Helper function for SQL syntax.???
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
  
    return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax???


var orm ={
    all: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function (err, result) {
            cb(result);
        });
    },
    oneBy: function (table, cond, val, cb){
        var condition = cond;
        var queryString = "SELECT * FROM " + table + " WHERE `" + condition + "` = " + val + ";";

        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    /** Search based on a single condition
    * @param {string} table - Target table of the new entry.
    * @param {string} cond - Column Name of condition where results are looked for.
    * @param {any} val - Value of the condition being searched for
    * @param {function} cb - Callback Function
    */
    allBy: function (table, cond, val, cb) {
        var condition = cond;
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? ;";

        console.log("ORM Searching for: " + queryString);

        connection.query(queryString, val, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    /** Add a new entry in a trable
    * @param {string} table - Target table of the new entry.
    * @param {array} cols - Array of collumns being added.
    * @param {array} vals - Array of values corresponding to the collumns
    * @param {function} cb - Callback Function
    */
    create: function (table, cols, vals, cb) {
        var columns = cols.toString();
        var values = printQuestionMarks(vals.length);
        var queryString = "INSERT INTO " + table + "(" + columns + ")" 
            + " VALUES ( " + values + " ) ;";
        connection.query(queryString, vals, function (err, results) {
            cb(results);
        });
    }
}
// Object for all our SQL statement functions. 


// Export the orm object for the model.
module.exports = orm;