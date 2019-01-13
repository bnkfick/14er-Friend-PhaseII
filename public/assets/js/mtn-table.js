$(function () {
    //Everything inside this function! :)

    //Toggle Routes View----------------------------------------
    $(".routes-table").hide();
    
    $(".conditions").on("click", ".toggle-show-routes-btn", function () {
        if ($(this).find(`i`).hasClass("fa-plus-square")) {
            $(this).find(`i`).removeClass("fa-plus-square")
        } else {
            $(this).find(`i`).addClass("fa-plus-square");
        }

        var mtnID = $(this).find(`i`).attr("id");
        console.log(mtnID);

        $(`#${mtnID}-routes`).slideToggle(500, "swing", function () { 
        });
    });
    
    //Toggle Route Beta View
    $(".route-beta").hide();

    $(".route-info").on("click", ".toggle-show-route-beta-btn", function () {
        if ($(this).find(`i`).hasClass("fa-map-marked-alt")) {
            $(this).find(`i`).removeClass("fa-map-marked-alt")
        } else {
            $(this).find(`i`).addClass("fa-map-marked-alt");
        }
        var routeID = $(this).find(`i`).attr("id");
        console.log(routeID)
        
        $(`#${routeID}-beta`).slideToggle(500, "swing", function () {  
        });
    });
    
});
    