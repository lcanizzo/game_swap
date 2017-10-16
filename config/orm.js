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
        
        console.log("ORM Creating new entry", queryString);
        console.log("ORM Creating Values", vals);

        connection.query(queryString, vals, function (err, results) {
            cb(results);
        });
    },

    update: function (table, cond, vals, cb) {
        var condition = cond;
        var queryString = "UPDATE" + table + " SET " + vals + "WHERE " + cond;

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, vals, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
    /** Search based on 2 conditions
    * @param {string} table - Target table of the new entry.
    * @param {string} cond - Column Name of condition where results are looked for.
    * @param {any} val - Value of the condition being searched for
    * @param {function} cb - Callback Function
    */
    allBy2: function (table, cond, cond2, val, cb) {
        var condition = cond;
        var condition2 = cond2;        
        var queryString = "SELECT * FROM " + table + " WHERE " + condition + " = ? AND " + condition2 + " = ?;";

        console.log("ORM Searching for: " + queryString);
 
        connection.query(queryString, val, function (err, result) {
            console.log("ORM Result", result);
            cb(result);
        });
    },
}
// Object for all our SQL statement functions. 


// Export the orm object for the model.
module.exports = orm;