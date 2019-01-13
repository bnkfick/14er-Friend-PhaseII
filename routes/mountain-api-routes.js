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

  // GET route for getting all of the mountains
  app.get("/api/mountains/", function(req, res) {
    console.group("in api/mountains");
    db.Mountain.findAll({})
      .then(function(data) {
        res.json(data);
      });
  });

  // Get route for returning specific mountain
  
  app.get("/api/mountains/:name", function(req, res) {
    db.Mountain.findOne({
      where: {
        peakName: req.params.name
      }
    })
      .then(function(data) {
        res.json(data);
      });
  });
    
//  PUT route for updating mountains on admin page. Yes! Change code
  // Need to be more specific about what is being updated
  app.put("/api/mountainroutes/", function(req, res) {
    db.Mountain.update(req.body,
      {
        where: {
          rank: rank,
          peakName: req.body.peakName,
          elevation: elevation,
          latitude: latitude,
          longitude: longitude,
          mountainRange: mountainRange
        }
      })
      .then(function(data) {
        res.json(data);
      });
  });
    

  // POST route for saving a new Mountain
  app.post("/api/mountains", function(req, res) {
    // console.log(req.body);
    db.Mountain.create(req.body).then(function(data) {
        res.json(data);
      });
  });

  // DELETE route for deleting mountain
  app.delete("/api/mountains/:id", function(req, res) {
    db.Mountain.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.end();
      });
  });

 
};