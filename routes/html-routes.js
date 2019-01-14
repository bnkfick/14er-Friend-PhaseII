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
      fetch(url, { credentials: 'include' })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    })
  }

  //feed View the result of multiple server responses
  app.get('/', (req, res) => {

    var currUser;
    if ( req.user ) {
      console.log(req.user);
    }
    else {
      console.log("no current user");
    }
    if ( req.user ) {
      currUser = {
        id: req.user.id,
        user_name: req.user.user_name,
        password: req.user.password,
        email: req.user.email,
        google_id: req.user.google_id,
        thumbnail: req.user.thumbnail
      };
    }
    Promise.all([
      currUser,
      get(`http://localhost:${PORT}/api/mountains`),
      get(`http://localhost:${PORT}/api/mountain_routes`),
    ]).then(([user, mtns, trails]) =>
      res.render('pages/index', {
        user: currUser,
        mtns: mtns,
        trails: trails
      }))
      .catch(err => res.send(err))
  });


};
//      res.render('pages/index', { mtns }  )) doesn't work
//      res.render('pages/index', mtns  )) doesn't work 
//      res.render('pages/index', { mtns: mtns }  ))  works 

//res.render('pages/index', { mtns: data} ); //works
//res.json([mtns, trails])) works //works
