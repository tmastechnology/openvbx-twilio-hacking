require 'temboo'
require 'temboo/core/proxy'
require 'Library/Twilio'

# Instantiate session
session = TembooSession.new("accountName", "myFirstApp", "abc123xxxxxxxxxxxxxx")

# Act as a proxy for the Temboo JS SDK
tembooProxy = TembooProxy.new()

# Instantiate the Choreo
sendSMSChoreo = Twilio::SMSMessages::SendSMS.new(session)

# Add Choreo proxy with an ID matching that specified by the JS SDK client
tembooProxy.add_choreo('jsSendSMS', sendSMSChoreo)

# Get an InputSet object for the choreo
sendSMSInputs = sendSMSChoreo.new_input_set()

# Set credential to use for execution
sendSMSInputs.set_credential('twiliosenmms')

tembooProxy.set_default_inputs('jsSendSMS', sendSMSInputs)

# Execute the requested Choreo. httpPostData contains the contents of the JavaScript client POST
# request. How this variable is populated will depend on the Ruby web server you're using.
result = tembooProxy.execute(httpPostData['temboo_proxy'])