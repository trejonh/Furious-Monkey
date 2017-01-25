var CARRIERS = require('./carriers');

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
    var recipient;
    for (var carrier in region) {
        if (region.hasOwnProperty(carrier)) {
            var address = region[carrier];
            recipient += address.replace(/number/g, phoneNumber) + ",";
        }
    }
    return recipient.substr(0, recipient.length - 1);
}

module.exports = {
    assembleRecipients: assembleRecipients
};
