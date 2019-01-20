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
        //console.log(mtnID);

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
        //console.log(routeID)
        
        $(`#${routeID}-beta`).slideToggle(500, "swing", function () {  
        });
    });

    //Style Functions======================
    //ROUTE EXPOSURE: 
    function styleRouteExposure(){
        var exposureArray = $(`.progress-bar`).text().split("");
        // console.log(exposureArray);
        var progressBar = $(`.progress-bar`);
        // console.log(progressBar);
        for (var i = 0; i < exposureArray.length; i++) {
            // console.log(exposureArray[i]);
            // console.log(progressBar[i]);
            // .eq(i) needed because of type of object array returned
             if (exposureArray[i] === "4") {
                progressBar.eq(i).removeClass("bg-success").addClass("bg-danger").attr("style", "width: 100%").text("EXTREME");
                } else if (exposureArray[i] === "3") {
                    progressBar.eq(i).removeClass("bg-success").addClass("bg-warning").attr("style", "width: 75%").text("HIGH");
                } else if (exposureArray[i] === "2") {
                    progressBar.eq(i).removeClass("bg-success").attr("style", "width: 50%").text("MODERATE");
                } else {
                    progressBar.eq(i).text("LOW");
                }
        }
    };

    function styleDifficulty() {
        var difficultyArray = $(`.route-difficulty`).text().split("");
        //ROUTE DIFFICULTY 
        // var selectRouteDifficulty = $newRouteTable.find(".route-difficulty");
        // var difficulty = this.difficulty;
        var easy = '<i class="fas fa-circle fa-2x"></i>';
        var moderate = '<i class="fas fa-square fa-2x"></i>';
        var hard = '<i class="fas fa-mountain fa-2x"></i>';
        var extreme = '<i class="fas fa-mountain fa-2x"></i><i class="fas fa-mountain fa-2x"></i>';

        for (var i = 0; i < difficultyArray.length; i++) {
            if (difficultyArray[i] === "4") {
                $(`.route-difficulty`).eq(i).empty().append(extreme);
            } else if (difficultyArray[i] === "3") {
                $(`.route-difficulty`).eq(i).empty().append(hard);
            } else if (difficultyArray[i] === "2") {
                $(`.route-difficulty`).eq(i).empty().append(moderate);
            } else {
                $(`.route-difficulty`).eq(i).empty().append(easy);
            }
        }
    } 

    $(".container").on("click", ".favorite", function () {
        var mtnId = $(this).closest('table').attr("id");
        
        
        if ($(this).attr("value") === "false") {
            $(this).removeClass("far").addClass("fas").attr("value", "true");
        } else {
            $(this).removeClass("fas").addClass("far").attr("value", "false");
        }
    });

    // Function Calls====================================
    styleRouteExposure();
    styleDifficulty();
});
    