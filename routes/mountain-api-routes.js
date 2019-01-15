// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our database models
var db = require("../models");
var keys = require("../config/keys");
var key = keys.google.key;
var axios = require("axios");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the mountains
  app.get("/api/mountains/", function(req, res) {
    // console.group("in api/mountains");
    db.Mountain.findAll({})
      .then(function(data) {
        // console.log(data);
        res.json(data);
      });
  });

  // Get information for distances:
app.get("/api/distances/", function(req, res) {
	console.log("get distances");
	db.Mountain.findAll({})
		.then((data) => {
		// console.log(data);
		var distances = [];
		Promise.all(data.map(function(mountain, index) {
			var target = index + 1;
			var lat = mountain.latitude;
			var long = mountain.longitude;
			var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Denver,CO&destination=' + lat + ',' + long + '&key=' + key;
			// console.log(url);
			// getDistance(target);
			return new Promise(function(resolve, reject) {
				axios({
					method: 'get',
					url: url
				}).then((response) => {
					// console.log(response.data);
					meters = 0;
					if (response.data.status === "ZERO_RESULTS") {
						distance = "Road Closed for Winter";
					} else {
						for (n = 0; n < response.data.routes[0].legs.length; n++);
						meters += parseFloat(response.data.routes[0].legs[0].distance.value);
						// console.log(meters);
					};
					if (meters !== 0) {
						distance = Math.round((meters * 3.281) / 5280);
						// console.log(distance + " miles");
						// console.log(target);
						// console.log(i);
						var dist = {
							dist: (distance + "mi"),
							target: target
						};
						// console.log(dist);
						distances.push(dist);
						resolve(true);
						console.log(distances);
					} else {
						// console.log(distance);
						// console.log(target);
						// console.log(i);
						var dist = {
							dist: (distance),
							target: target
						};
						// console.log(dist);
						distances.push(dist);
						resolve(true);
						console.log(distances);
					};
				}).catch((error) => {
					console.log(error);
				});
			});
		})).then(function(resolved) {
			console.log("distances", distances);
			res.json(distances);
		})

	});
});





  // // Get information for distances:
  // app.get("/api/distances/", function (req, res) {
  //   console.log("get distances");
  //   db.Mountain.findAll({})
  //     .then(async (data) => {
  //       // console.log(data);

        
  //       var distances = [];

  //       for await (obj of data) {
  //         var target = data.indexOf(obj) + 1;
  //         var lat = obj.latitude;
  //         var long = obj.longitude;
  //         var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=Denver,CO&destination='+ lat + ',' + long +'&key='+key;
  //         // console.log(url);
  //         getDistance(target);
  //         //This may be needed at some point.
  //         //https://cors-anywhere.herokuapp.com/
      
  //         function getDistance(target) {
  //           axios({
  //             method: 'get',
  //             url: url
  //           }).then((response) => {
  //                 // console.log(response.data);
  //                 meters = 0;
  //                 if(response.data.status === "ZERO_RESULTS"){
  //                     distance = "Road Closed for Winter";
  //                 } else {
  //                 for(n = 0; n < response.data.routes[0].legs.length; n++);
  //                 meters += parseFloat(response.data.routes[0].legs[0].distance.value);
  //                 // console.log(meters);
  //                 };
  //                 if(meters !== 0){
  //                     distance = Math.round((meters * 3.281) / 5280);
  //                     // console.log(distance + " miles");
  //                     // console.log(target);
  //                     // console.log(i);
  //                     var dist = {
  //                       dist: (distance + "mi"),
  //                       target: target
  //                     };
  //                     // console.log(dist);
  //                     distances.push(dist);
  //                     console.log(distances);
  //                 } else {
  //                     // console.log(distance);
  //                     // console.log(target);
  //                     // console.log(i);
  //                     var dist = {
  //                       dist: (distance),
  //                       target: target
  //                     };
  //                     // console.log(dist);
  //                     distances.push(dist);
  //                     console.log(distances);
  //                 };
  //               }).catch((error) => {
  //                 console.log(error);
  //                 });
  //         };
  //       // When the data comes back. Loop through the object, and get all of the peak locations and push them into an array. 
  //       console.log("end of loop");
  //       // Perhaps I can eliminate a step here and just get the distances and push those into an array.
  //     };
          
        
      
  //       // console.log("hello");
  //       // console.log(distances);
  //       //After that, loop through that array, and run the get distance function for each location.
  //       //See if we can do this with the limited lat/long in the database vs the peak location that we originally used in the object from last project.
     


  //       //I may have to feed in the key to our functions in order to not lose it in scope.
  //       //Package the distance along with it's target in the render table as key value pairs, and push the objects into an array.
  //       //Package that as an object and send it to the front with a res.json.
  //       res.json(distances);
  //     });
          
  // });

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