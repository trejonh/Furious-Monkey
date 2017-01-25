var MAILER = require('nodemailer');
var util = require('./utility');
var username = process.env['username']; //jshint ignore:line
var password = process.env['password']; //jshint ignore:line
var host = process.env['host']; //jshint ignore:line
var transporter;
// create reusable transporter object using the default SMTP transport
if (!username || !password) {
    throw 'Please provide a valid username and password';
} else if (!host) {
    throw 'Please provide a valid host';
}else {
    transporter = MAILER.createTransport('smtps://' + username + '%40'+host+':' + password + '@smtp.'+host);
}


/**
 * @param {string} phoneNumber - Number to send a message
 * @param {string} message - Message to send to phone Number
 * @param {object} options - can set sender, region, and subject fields
 * @param {function} callback - Function to be called on completion, will be returned with two parameters 'error' & 'info'
 */
function sendText(phoneNumber, message, options, callback) {
    phoneNumber = "" + phoneNumber; // force to string
    //console.log(phoneNumber.length);
    if (phoneNumber.length !== 10){ //|| phoneNumber.match(/\W|\w|\s/g) !== null) {
        throw phoneNumber + " is not a valid phone number";
    }
    if (options === undefined || options === null) {
        options = {
            subject: 'Furious-Monkey',
            region: 'us'
        };
    }
    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: options.sender, //'"Fred Foo ?" <foo@blurdybloop.com>', // sender address
        to: util.assembleRecipients(phoneNumber, options.region), // list of receivers
        subject: options.subject, // Subject line
        text: message, // plaintext body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (callback && (typeof callback === 'function')) {
            callback(error, info);
        }
    });
}
module.exports = {
    sendText: sendText
};
