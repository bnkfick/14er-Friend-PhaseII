const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const keys = require("./keys");
require("dotenv").config();


// Requiring our Todo model
var db = require("../models");

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {

    db.User.findOne({
        where: {
            id: id
        }
    }).then(function (data) {
        done(null, data);
    });
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: '/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret
        //accessToken receive from google that if we want to alter the users profile
        //   allows us to go to into their mailbox, read their emails
        //refreshToken - refresh the accessToken which expires after a certain amount of time
        //profile - takes code returned from google and send that back to google to get the profile info
        //function called done
    }, (accessToken, refreshToken, profile, done) => {
        // passport callback function
        //console.log("passport callback function fired");
        console.log(`retrieved google profile `);
        console.log(profile);
        //now take some of this data and save that in our database
        //interacting wtih the db via the User model

        //check if user already exists in our database
        db.User.findOne({
            where: {
                google_id: profile.googleId
            }
        }).then(function (data) {
            //console.log(`hit db for user data ${data}`);
            if (!data) {
                db.User.create({
                    user_name: profile.displayName,
                    google_id: profile.googleId,
                    thumbnail: profile._json.image.url
                }).then(function (data) {
                    //console.log(`New User created:  ${data}`);
                    done(null, data);
                });
            } else {
                //console.log(`User ${data.user_name} already exists`);
                done(null, data);
            }

        });



    })
);



