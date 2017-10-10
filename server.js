// Dependencies
// =========================================
const express = require('express');
const bodyParser = require('body-parser');
const exphbrs = require('express-handlebars');


// Setup App
// =========================================
var app = express();
var PORT = process.env.PORT || 3000;

// Use Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routing 
// Import routes from Controllers and give the server access to them.
// ============================================================
var routes = require("./controllers/controller.js")

app.use("/", routes)

// Listen
// ======================================
app.listen(PORT, function(){
    console.log("Listening on Port: " + PORT)
});