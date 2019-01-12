// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
  //use res.render to load up an ejs view file

  //index page
  app.get('/', function (req, res) {
    //get mtn info with sequelize 
    var MtnsArr = [];
    db.Mountain.findAll({
      // Add order conditions here....
      order: [
        ['rank', 'ASC'],
      ],
    })
      .then(function (data) {

        if (data) {
          console.log("THERE ARE " + data.length + " RESULTS." );
          //loop over mountains and get all routes for each mountain
          for (var x = 0; x < data.length; x++) {

            // console.log("id: " + data[x].id);
            // console.log("rank: " + data[x].rank);
            // console.log("peakName: " + data[x].peakName);
            // console.log("elevation: " + data[x].elevation);

            // var out = '';
            // for (var p in data) {
            //   out += p + ': ' + data[p] + '\n';
            // }
            //console.log(out);
            //Get the mountain routes for the current mountain
            db.Mountain_route.findAll({
                where: {
                  MountainId: data[x].id
                }
            }).then(function (routes_data) {
  
              var mtnObj = {
                mtnData: data[x],
                trails: []
              };
              console.log("================");
              console.log(mtnObj);
              for (var y = 0; y < routes_data; y++ ) {
                  //put the routes on the data ojbect here 
                  mtnObj.trails.push(routes_data[y]);
              }
              //put the route data on the object to send

              MtnsArr.push(mtnObj);
              console.log(MtnsArr);
            });
            
          }
          console.log(MtnsArr.length);
          res.render('pages/index', { mtns: MtnsArr });
        }

      });
  });


  /*   app.get('/', function (req, res) {
      //get mtn info with sequelize 
      db.Mountain.findAll({
        // Add order conditions here....
        order: [
            ['rank', 'ASC'],
        ],})
        .then(function (data) {
          var Mtns;
          if (data) {
            //loop over mountains and get all routes for each mountain
            for (var x = 0; x < data.length; x++) {
              //console.log(data);
              
              //console.log(data[x].id);
  
              db.Mountain.findAll({
                include: {
                  model: db.Mountain_route,
                  where: {
                    MountainId: data[x].id
                  },
                  required: false
                }
              }).then(function (routes_data) {
                //console.log(routes_data);
  
                for (var y = 0; y < routes_data; y++ ) {
                  MtnsWRoutes.push(routes_data[y]);
                }
                //put the routes on the data ojbect here 
                //put the route data on the object to send
              })
  
            }
            console.log(MtnsWRoutes);
            res.render('pages/index', { mtns: MtnsWRoutes });
          }
  
        });
    }); */

  //Not needed with EJS route above
  // index route loads everything: user-box, mountains-table, routes-table, route-beta-table
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

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