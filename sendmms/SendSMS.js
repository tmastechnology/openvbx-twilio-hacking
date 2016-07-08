<!-- Adjust to point at the copy of the Temboo JavaScript SDK on your server -->
<script src="temboo.js"></script>

<script>
// Instantiate the client proxy
// You may need to adjust the path to reflect the URI of your server proxy
var temboo = new TembooProxy('/proxy-server');

// Add the sendSMS Choreo
var sendSMSChoreo = temboo.addChoreo('jsSendSMS');

// Add inputs

// Success callback
var showResult = function(outputs, outputFilters) {
    // Display outputs
    if(outputFilters) {
    	// Display named output filters
        for(var name in outputFilters) {
            console.log(name + ':');
            for(var item in outputs[name]) {
                console.log('    ' + outputs[name][item]);
            }
        }
    } else {
    	// Display raw outputs
        for(var name in outputs) {
            console.log(name + ': ' + outputs[name]);
        }
    }
};

// Error callback
var showError = function(error) {
    if(error.type === 'DisallowedInput') {
        console.log(error.type + ' error: ' + error.inputName);
    } else {
        console.log(error.type + ' error: ' + error.message);
    }
};

// Run the Choreo, specifying success and error callback handlers
sendSMSChoreo.execute(showResult, showError);
</script>