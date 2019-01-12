

const path = require("path");



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
}

