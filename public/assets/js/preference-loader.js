$("document").ready(function(){

    var userid = $("#preferences-submit-btn").data("userid");
    //console.log(userid);

    $.get("/api/user/preferences/" + userid, function (data) {
        //console.log(data);
        if (data) {
            $("#min-temp-slider").slider('setValue', data.tempMin, true);
            $("#max-wind-slider").slider('setValue', data.windLimit, true);
            $("#max-precip-slider").slider('setValue', data.precipLimit, true);
            $("#max-dist-slider").slider('setValue', data.distMax, true);
        }
    });
    $.get("/api/user/profile/" + userid, function (data) {
        //console.log(`profile ${data}`);
        if (data) {
            $("#fname-input").val(data.firstname);
            $("#lname-input").val(data.lastname);
            $("#mobile-input").val(data.mobile);
            $("#bio-area").val(data.bio);
        }
    });
});