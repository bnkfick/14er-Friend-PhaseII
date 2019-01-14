
// Dependencies
// =============================================================
const path = require("path");
const passport = require('passport');

// =============================================================
module.exports = function (app) {

    //auth login
    app.get("/login", (req, res) => {
        console.log("/login");
        //I can send req.user when we switch to a rendering engine like handlebars or vue
        res.sendFile(path.join(__dirname, "../public/views/login.html"));
    });


    //auth with google
    app.get("/google", passport.authenticate('google', {
        scope: ['profile']
    }));

    //auth logout
    app.get("/logout", (req, res) => {
        //handle with passport
        //removes cookie
        req.logout();
        res.redirect('/');
    });

    // callback route for google to redirect to
    // hand control to passport to use code to grab profile info
    //    app.get('/google/redirect', (req, res) => {
    //       used to display res.send('you reached the redirect URI')
    //       before defining the callback function in the passport-setup.jp
    //       GoogleStrategy callback function
    app.get('/google/redirect', passport.authenticate('google'), (req, res) => {
        console.log("/google/redirect");
        console.log('you reached the redirect callback URI.  you are logged in' + req.user);
        res.redirect("/climber-settings");
    });

};


