const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
//const client = require('twilio')(accountSid, authToken);


function sendSMS(number) {

    client.messages.create({
        to: number,
        from: '+17207302464',
        body: "Welcome to 14er Friend!"
    }).then((message) =>
        console.log(message));
        
};

module.exports = sendSMS;
