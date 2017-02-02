# Furious-Monkey
[![Build Status](https://travis-ci.org/trejonh/Furious-Monkey.svg?branch=master)](https://travis-ci.org/trejonh/Furious-Monkey)


A free sms api to send api messages to clients, without boundaries or costs. Now using node and python to send plain-text sms messages to a wide range of mobile providers.
##Requirements
Python version 2.7.* is required for use
##Installation

`npm install furious-monkey`

##Testing

Currently not tested besides manual tests with American providers, will keep working t find appropriate methods to provide proper testing.

###Examples

~~~~
var fm = require('furious-monkey');
var opts = {
  subject: 'furious-monkey',
  region: 'us',
  phoneNumber: 1234561234,
  message: 'I'm a mad monkey'
};

fm.sendText(opts,function(info){
	console.log(info);
});

 ~~~~
####Run with following command

`node username=your-email-username passowrd=your-email-password host=email-provider furious-monkey.js`


i.e. `node username=furious-monkey password=password1234 host=aol furious-monkey.js`

**Note: Not recommended but host/username/password fields can be provided in options variable otherwise will be gathered from enviroment variables**
* Those using Hotmail/Live/iCloud must provide full email address as their username i.e. `username=foobar@live.com`

* Verify with your email provider for daily sending limits

####Available Email Providers
* Gmail - google
* Yahoo - yahoo
* Live - live
* Outlook - outlook
* Hotmail - hotmail
* iCloud - icloud
* AOL - aol

_Complete list can be found lib/smtp_services.js_

####Options
~~~~
options = {
  subject : type {String},
  region : type {String},
  message : type {String} - required,
  phoneNumber: type {Number/String} - required,
  host: type {String} - required,
  username: type {String} - required,
  passowrd: type {String} - required
}
~~~~
####Available Regions
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

##Contributions

If you would like to help make contributions or have questions/comments on usage please drop me an email via [trejon_house@yahoo.com](trejon_house@yahoo.com) with the subject line 'Furious-Monkey'.
