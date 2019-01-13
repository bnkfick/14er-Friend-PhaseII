
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
    app.get("/profile", authCheck, (req, res) => {
        console.log("We've passed the authCheck and are in /profile");
        res.sendFile(path.join(__dirname, "../public/views/user.html"));
    });



    app.post("/api/user/preferences/:userid", function (req, res) {
        //console.log("post(/api/user/preferences/:userid...");
        console.log(req.body.newUserPref);
        //does the user already have preferences saved
        db.UserPreference.findOne({
          where: {
              UserId: req.params.userid
          }
        }).then(function (data) {
            if (data) {
                console.log("user has preferences");
                var newUserPref = req.body.newUserPref;
                db.UserPreferences.update({
                    windLimit: newUserPref.windLimit,
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
                        res.json(result);
                      }
                    });
            //if the user has preferences saved then do an update
            } else {
            //else do a create
                console.log("user has no preferences");
                db.UserPreferences.create (
                    {
                        UserId: req.params.userid,
                        windLimit: newUserPref.windLimit,
                        precipLimit: newUserPref.precipLimit,
                        tempMin: newUserPref.tempMin,
                        distMax: newUserPref.distMax
                    }
                    ).then(function (data) {
                        console.log(`New User created:  ${data}`);
                });
            }

        });
    
      });

}
