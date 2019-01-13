// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our Todo model
var db = require("../models");
var PORT = process.env.PORT || 8080;
const fetch = require('node-fetch');
// Routes
// =============================================================
module.exports = function (app) {

  function get(url) {
    console.log("get url: " + url);
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }
  
  //feed View the result of multiple server responses
  //OUCH
  app.get('/', (req, res) => {
    console.log("=============================================");
    console.log(`req.user ${req.user}`);
    var user = req.user;
    Promise.all([
      req.user,
      get(`http://localhost:${PORT}/api/mountains`),
      get(`http://localhost:${PORT}/api/mountain_routes`),
    ]).then(([user, mtns, trails]) =>
      res.render('pages/index', {
        user: user,
        mtns: mtns,
        trails: trails
      }))
      .catch(err => res.send(err))
  });

  app.get('/climber-settings', function (req, res) {
    res.render('pages/climber-settings');
  })
};
//      res.render('pages/index', { mtns }  )) doesn't work
//      res.render('pages/index', mtns  )) doesn't work 
//      res.render('pages/index', { mtns: mtns }  ))  works 

//res.render('pages/index', { mtns: data} ); //works
//res.json([mtns, trails])) works //works
