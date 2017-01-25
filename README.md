# Furious-Monkey
[![Build Status](https://travis-ci.org/trejonh/Furious-Monkey.svg?branch=master)](https://travis-ci.org/trejonh/Furious-Monkey)


A free sms api to send api messages to clients, without boundaries or costs.

##Installation

`npm install furious-monkey`

##Testing

`jasmine`

###Examples

`var fm = require('furious-monkey');
var opts = {
  sender: 'foo@bar.com',
  subject: 'furious-monkey',
  region: 'us'
};

var message = 'Hello I'm a mad monkey';
var phoneNumber = 1234567890;

fm.sendText(phoneNumber,message,opts,function(err,info){
    if(err)
      console.log(err);
    else
      console.log(info.response);
  });
`
####Run with following command

`node username=your-email-username passowrd=your-email-password furious-monkey.js`
i.e. `node username=furious-monkey password=password1234 furious-monkey.js`
* Furious-Monkey uses [nodemailer](https://community.nodemailer.com/) as and smtp service to send emails to SMS Gateways, [nodemailer](https://community.nodemailer.com/) requires a personal email and password to setup transport object.

####Options
options = {
  sender : type {String},
  subject : type {String},
  region : type {String}
}
#####Available Regions
The default is set to US
* US
* EU
* AFR
* AS
* AUS
* SA
* MEX
* CAN

####Currently supported carriers
_United States of America_
* Alltel
* AT & T
* Boost Mobile
* Cricket Wireless
* Project Fi/Google
* Republic Wireless
* Sprint
* T-Mobile
* U.S. Cellular
* Verizon
* Virgin Mobile

_Europe_
* Vodafone
* Orange
* Telecom
* T-Mobile
* Telcel

_Asia_
* Airtel
* China Mobile
* NTT DoCoMo
* Orange

_Africa_
* SafariCom
* Mtn
* Vodacom

_Mexico_
* Nextel
* Iusacell
* Telcel

_Canada_
* Bell
* Bell Mobility
* Koodo
* Fido
* Manitoba
* NBTel
* PageNet
* Rogers
* Sasktel
* Telus
* Virgin Mobile

_South America_
* Nextel
* Claro

_Australia_
* Optus Mobile
* Telstra

_Complete list can be found lib/carriers.js_
