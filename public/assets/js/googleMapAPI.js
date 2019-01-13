$("document").ready(function() {
    console.log("hello");
    $.get("api/mountain_routes/", function(data){
        console.log(data);
        for(var i = 0; i < data.length; i++) {
            var target = i + 1;
            // var link = data[i].weatherLink;
            // embedRouteMaps(target, link);
        }
    });
});

