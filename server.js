// Import express package
var express = require('express')
// Import bodyParse package
var bodyParser = require('body-parser')
var exphbrs = require('express-handlebars')

var app = express();

// Establish port
var PORT = process.env.PORT || 8000;
// Serve static content for the app from the "public" directory in the application directory.

// Set Handlebars.
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Import routes from Controllers and give the server access to them.
var routes = require("./controllers/exampleController.js")

app.use("/", routes)

app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
})