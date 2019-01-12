require("dotenv").config();

module.exports.google = {
    key: process.env.API_KEY,
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
};

module.exports.session = {
    cookieKey: process.env.COOKIE_KEY
};