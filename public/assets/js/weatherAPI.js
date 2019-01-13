//Start with one link stored as a variable, and see if I can get data in the first row.

$("document").ready(function(){

    var peakInfo = [
        {
            rank: 1,
            peakName: "Mount Elbert",
            elevation: 14433,
            peakLocation: "39.1178157,-106.4452306",
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/33,107/forecast"],
            trails: [
                {
                    routeID: 11,
                    routeName: "Mount Elbert - NE Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920",
                    trailHeadLocation: "39.1518473,-106.4121822",
                    mileage: 9.5,
                    gain: 4700,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 12,
                    routeName: "Mount Elbert - Box Creek Couloirs",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d21808.789909414772!2d-106.44900905419223!3d39.13561769450933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a9896bb697417%3A0x7db7846336fd41c1!2sMt+Elbert+Trailhead+parking+lot%2C+Twin+Lakes%2C+CO+81251!3m2!1d39.1518473!2d-106.41218219999999!4m5!1s0x876aa1f6a3ec0407%3A0xb137245172b73c6!2sMount+Elbert%2C+Colorado!3m2!1d39.1178157!2d-106.4452306!5e1!3m2!1sen!2sus!4v1543515830920",
                    trailHeadLocation: "39.09933, -106.36714",
                    mileage: 8.5,
                    gain: 4150,
                    difficulty: 3,
                    exposure: 3,
                },
            ],
        },
        {
            rank: 9,
            peakName: "Gray's Peak",
            elevation: 14270,
            peakLocation: "39.6336054,-105.81716399999999",
            weatherLink: ["https://api.weather.gov/gridpoints/BOU/33,58/forecast"],
            trails: [
                {
                    routeID: 91,
                    routeName: "Gray's Peak - North Slopes",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 8.00,
                    gain: 3000,
                    difficulty: 1,
                    exposure: 1,
                },
                {
                    routeID: 92,
                    routeName: "Gray's Peak - SW Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.660124769507!2d-105.81869269847468!3d39.64724068017239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a537ad25d62eb%3A0xee3b27c04410d6ee!2sGrays+Peak%2C+Colorado!3m2!1d39.6336054!2d-105.81716399999999!5e1!3m2!1sen!2sus!4v1543523584382",
                    trailHeadLocation: "39.60045,-105.83816",
                    mileage: 10.25,
                    gain: 3800,
                    difficulty: 3,
                    exposure: 3,
                },
            ],
        },
        {
            rank: 11, 
            peakName: "Torrey's Peak",
            elevation: 14267,
            peakLocation:"39.6427647,-105.82139819999999",
            weatherLink: ["https://api.weather.gov/gridpoints/BOU/33,58/forecast"],
            trails: [
                {
                    routeID: 111,
                    routeName: "Torrey's Peak - Kelso Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.250286895884!2d-105.8205323984709!3d39.64877532942564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a5373a0c13d2f%3A0x8b1a1aefcab5da3f!2sTorreys+Peak%2C+Colorado!3m2!1d39.6427647!2d-105.82139819999999!5e1!3m2!1sen!2sus!4v1543523745630",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 6.75,
                    gain: 3100,
                    difficulty: 3,
                    exposure: 4,
                },
                {
                    routeID: 112,
                    routeName: "Torrey's Peak - Emperor Couloir",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d18464.250286895884!2d-105.8205323984709!3d39.64877532942564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a5332f585304f%3A0xa954806de5d605fd!2sGrays+And+Torreys+Trailhead%2C+3025+Stevens+Gulch+Rd%2C+Silver+Plume%2C+CO+80476!3m2!1d39.6607948!2d-105.78464729999999!4m5!1s0x876a5373a0c13d2f%3A0x8b1a1aefcab5da3f!2sTorreys+Peak%2C+Colorado!3m2!1d39.6427647!2d-105.82139819999999!5e1!3m2!1sen!2sus!4v1543523745630",
                    trailHeadLocation: "39.660789,-105.784648",
                    mileage: 9.5,
                    gain: 4500,
                    difficulty: 4,
                    exposure: 3,
                },
            ],
        },
        {
            rank: 14, 
            peakName: "Mount Evans",
            elevation: 14264,
            peakLocation: "39.588300499999995,-105.64382859999999",
            weatherLink: ["https://api.weather.gov/gridpoints/BOU/39,55/forecast"],
            trails: [
                {
                    routeID: 141,
                    routeName: "West Ridge From Summit Lake",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d11314.288913083908!2d-105.64803532753186!3d39.58874803528306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d39.598561!2d-105.64061699999999!4m5!1s0x876ba9ca85fb4895%3A0xefa49d55b6cbb1b1!2sMt+Evans%2C+Colorado!3m2!1d39.588300499999995!2d-105.64382859999999!5e1!3m2!1sen!2sus!4v1543525392432",
                    trailHeadLocation: "39.598561,-105.640617",
                    mileage: 5.8,
                    gain: 2000,
                    difficulty: 2,
                    exposure: 2,
                },
            ],
        },
        {
            rank: 15, 
            peakName: "Long's Peak",
            elevation: 14255,
            peakLocation: "40.254875299999995,-105.6160295",
            weatherLink: ["https://api.weather.gov/gridpoints/BOU/42,86/forecast"],
            trails: [
                {
                    routeID: 151,
                    routeName: "Long's Peak Keyhole Route",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m33!1m12!1m3!1d18298.599783917598!2d-105.60462154695804!3d40.26506057793264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m18!3e2!4m4!2s40.271509%2C+-105.556439!3m2!1d40.271508999999995!2d-105.556439!4m5!1s0x8769632e15fc175f%3A0x3df068dbb295bb56!2sLongs+Peak+-+Keyhole+Route%2C+Estes+Park%2C+CO+80517!3m2!1d40.2682237!2d-105.58703539999999!4m5!1s0x87696329ae762967%3A0xa9769b05809a8028!2sLongs+Peak%2C+Colorado!3m2!1d40.254875299999995!2d-105.6160295!5e1!3m2!1sen!2sus!4v1543527341078",
                    trailHeadLocation: "40.271509,-105.556439",
                    mileage: 5.6,
                    gain: 5100,
                    difficulty: 3,
                    exposure: 4,
                },
            ],
        },
        {
            rank: 30, 
            peakName: "Pikes Peak",
            elevation: 14110,
            peakLocation: "38.840925,-105.042035",
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/81,91/forecast"],
            trails: [
                {
                    routeID: 301,
                    routeName: "East Slope",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m27!1m12!1m3!1d36252.16433403112!2d-105.02240677139945!3d38.84783772183579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m12!3e2!4m5!1s0x871350abde6e062d%3A0x3ef5195833a8b8a8!2s2+Hydro+St%2C+Manitou+Springs%2C+CO+80829!3m2!1d38.8552651!2d-104.93300789999999!4m4!2s38.840925%2C+-105.042035!3m2!1d38.840925!2d-105.042035!5e1!3m2!1sen!2sus!4v1543538670897",
                    trailHeadLocation: "38.855881,-104.933905",
                    mileage: 12,
                    gain: 7600,
                    difficulty: 1,
                    exposure: 1,
                },
            ],
        },
        {
            rank: 38, 
            peakName: "Mount Bierstadt",
            elevation: 14060,
            peakLocation: "39.5827653,-105.6686151",
            weatherLink: ["https://api.weather.gov/gridpoints/BOU/38,55/forecast"],
            trails: [
                {
                    routeID: 381,
                    routeName: "East Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d17935.900335665396!2d-105.70703674613965!3d39.58832833605607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e2!4m3!3m2!1d39.596482!2d-105.71010199999999!4m5!1s0x876ba9eba4cd7329%3A0x6910ea09d97f633b!2sMount+Bierstadt%2C+Colorado!3m2!1d39.5827653!2d-105.6686151!5e1!3m2!1sen!2sus!4v1543538960061",
                    trailHeadLocation: "39.596482,-105.710102",
                    mileage: 3.6,
                    gain: 3000,
                    difficulty: 2,
                    exposure: 1,
                },
            ],
        },
        {
            rank: 2, 
            peakName: "Mount Massive",
            elevation: 14421,
            peakLocation: "39.1872118,-106.47530599999999",
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/32,111/forecast"],
            trails: [
                {
                    routeID: 21,
                    routeName: "East Slopes",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d33344.55411437189!2d-106.48585175559383!3d39.17586081029377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876a98bdd7d3ec87%3A0x724c591f84718c26!2sMount+Massive+Trailhead+Parking+Lot%2C+Leadville%2C+CO+80461!3m2!1d39.1515051!2d-106.4194055!4m5!1s0x876a9eed65169f67%3A0x5f551784f65ce6d3!2sMt+Massive%2C+Colorado+80461!3m2!1d39.1872118!2d-106.47530599999999!5e1!3m2!1sen!2sus!4v1543530509118",
                    trailHeadLocation: "39.151498,-106.419441",
                    mileage: 6.7,
                    gain: 4500,
                    difficulty: 2,
                    exposure: 2,
                },
            ],
        },
        {
            rank: 5, 
            peakName: "La Plata Peak",
            elevation: 14336,
            peakLocation: "39.0294368!2d-106.4730831",
            weatherLink: ["https://api.weather.gov/gridpoints/PUB/32,104/forecast"],
            trails: [
                {
                    routeID: 51,
                    routeName: "North West Ridge",
                    routeMapEmbed: "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d36149.66248538486!2d-106.52441361925378!3d39.04854736397552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x876aa0e9541da713%3A0x812000a012d4416d!2sLa+Plata+Gulch+Trailhead%2C+CO-82%2C+Buena+Vista%2C+CO+81211!3m2!1d39.067932!2d-106.5050583!4m5!1s0x876aa6c2ff3836a7%3A0x7cf4b8085e37a3d3!2sLa+Plata+Peak%2C+Colorado!3m2!1d39.0294368!2d-106.4730831!5e1!3m2!1sen!2sus!4v1543530770420",
                    trailHeadLocation: "39.067863,-106.504948",
                    mileage: 4.4,
                    gain: 4500,
                    difficulty: 2,
                    exposure: 2,
                },
            ],
        },
        
    ];
    
        
        // for(var i = 0; i < mapsInfo.length; i++){
        //     console.log(mapsInfo[i].weatherLink);
        //     getWeather(i);
        // };
        var i = 0;
        var target = 1;
        
        getWeatherConditions(i,target);

        function getWeatherConditions(i, target) {
            var times = [];
            $.ajax({
            url: peakInfo[i].weatherLink,
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
                        detailedForecast: response.properties.periods[n].detailedForecast
                    });
                
                };
                console.log(times[0]);
    
                //Render weather to tables
                $("#"+target+">tbody>#conditions>.windspeed").text(times[0].windSpeed);
                $("#"+target+">tbody>#conditions>.temperature").text(times[0].temperature + " F");
                $("#"+target+">tbody>#conditions>.wind-direction").text(times[0].windDirection);
                $("#"+target+">tbody>#conditions>.short-forecast").text(times[0].shortForecast);
                
                //Conditional Formatting for Windspeed
                // var windSpeedString = times[0].windSpeed;
                // var windSpeedRange = windSpeedString.match(/\d+/g).map(Number);
                // //This returns array of low and high wind speeds
                // var windConditions = $("#mtn-" + (target) + "-wind") 
    
                // if (windSpeedRange[1] > 75) {
                //     windConditions.css("background-color", "rgba(191, 78, 63, 0.4)")
                // } else if ( (windSpeedRange[0] > 30) && (windSpeedRange[1] <= 75 ) ) {
                //     windConditions.css("background-color", "rgba(229, 238, 73, 0.4)")
                // } else {
                //     windConditions.css("background-color", "rgba(63, 191, 63, 0.4)")
                // }
    
                //Conditional Formatting for Temperature
                // var temp = times[0].temperature;
    
                // var tempConditions = $("#mtn-" + target + "-temperature");
    
                // if (temp < 32) {
                //     tempConditions.css("background-color", "rgb(30, 201, 255, 0.4)");
                // } else if ((temp > 32) && (temp < 60) ) {
                //     tempConditions.css("background-color", "rgba(63, 191, 63, 0.4)");
                // } else {
                //     tempConditions.css("background-color", "rgba(191, 78, 63, 0.4)");
                // }
    
                //Conditional Formatting for Short Forecast
            //     var shortForecast = times[0].shortForecast;
    
            //     var shortForecastConditions = $("#mtn-" + (target) + "-short-forecast");
    
            //     if ((shortForecast === "Chance Snow Showers") ||
            //     (shortForecast === "Snow Showers Likely") ||
            //     (shortForecast === "Snow Showers") ||
            //     (shortForecast  === "Slight Chance Snow Showers") ||
            //     (shortForecast === "Partly Cloudy then Slight Chance Snow Showers") ||
            //         (shortForecast === "Mostly Cloudy then Chance Snow Showers") ||
            //         (shortForecast  === "Isolated Snow Showers then Mostly Sunny")
            // ) {
            //     shortForecastConditions.css('background-image', 'url("http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/snowflake-icon.png")')
            // } else {
            //     shortForecastConditions.text(shortForecast);
            // }
        });

    };
});
        
        
