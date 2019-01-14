require("dotenv").config();

module.exports.google = {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    key: process.env.API_KEY
};

module.exports.session = {
    cookieKey: process.env.COOKIE_KEY
};