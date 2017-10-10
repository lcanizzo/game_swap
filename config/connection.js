// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "gameswap_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.on('error', function(err) {
    console.log(err.code); // 'ER_BAD_DB_ERROR'
});

// Export connection for our ORM to use.
module.exports = connection;
