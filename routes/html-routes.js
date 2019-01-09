// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads everything: user-box, mountains-table, routes-table, route-beta-table
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
    
    // mountain route loads expanded view of single mountain and all it's routes + pictures, route conditions chat, etc
//   app.get("/mountains/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/mountain.html"));
//   });
    
    // admin route loads page  with sections for managing users, form for entering mtn info, route info, monitoring comments, and user route updates/images
//   app.get("/admin/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/admin.html"));
//   });

    // user-settings route loads account preferences page: upload user image, create groups, add friends, etc
//   app.get("/user-settings/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/user-settings.html"));
//   });
    
        // team route loads team dev page!
//   app.get("/team/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/user-settings.html"));
//   });
    
  

};