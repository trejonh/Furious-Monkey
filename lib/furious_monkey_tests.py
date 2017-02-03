#!/usr/bin/python
import unittest, send_email, smtplib, os

badTestData = {'smtp':{'server':'google','port':'587'}}
badCredentials = {'smtp':{'server':'smtp.gmail.com','port':'587'},'recipients':'blah@blah.com','username':'foo','password':'foobar', 'subject':'testing','message':'quite a mess'}
goodCredentials = {'smtp':{'server':'smtp.gmail.com','port':'587'},'recipients':'blah@blah.com','recipientArray':os.environ['to'],'username':os.environ['username'],'password':os.environ['password'], 'subject':'testing','message':'quite a mess'}

class Furious_Monkey_tests(unittest.TestCase):
	###This error normally should never get thrown###
	###The main furious-monkey sendText method checks###
	###for the email data is complete, this a sanity test###
	def testEmailDataNotComplete(self):
		with self.assertRaises(KeyError) as ex:
			send_email.send_email(badTestData)
	###Wrong login credentials ###
	def testBadLoginInfo(self):
		with self.assertRaises(smtplib.SMTPException) as ex:
			send_email.send_email(badCredentials)
	###Corrent login credentials ###
	def testGoodLoginInfo(self):
		try:
			send_email.send_email(goodCredentials)
		except:
			self.fail("should send a message with no problem")
		
if __name__ == '__main__':
    unittest.main()