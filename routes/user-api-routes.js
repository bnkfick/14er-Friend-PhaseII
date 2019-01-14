
const path = require("path");
// Requiring our database models
var db = require("../models");
var txtMsg = require("../msgs/send-sms");

var PORT = process.env.PORT || 8080;
const fetch = require('node-fetch');
// Routes
// =============================================================
module.exports = function (app) {

    function get(url) {
        console.log("get url: " + url);
        return new Promise((resolve, reject) => {
          fetch(url, {credentials: 'include'})
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
        })
      }

    //middleware function to check if a user is authorized to 
    //see the user profile page
    const authCheck = (req, res, next) => {
        console.log(req.user);

        if (!req.user) {
            //if user is not logged in
            //redirect them to a login page
            res.redirect("/login");
        } else {
            //if logged in call next()
            //middleware to say go to the next middleware function
            next();
        }
    };


    //logged in user page
    app.get("/climber-settings", authCheck, (req, res) => {
        console.log("We've passed the authCheck and are in /profile");

        var currUser = {
            id: req.user.id,
            user_name: req.user.user_name,
            password: req.user.password,
            email: req.user.email,
            google_id: req.user.google_id,
            thumbnail: req.user.thumbnail
        };
        Promise.all([
            currUser,
            get(`http://localhost:${PORT}/api/user/profile/${req.user.id}`),
            get(`http://localhost:${PORT}/api/user/preferences/${req.user.id}`),
        ]).then(([currUser, userProf, userPref]) =>
            res.render('pages/climber-settings', {
                user: currUser, 
                userProf: userProf, 
                userPref: userPref
            }))
            .catch(err => res.send(err))
    })


    app.get("/api/user/profile/:userid", function (req, res) {
        db.UserProfile.findOne({
            where: {
                UserId: req.params.userid
            }
        }).then(function (data) {
            res.json(data);
        });
    });

    app.post("/api/user/profile/:userid", function (req, res) {
        var newUserProf = req.body;
        //does the user already hs profile saved
        db.UserProfile.findOne({
            where: {
                UserId: req.params.userid
            }
        }).then(function (data) {
            if (data) {
                console.log(newUserProf);
                db.UserProfile.update({
                    firstname: newUserProf.firstname,
                    lastname: newUserProf.lastname,
                    mobile: newUserProf.mobile,
                    img: newUserProf.img,
                    bio: newUserProf.windLimit,
                    interest1: newUserProf.interest1,
                    interest2: newUserProf.interest2,
                    interest3: newUserProf.interest3,
                    interest4: newUserProf.interest4,
                    interest5: newUserProf.interest5,
                    interest6: newUserProf.interest6,
                    interest7: newUserProf.interest7,
                    interest8: newUserProf.interest8,
                    UserId: req.params.userid,
                }, {
                        where: {
                            id: req.params.userid
                        }
                    })
                    .then(function (result) {
                        if (result.changedRows == 0) {
                            return res.status(404).end();
                        } else {
                            console.log(`Updated User Profile:  ${data}`);
                            res.json(result);
                        }
                    });
                //if the user has profile saved then do an update
            } else {
                //else do a create
                db.UserProfile.create(
                    {
                        firstname: newUserProf.firstname,
                        lastname: newUserProf.lastname,
                        mobile: newUserProf.mobile,
                        img: newUserProf.img,
                        bio: newUserProf.bio,
                        interest1: newUserProf.interest1,
                        interest2: newUserProf.interest2,
                        interest3: newUserProf.interest3,
                        interest4: newUserProf.interest4,
                        interest5: newUserProf.interest5,
                        interest6: newUserProf.interest6,
                        interest7: newUserProf.interest7,
                        interest8: newUserProf.interest8,
                        UserId: req.params.userid,
                    }
                ).then(function (data) {
                    txtMsg(newUserProf.mobile);
                    console.log(`New User Profile created:  ${data}`);
                });
            }

        });

    });

    app.get("/api/user/preferences/:userid", function (req, res) {
        db.UserPreference.findOne({
            where: {
                UserId: req.params.userid
            }
        }).then(function (data) {
            res.json(data);
        });
    });


    app.post("/api/user/preferences/:userid", function (req, res) {
        var newUserPref = req.body;
        //does the user already have preferences saved
        db.UserPreference.findOne({
            where: {
                UserId: req.params.userid
            }
        }).then(function (data) {
            if (data) {


                console.log(newUserPref);
                db.UserPreference.update({
                    windLimit: req.body.windLimit,
                    precipLimit: newUserPref.precipLimit,
                    tempMin: newUserPref.tempMin,
                    distMax: newUserPref.distMax
                }, {
                        where: {
                            id: req.params.userid
                        }
                    })
                    .then(function (result) {
                        if (result.changedRows == 0) {
                            return res.status(404).end();
                        } else {
                            console.log(`Updated User Preferences:  ${data}`);
                            res.json(result);
                        }
                    });
                //if the user has preferences saved then do an update
            } else {
                //else do a create

                db.UserPreference.create(
                    {
                        UserId: req.params.userid,
                        windLimit: newUserPref.windLimit,
                        precipLimit: newUserPref.precipLimit,
                        tempMin: newUserPref.tempMin,
                        distMax: newUserPref.distMax
                    }
                ).then(function (data) {
                    console.log(`New User Preferences created:  ${data}`);
                });
            }

        });

    });

}
