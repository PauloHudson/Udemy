
account_sid = "AC7b2e461b974b98e6a76bb093ca0d3866"
auth_token  = "297689e434c597b999b989eebd691d41"

client = Client(account_sid, auth_token)
message = client.messages.create(
to="+5511988898030", 
from_="+13344718826",
body='Desculpa ter ficado bravo amor, te amo!')
print(message.sid)

