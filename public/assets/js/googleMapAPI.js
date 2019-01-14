$("document").ready(function() {
    console.log("hello");
    $.get("api/distances/", function(data){
        console.log(data);
        for(var i = 0; i < data.length; i++) {
            var target = data[i].target;
            console.log(target);
           $("#mtn-"+target+">tbody>.conditions>.distance").text(data[i].dist);
        }
    });
});

