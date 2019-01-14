//Start with one link stored as a variable, and see if I can get data in the first row.

$("document").ready(function(){

    function getWeatherConditions(target, link) {
        var times = [];
        $.ajax({
        url: link,
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
            // console.log(times[0]);

            //Render weather to tables
            $("#mtn-"+target+">tbody>.conditions>.windspeed").text(times[0].windSpeed);
            $("#mtn-"+target+">tbody>.conditions>.temperature").text(times[0].temperature + " F");
            $("#mtn-"+target+">tbody>.conditions>.wind-direction").text(times[0].windDirection);
            $("#mtn-"+target+">tbody>.conditions>.short-forecast").text(times[0].shortForecast);
            
            //Conditional Formatting for Windspeed
            var windSpeedString = times[0].windSpeed;
            var windSpeedRange = windSpeedString.match(/\d+/g).map(Number);
            //This returns array of low and high wind speeds
            var windConditions = $("#mtn-" + (target) + ">tbody>.conditions>.windspeed") 

            if (windSpeedRange[1] > 75) {
                windConditions.css("background-color", "rgba(191, 78, 63, 0.4)")
            } else if ( (windSpeedRange[0] > 30) && (windSpeedRange[1] <= 75 ) ) {
                windConditions.css("background-color", "rgba(229, 238, 73, 0.4)")
            } else {
                windConditions.css("background-color", "rgba(63, 191, 63, 0.4)")
            }

            //Conditional Formatting for Temperature
            var temp = times[0].temperature;

            var tempConditions = $("#mtn-" + target + ">tbody>.conditions>.temperature");

            if (temp < 32) {
                tempConditions.css("background-color", "rgb(30, 201, 255, 0.4)");
            } else if ((temp > 32) && (temp < 60) ) {
                tempConditions.css("background-color", "rgba(63, 191, 63, 0.4)");
            } else {
                tempConditions.css("background-color", "rgba(191, 78, 63, 0.4)");
            }

            //Conditional Formatting for Short Forecast
            var shortForecast = times[0].shortForecast;

            var shortForecastConditions = $("#mtn-" + (target) + ">tbody>.conditions>.short-forecast");

            if ((shortForecast === "Chance Snow Showers") ||
            (shortForecast === "Snow Showers Likely") ||
            (shortForecast === "Snow Showers") ||
            (shortForecast  === "Slight Chance Snow Showers") ||
            (shortForecast === "Partly Cloudy then Slight Chance Snow Showers") ||
                (shortForecast === "Mostly Cloudy then Chance Snow Showers") ||
                (shortForecast  === "Isolated Snow Showers then Mostly Sunny")
            ) {
                shortForecastConditions.css('background-image', 'url("http://icons.iconarchive.com/icons/icons8/christmas-flat-color/256/snowflake-icon.png")')
            } else {
                shortForecastConditions.text(shortForecast);
            }
        });
    };

    $.get("api/mountains/", function(data){
        // console.log(data);
        for(var i = 0; i < data.length; i++) {
            var target = i + 1;
            var link = data[i].weatherLink;
            getWeatherConditions(target, link);
        }
    });
});
        
        
