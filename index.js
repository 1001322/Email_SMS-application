var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://milindsmahajan93@gmail.com:Msm_vars@93@smtp.gmail.com');//sender mail ID and password

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Milind Mahajan" <milindsmahajan93@gmail.com>', // sender address
    to: 'nareshshetty.2011@gmail.com, kmithra.kalaiselvan@gmail.com', // list of receivers
    subject: 'Test mail', // Subject line
    text: 'Hi, wassup!!', // plaintext body
    html: '<b>Hi, how are you!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});