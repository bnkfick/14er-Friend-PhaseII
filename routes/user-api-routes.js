
const path = require("path");
// Requiring our database models
var db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

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
        res.render('pages/climber-settings', { user: user } );
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

                db.UserPreference.create (
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
