// 'use strict';
const nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "joshjanculawebpage@gmail.com",
    auth: {
        user: "joshjanculawebpage@gmail.com",
        pass: "gmailPassword"
    }
});

module.exports = function(app, flag) {
    
app.get('/',function(req,res){
    res.sendfile('contact.html');
});
app.get('/send',function(req,res){
    var mailOptions={
        to : req.query.to,
        subject : req.query.subject,
        text : req.query.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});
}