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
  //May want to pass user favorites by user id, /:id
  app.get('/', (req, res) => {

    
    Promise.all([
      get(`http://localhost:${PORT}/api/mountains`),
      get(`http://localhost:${PORT}/api/mountain_routes`),
    ]).then(([mtns, trails]) =>
      res.render('pages/index', {
        mtns: mtns,
        trails: trails
      }))
      .catch(err => res.send(err))
  });

  //Page Views
  //Will eventually need to be /climber-settings/:id
  app.get('/climber-settings', (req, res) => {
    res.render('pages/climber-settings');
  });

  //Tap the mountain-api-routes with :name
  app.get('/mountain/', (req, res) => {
    res.render('pages/mountain');
  });
  
  app.get('/dev-team', (req, res) => {
    res.render('pages/dev-team');
  });

  //Rough out APIs used.  Good resource links.  Challenges. CodePen demos.
  //Also Credits to photos
  app.get('/technologies', (req, res) => {
    res.render('pages/technologies');
  });

  //Eventually want to be able to monitor content being submitted by user (photos/comments)
  //Also want to be able to update mtn/route descriptions
  //Also want to be able to push out text/emal/mobile alerts...road closure/avi danger/accident reports/missing hikers/forest fires/thunderstorms/etc.
  //Will need to pass admin approved :id to unlock and access
  app.get('/admin', (req, res) => {
    res.render('pages/admin');
  });








};
//      res.render('pages/index', { mtns }  )) doesn't work
//      res.render('pages/index', mtns  )) doesn't work 
//      res.render('pages/index', { mtns: mtns }  ))  works 

//res.render('pages/index', { mtns: data} ); //works
//res.json([mtns, trails])) works //works
