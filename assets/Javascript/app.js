$("document").ready(function(){

var mapsInfo = [{
    peakName: "Mount Elbert",
    elevation: 14433,
    rank: 1,
    trailNames: ["Mount Elbert NE Ridge"],
    trailLengths: [4.7],
    trailGains: [4700],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920"],
    trailHeadLocations: ["39.1518473,-106.4121822"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,106/forecast"]
    },
    {
    peakName: "Gray's Peak",
    elevation: 14270,
    rank: 9,
    trailNames: ["North Slopes"],
    trailLengths: [3.7],
    trailGains: [3000],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382"],
    trailHeadLocations: ["39.660789,-105.784648"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"]
    },
    {
    peakName: "Torrey's Peak",
    elevation: 14267,
    rank: 11,
    trailNames: ["Continental Divide Trail"],
    trailLengths: [3.7],
    trailGains: [4500],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.250286895884!2d-105.8205323984709!3d39.64877532942564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a5373a0c13d2f%3A0x8b1a1aefcab5da3f!2sTorreys+Peak%2C+Colorado!3m2!1d39.6427647!2d-105.82139819999999!5e1!3m2!1sen!2sus!4v1543523745630"],
    trailHeadLocations: ["39.660789,-105.784648"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"]
    },
    {
    peakName: "Mount Evans",
    elevation: 14264,
    rank: 14,
    trailNames: ["West Ridge From Summit Lake"],
    trailLengths: [5.8],
    trailGains: [2000],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d11314.288913083908!2d-105.64803532753186!3d39.58874803528306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d39.598561!2d-105.64061699999999!4m5!1s0x876ba9ca85fb4895%3A0xefa49d55b6cbb1b1!2sMt+Evans%2C+Colorado!3m2!1d39.588300499999995!2d-105.64382859999999!5e1!3m2!1sen!2sus!4v1543525392432"],
    trailHeadLocations: ["39.598561,-105.640617"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"]
    },
    {
    peakName: "Long's Peak",
    elevation: 14255,
    rank: 15,
    trailNames: ["Long's Peak Keyhole Route"],
    trailLengths: [5.6],
    trailGains: [5100],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m33!1m12!1m3!1d18298.599783917598!2d-105.60462154695804!3d40.26506057793264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m18!3e2!4m4!2s40.271509%2C+-105.556439!3m2!1d40.271508999999995!2d-105.556439!4m5!1s0x8769632e15fc175f%3A0x3df068dbb295bb56!2sLongs+Peak+-+Keyhole+Route%2C+Estes+Park%2C+CO+80517!3m2!1d40.2682237!2d-105.58703539999999!4m5!1s0x87696329ae762967%3A0xa9769b05809a8028!2sLongs+Peak%2C+Colorado!3m2!1d40.254875299999995!2d-105.6160295!5e1!3m2!1sen!2sus!4v1543527341078"],
    trailHeadLocations: ["40.271509,-105.556439"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"]
    },  
    {
    peakName: "Pikes Peak",
    elevation: 14110, 
    rank: 30,
    trailNames: ["East Slope"],
    trailLengths: [12],
    trailGains: [7600],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d36252.16433403112!2d-105.02240677139945!3d38.84783772183579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m5!1s0x871350abde6e062d%3A0x3ef5195833a8b8a8!2s2+Hydro+St%2C+Manitou+Springs%2C+CO+80829!3m2!1d38.8552651!2d-104.93300789999999!4m4!2s38.840925%2C+-105.042035!3m2!1d38.840925!2d-105.042035!5e1!3m2!1sen!2sus!4v1543538670897"],
    trailHeadLocations: ["38.855881,-104.933905"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,105/forecast"]
    },  
    {
    peakName: "Mount Bierstadt",
    elevation: 14060,
    rank: 38,
    trailNames: ["East Ridge"],
    trailLengths: [3.6],
    trailGains: [3000],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d17935.900335665396!2d-105.70703674613965!3d39.58832833605607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d39.596482!2d-105.71010199999999!4m5!1s0x876ba9eba4cd7329%3A0x6910ea09d97f633b!2sMount+Bierstadt%2C+Colorado!3m2!1d39.5827653!2d-105.6686151!5e1!3m2!1sen!2sus!4v1543538960061"],
    trailHeadLocations: ["39.596482,-105.710102"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/40,106/forecast"]
    },
    {
    peakName: "Mount Massive",
    elevation: 14421,
    rank: 2,
    trailNames: ["East Slopes"],
    trailLengths: [6.7],
    trailGains: [4500],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d33344.55411437189!2d-106.48585175559383!3d39.17586081029377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a98bdd7d3ec87%3A0x724c591f84718c26!2sMount+Massive+Trailhead+Parking+Lot%2C+Leadville%2C+CO+80461!3m2!1d39.1515051!2d-106.4194055!4m5!1s0x876a9eed65169f67%3A0x5f551784f65ce6d3!2sMt+Massive%2C+Colorado+80461!3m2!1d39.1872118!2d-106.47530599999999!5e1!3m2!1sen!2sus!4v1543530509118"],
    trailHeadLocations: ["39.151498,-106.419441"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,106/forecast"]
    },
    {
    peakName: "La Plata Peak",
    elevation: 14336,
    rank: 5, 
    trailNames: ["North West Ridge"],
    trailLengths: [4.4],
    trailGains: [4500],
    trailMapEmbeds: ["https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d36149.66248538486!2d-106.52441361925378!3d39.04854736397552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876aa0e9541da713%3A0x812000a012d4416d!2sLa+Plata+Gulch+Trailhead%2C+CO-82%2C+Buena+Vista%2C+CO+81211!3m2!1d39.067932!2d-106.5050583!4m5!1s0x876aa6c2ff3836a7%3A0x7cf4b8085e37a3d3!2sLa+Plata+Peak%2C+Colorado!3m2!1d39.0294368!2d-106.4730831!5e1!3m2!1sen!2sus!4v1543530770420"],
    trailHeadLocations: ["39.067863,-106.504948"],
    weatherLink: ["https://api.weather.gov/gridpoints/PUB/39,107/forecast"]
    }];
   


   



    var aK = "AIzaSyC7lOHjdHyf_NrgsyZfqzrgue8qiiTdu2s";
    var meters = 0;
    var distance;


    //Render MountainArray to HTML
//     for (var i = 0; i < mapsInfo.length; i++) {
//         var trailMap = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder", 0).attr("style", "border:0").attr("src", mapsInfo[i].trailMapEmbeds[0]);
//         var trailHead = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder", 0).attr("style", "border:0").attr("src", "https://www.google.com/maps/embed/v1/place?key=" + aK + "&q=" + mapsInfo[i].trailHeadLocations[0]);
//         $("#route-map").append("<p>", mapsInfo[i].peakName).append("<p>", mapsInfo[i].trailNames[0]).append(trailMap);
//         $("#route-map").append(trailHead);

    
  //Render MountainArray to HTML
//   for(var i = 0; i < 1; i++){
//         var trailMap = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder",0).attr("style","border:0").attr("src", mapsInfo[i].trailMapEmbeds[i]);
//         var trailHead = $("<iframe>").attr("width", 600).attr("height", 450).attr("frameborder",0).attr("style","border:0").attr("src", "https://www.google.com/maps/embed/v1/place?key=" + aK + "&q=" + mapsInfo[i].trailHeadLocations[0]); 
//         $("#route-" +(i+1)+ "-beta .col-md-7").append("<p>", "Trail Map").append(trailMap);
//         $("#route-" +(i+1)+ "-beta .col-md-7").append("<p>", "Trail Head: Click below for driving directions.").append(trailHead);
//         $("#mtn-"+(i+1)+"-conditions #name").text(mapsInfo[i].peakName);
//         $("#mtn-"+(i+1)+"-conditions #elevation").text(mapsInfo[i].elevation);
//         $("#mtn-"+(i+1)+"-conditions .rank").text(mapsInfo[i].rank);
//         $("#route-"+(i+1)+ " .route-name").text(mapsInfo[i].trailNames[i]);
//         $("#route-"+(i+1)+ " .route-mileage").text(mapsInfo[i].trailLengths[i]);
//         $("#route-"+(i+1)+ " .route-gain").text(mapsInfo[i].trailGains[i]);
//         getDistance(i);
 //   };

 //   function getDistance(i){

        $.ajax({
            url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=Denver,CO&destination=" + mapsInfo[i].trailHeadLocations[0] + "&key=" + aK,
            method: "GET"

        }) .then(function(response){

            // console.log(response);

            //For now if more than one route is listed we will simply go with the first. It will make the logic to write the loop more manageable.

            meters = 0;
            if (response.status === "ZERO_RESULTS") {
                distance = "Road Closed for Winter";
            } else {
                for (n = 0; n < response.routes[0].legs.length; n++);
                meters += parseFloat(response.routes[0].legs[0].distance.value);
                // console.log(meters);
            };
            if (meters !== 0) {
                distance = Math.round((meters * 3.281) / 5280);

                console.log(distance + " miles");
                console.log(i+1);
                $("#mtn-"+(i+1)+"-conditions #distance").text(distance + "mi")
            } else {
                console.log(distance);
                console.log(i+1);
                $("#mtn-"+(i+1)+"-conditions #distance").text("<p>", distance);
            };

        });


    





    // //Toggle Favorite Heart Outline to Solid
    // $("#master-table").on("click", "#favorite", function () {

    //         var favorite = $("#favorite")


    //         if (favorite.val() === "false") {
    //             favorite.removeClass("far").addClass("fas").val("true");
    //         } else {
    //             favorite.removeClass("fas").addClass("far").val("false");
    //         }
    // })

    //Toggle Routes View


    // $(".routes-table").hide();
    
    // $("#table-list").on("click", "#plus-btn", function () {
    //     if ($(this).hasClass("fa-plus-square")) {
    //         $(this).removeClass("fa-plus-square")
    //     } else {
    //         $(this).addClass("fa-plus-square");
    //     }


    //     var mtnID = $(this).parent().parent().parent().parent().attr("id")
    //     // console.log(mtnID);


    //     $("#" + mtnID + "-routes").slideToggle(500, "swing", function () { 
    //     });
    // });


    //Toggle Route Beta View
    // $(".route-beta").hide();

    // $("#table-list").on("click", "#beta-btn", function () {
    //     if ($(this).hasClass("fa-map-marked-alt")) {
    //         $(this).removeClass("fa-map-marked-alt")
    //     } else {
    //         $(this).addClass("fa-map-marked-alt");
    //     }
    //     var routeID = $(this).parent().parent().attr("id");
    //     // console.log(routeID)
        
    //     $("#"+routeID + "-beta").slideToggle(500, "swing", function () {  
    //     });
    // });

    var times = [];
    $.ajax({
        url: mapsInfo[0].weatherLink[0],
        method: "GET"
    
    }).then(function (response) {
      
            // var startTime=response.properties.periods[0].startTime;
            // var days=response.properties.periods[0].number;
            // var temperature=response.properties.periods[0].temperature;
            // var windSpeed=response.properties.periods[0].windSpeed;
            // var windDirection=response.properties.periods[0].windDirection;
            // var shortForecast=response.properties.periods[0].shortForecast;
            // var detailedForecast=response.properties.periods[0].detailedForecast;
    
        // console.log(response);
        
        for (var i = 0; i < 6; i++) { 
            // console.log(response.properties.periods[i]);
    
            times.push({
                number: response.properties.periods[i].number,
                startTime: response.properties.periods[i].startTime,
                temperature: response.properties.periods[i].temperature,
                windSpeed: response.properties.periods[i].windSpeed,
                windDirection: response.properties.periods[i].windDirection,
                shortForecast: response.properties.periods[i].shortForecast,
                detailedForecast:response.properties.periods[i].detailedForecast,
            });
            
        }
      
        var routeID = $(this).parent().parent().attr("id");
        console.log(routeID)

        $("#" + routeID + "-beta").slideToggle(500, "swing", function () {
        });
    });




var times = [];
    
    for(var i = 0; i < mapsInfo.length; i++){
        console.log(mapsInfo[i].weatherLink);
        getWeather(i);
    };

    function getWeather(i) {
    var times = [];
    $.ajax({
        url: mapsInfo[i].weatherLink,
        method: "GET"
    
    }).then(function(response){
        // console.log(response);
        for (var n = 0; n < 6; n++) { 
            times.push({
                number: response.properties.periods[n].number,
                startTime: response.properties.periods[n].startTime,
                temperature: response.properties.periods[n].temperature,
                windSpeed: response.properties.periods[n].windSpeed,
                windDirection: response.properties.periods[n].windDirection,
                shortForecast: response.properties.periods[n].shortForecast,
                detailedForecast:response.properties.periods[n].detailedForecast,
                icon: response.properties.periods[n].icon
            });
            
        }
    
        console.log(times);
        
    });
    







