var CARRIERS = require('./carriers');
var SMTP_SERVICES = require('./smtp_services').SMTP_SERVICES;
var RECIPIENT_ARRAY = [];
var spawn = require('child_process').spawn;
/**
 * @description Assemble a string of recipients to recieve a message
 * @param {string} phoneNumber - the number in which to send the messsage to
 * @param {string} region - (optional) region phone resides in, defaults to US
 * @return {string} recipients - list of recipients to recieve the message
 */
function assembleRecipients(phoneNumber, region) {
    var allRecipients;
    if (!(region instanceof String) || !region) {
        region = 'us';
    }
    switch (region.trim().toLowerCase()) {
        case 'eu':
            allRecipients = assembler(phoneNumber, CARRIERS.EU);
            break;
        case 'can':
            allRecipients = assembler(phoneNumber, CARRIERS.CAN);
            break;
        case 'mex':
            allRecipients = assembler(phoneNumber, CARRIERS.MEX);
            break;
        case 'as':
            allRecipients = assembler(phoneNumber, CARRIERS.AS);
            break;
        case 'aus':
            allRecipients = assembler(phoneNumber, CARRIERS.AUS);
            break;
        case 'afr':
            allRecipients = assembler(phoneNumber, CARRIERS.AFR);
            break;
        case 'sa':
            allRecipients = assembler(phoneNumber, CARRIERS.SA);
            break;
        default:
            allRecipients = assembler(phoneNumber, CARRIERS.USA);
            break;
    }
    return allRecipients;
}

function assembler(phoneNumber, region) {
    var recipient = '';
    for (var carrier in region) {
        if (region.hasOwnProperty(carrier)) {
            var address = region[carrier];
			var rec = address.replace(/number/g, phoneNumber);
            recipient += rec + ",";
			RECIPIENT_ARRAY.push(rec)
        }
    }
    return recipient.substr(0, recipient.length - 1);
}

function findSmtpServerice(host){
	switch(host.trim().toLowerCase()){
		case 'yahoo':
			return SMTP_SERVICES.yahoo;
		case 'outlook':
			return SMTP_SERVICES.outlook;
		case 'aol':
			return SMTP_SERVICES.aol;
		case 'icloud':
			return SMTP_SERVICES.icloud;
		case 'hotmail':
			return SMTP_SERVICES.hotmail;
		case 'live':
			return SMTP_SERVICES.live;
		default:
			return SMTP_SERVICES.google;
	}
};

function sendMessage(options, cb){
	var recipients = assembleRecipients(options.phoneNumber, options.region);
	options.recipients = recipients;
	options.recipientArray = RECIPIENT_ARRAY;
	options.smtp = findSmtpServerice(options.host);
	var data = JSON.stringify(options);
	var dataString = '';
    var py    = spawn('python',[ __dirname+'/send_email.py']);
	py.stdout.on('data', function(data){
	  dataString += data.toString();
	});
	py.stdout.on('end', function(){
	  cb(dataString);
	});
	py.stdin.write(JSON.stringify(data));
	py.stdin.end();
};

module.exports = {
    assembleRecipients: assembleRecipients,
	RECIPIENT_ARRAY: RECIPIENT_ARRAY,
	sendMessage: sendMessage
};
