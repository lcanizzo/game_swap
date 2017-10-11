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

//variable for email message to send to user
let mailOptions = {
    //our email address
    from: '"Game Swap" <gameswapu@gmail.com>',
    //user email
    to: '', //****NEEDS TO BE SET TO VAR FOR USER EMAIL*****/
    //subject line
    subject: 'You currently have a trade request!',
    //text and html
    text: 'You currently have a trade request!', 
    html: '<b>You currently have a trade request!</b>' 
};
