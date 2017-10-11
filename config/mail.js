//creating js for sending mail upon trade request

//requiring npm nodemailer package
var nodemailer = require("nodemailer")

//variable for nodemailer request and autentication to smtp
let transporter =
nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, //port 587 TLS
    secure: false,
    auth: { 
        //user name gameswapu@gmail.com pass: ucfproject2
        user: "gameswapu",
        pass: "ucfproject2",
    }
});

