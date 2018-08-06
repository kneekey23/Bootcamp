exports.handler = (event, context, callback) => {
    
     var accountSid = 'ACae9b0ac96f1ccfba95fa0ce399563ee9'; 
            var authToken = 'ba0ad3f8bbb2b3a4d409e2c5c27e0d2a'; 
            var client = require('twilio')(accountSid, authToken); 
            client.messages.create({
                to: event.myPhoneNumber, 
                from: "+15622739936", 
                body: event.message, }, 
                function(err, message) { 
                    console.log(message.sid);
                     callback(null, message.sid);
                });
   
};