$(function () {
    //Everything inside this function! :)

    //Toggle Routes View----------------------------------------
    $(".routes-table").hide();
    
    $("#table-list").on("click", "#toggle-show-routes-btn", function () {
        if ($(this).hasClass("fa-plus-square")) {
            $(this).removeClass("fa-plus-square")
        } else {
            $(this).addClass("fa-plus-square");
        }

        var mtnID = $(this).parent().parent().parent().parent().attr("id")
        console.log(mtnID);

        $("#" + mtnID + "-routes").slideToggle(500, "swing", function () { 
        });
    });
    
        
    
});
    