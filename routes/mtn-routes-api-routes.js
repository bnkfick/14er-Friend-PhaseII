// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the routes of a mountain
  app.get("/api/mountain_routes/", function(req, res) {
    db.Mountain_route.findAll({})
      .then(function(dbMountain_route) {
        res.json(dbMountain_route);
      });
  });

  // Get route for returning specific mtn-route
  app.get("/api/mountain-routes/:name", function(req, res) {
    db.Mountain.findOne({
      where: {
        routeName: req.params.name
      }
    })
      .then(function(dbMountain_route) {
        res.json(dbMountain_route);
      });
  });
    
 // PUT route for updating mountains on admin page. Yes! Change code
//   app.put("/api/mountains", function(req, res) {
//     db.Post.update(req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
    
  // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // POST route for saving a new Mountain?  Change Code
//   app.post("/api/posts", function(req, res) {
//     console.log(req.body);
//     db.Post.create({
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

  // DELETE route for deleting mountain?  Change code
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

 
};