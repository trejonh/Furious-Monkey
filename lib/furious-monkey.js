var util = require('./utility');


/**
 * @param {string} phoneNumber - Number to send a message
 * @param {string} message - Message to send to phone Number
 * @param {object} options - can set sender, region, and subject fields
 * @param {function} callback - Function to be called on completion, will be returned with two parameters 'error' & 'info'
 */
function sendText(options, callback) {	
    if (options === undefined || options === null) {
        throw "The following options are required: phoneNumber, message, username, password, host name"
    }
    options.phoneNumber = "" + options.phoneNumber; // force to string
	if(process.env["host"]){
		options.host = process.env["host"];
	}
	if(process.env["password"]){
		options.password = process.env["password"];
	}
	if(process.env["username"]){
		options.username = process.env["username"];
	}
	if(options.host === undefined){
		throw 'A valid host must be provided';		
	}
	if(options.username === undefined){
		throw 'A username to log into the smtp server is required';		
	}
	
	if(options.password === undefined){
		throw 'A password to log into the smtp server is required';
	}
	if(options.subject === undefined){
		options.subject = "Furious Monkey";
	}
    if (options.phoneNumber.length !== 10){ //|| phoneNumber.match(/\W|\w|\s/g) !== null) {
        throw phoneNumber + " is not a valid phone number";
    }
	util.sendMessage(options,function(data){
		if(callback && typeof callback === 'function'){
			callback(data);
		}
	});
}
module.exports = {
    sendText: sendText
};
