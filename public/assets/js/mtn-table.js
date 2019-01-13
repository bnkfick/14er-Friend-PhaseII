$(function () {
    //Everything inside this function! :)

    //Toggle Routes View----------------------------------------
    $(".routes-table").hide();
    
    $("#table-list").on("click", ".toggle-show-routes-btn", function () {
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
    
        
    
});
    