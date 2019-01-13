require("dotenv").config();
var keys = require("../../../config/keys");
var aK = keys.google.key;


$("document").ready(function() {
    console.log("hello");
});




function getDistance(i, target){
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/directions/json?origin=Denver,CO&destination="+ peakInfo[i].peakLocation+"&key="+aK,
        method: "GET"
    }) .then(function(response){
        console.log(response);
        //For now if more than one route is listed we will simply go with the first. It will make the logic to write the loop more manageable. 
        //I also don't feel that all our our info is accurate.
        meters = 0;
        if(response.status === "ZERO_RESULTS"){
            distance = "Road Closed for Winter";
        } else {
        for(n = 0; n < response.routes[0].legs.length; n++);
        meters += parseFloat(response.routes[0].legs[0].distance.value);
        // console.log(meters);
        };
        if(meters !== 0){
            distance = Math.round((meters * 3.281) / 5280);
            console.log(distance + " miles");
            console.log(target);
            console.log(i);
            $("#mtn-"+(target)+"-conditions .distance").text(distance + "mi");
        } else {
            console.log(distance);
            console.log(target);
            console.log(i);
            $("#mtn-"+(target)+"-conditions .distance").text(distance);
        };
    
    });
}