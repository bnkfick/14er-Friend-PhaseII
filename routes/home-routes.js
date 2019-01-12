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

        db.Mountain.findAll({
            // Add order conditions here....
            order: [
                ['rank', 'ASC'],
            ],
        })
            .then(function (data) {

                //iterate over all of the mountains 
                for (var x = 0; x < data.length; x++) {
                    make 
                }
                Promise.all([
                    get(`http://localhost:${PORT}/api/mountain_routes`),
                    get(`http://localhost:${PORT}/api/mountains`),
                ]).then(([mtns, trails]) =>
                    res.json([mtns, trails]))
                    .catch(err => res.send(err))
            })
    })

};