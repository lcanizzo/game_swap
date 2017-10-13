// Set up MySQL connection.
const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var localpw = require("./connection-pws.js");
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: localpw,
        database: "gameswap_db"
        // localpw
    });
}

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

connection.on('error', function (err) {
    console.log(err.code); // 'ER_BAD_DB_ERROR'
});

// Export connection for our ORM to use.
module.exports = connection;