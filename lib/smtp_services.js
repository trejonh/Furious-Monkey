var SMTP_SERVICES = {
	google: {server:'smtp.gmail.com',port:587},
	yahoo: {server:'smtp.mail.yahoo.com', port: 465},
	outlook: {server: 'smtp-mail.outlook.com', port: 25},
	aol: {server: 'smtp.aol.com', port: 587},
	icloud: {server: 'smtp.mail.me.com', port: 587},
	hotmail: {server: 'smtp.live.com', port: 587},
	live: {server: 'smtp.live.com', port: 587}	
};

module.exports = {SMTP_SERVICES: SMTP_SERVICES};