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
  app.get("/api/mountain_routes", function(req, res) {
    db.Mountain_route.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });

  // Get route for returning specific mtn-route
  app.get("/api/mountain_routes/:name", function(req, res) {
    db.Mountain_route.findOne({
      where: {
        routeName: req.params.name
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });
    
 // PUT route for updating mountains on admin page. Yes! Change code
  app.put("/api/mountain_routes/:name", function(req, res) {
    db.Mountain_route.update(req.body,
      {
        where: {
          routeName: req.body.name
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
    

  // POST route for saving a new Route?  Change Code
  app.post("/api/mountain_routes", function(req, res) {
    console.log(req.body);
    db.Mountain_route.create(req.body).then(function(data) {
        res.json(data);
      });
  });

  // DELETE route for deleting mountain?  Change code
  app.delete("/api/mountain_routes/:id", function(req, res) {
    db.Mountain_route.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.end();
      });
  });

 
};