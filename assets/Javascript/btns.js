
//========================================================//
//BUTTON CLICKS FOR TABLE FILTER/SORT
//========================================================//

//========================================================//
//The USER is LOGGED IN and CLICKS to view favorites only
//========================================================//
$("#preferences").on("click", "#favorites-filter-btn", function () {

    event.preventDefault();

    var mtnFaves = $('.favorite');

    for (i = 0; i < mtnFaves.length; i++) {
        var mtnId = $(mtnFaves[i]).closest('table').attr("id");

        if ($(mtnFaves[i]).attr("value") === "false") {
            if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
                $("#" + mtnId).hide();
            } else if ($(this).attr("data-hide") === "true") {
                $("#" + mtnId).show();
            }
        }
    }

    if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
        $(this).attr("data-hide", "true");
    } else if ($(this).attr("data-hide") === "true") {
        $(this).attr("data-hide", "false");
    }

});

$("#preferences").on("click", "#wind-speed-filter-btn", function () {
    event.preventDefault();

    var userWindInput = $("#wind-input").val();
    if (userWindInput && userWindInput != null) {
        var mtnTables = $('#table-list > table');
        console.log(mtnTables);

        for (i = 0; i < mtnTables.length; i++) {
            var mtnId = $(mtnTables[i]).attr("id");
            var mtnIdParts = mtnId.split('-');
            var match = mtnIdParts[1].match(/[0-9]/);
            if (match) {
                //this table is a mountain so check against the user wind preferences to hide/show
                console.log(userWindInput);

                var mtnWindSpeed = $("#mtn-" + (mtnIdParts[1]) + "-wind").text();
                console.log("mtnWindSpeed", mtnWindSpeed);
                var speeds = $("#mtn-" + (mtnIdParts[1]) + "-wind").text().split(" ");
                console.log("speeds", speeds);
                var minSpeed;
                var maxSpeed;

                minSpeed = speeds[0];
                if (speeds.length > 2) {
                    maxSpeed = speeds[2];
                }

                //THIS IS THE CONDITION FOR SHOW AND HIDE
                //@TODO combine these 2.  i just can't think through it right now
                //if ( maxSpeed && maxSpeed > userWindInput || minSpeed > userWindInput ) {
                if (minSpeed > userWindInput) {
                    if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
                        $("#" + mtnId).hide();
                    } else if ($(this).attr("data-hide") === "true") {
                        $("#" + mtnId).show();
                    }
                }
                if (maxSpeed && maxSpeed > userWindInput) {
                    if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
                        $("#" + mtnId).hide();
                    } else if ($(this).attr("data-hide") === "true") {
                        $("#" + mtnId).show();
                    }
                }
            }
        }

        if ($(this).attr("data-hide") === "false" || $(this).attr("data-hide") === undefined) {
            $(this).attr("data-hide", "true");
        } else if ($(this).attr("data-hide") === "true") {
            $(this).attr("data-hide", "false");
        }
    } else {
        $("#updateMsg").text("This button filters peaks by your saved wind info");
        setTimeout(function () {
            $("#updateMsg").text("");
        }, 2000);
        return;
    }

});


//========================================================//
//The USER is LOGGED IN and CLICKS to view favorites only
//========================================================//
$("#preferences").on("click", "#rank-filter-btn", function () {
    event.preventDefault();
    console.log("RANK FILTER");
    var allTables = $('#table-list > table');
    console.log(allTables);
    
    var switching, x, y, mtnIdx, mtnIdy, mtnIdPartsX, mtnIdPartsY, shouldSwitch;
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
        //start by saying: no switching is done:
        switching = false;

        /*Loop through all tables (except the
        first, which contains table template):*/
        for (var i = 1; i < allTables.length; i++) {
            console.log(i);
            // //start by saying there should be no switching:
            // shouldSwitch = false;
            // /*Get the two elements you want to compare,
            // one from current row and one from the next:*/
            
            mtnIdx = $(allTables[i]).attr("id");
            mtnIdy = $(allTables[i + 1]).attr("id");
            mtnIdPartsX = mtnIdx.split('-');
            mtnIdPartsY = mtnIdy.split('-');
            x= mtnIdPartsX[1];
            y= mtnIdPartsY[1];
            // //check if the two rows should switch place:
            // if (x > y) {
            //     //if so, mark as a switch and break the loop:
            //     shouldSwitch = true;
            //     break;
            // }
        }
        if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            allTables[i].parentNode.insertBefore(allTables[i + 1], allTables[i]);
            switching = true;
        }
    }

    // var mtnByRank = peakInfo.filter(function (question) {
    //     return question.asked === false;
    // })

    // function compare(a, b) {
    //     let comparison = 0;
    //     if (a.rank > b.rank) {
    //       comparison = -1;
    //     } else if (a.rank < b.rank) {
    //       comparison = 1;
    //     }
    //     return comparison;
    //   }
    //   var sortedPeakInfo = peakInfo;
    //   sortedPeakInfo.sort(compare);
    //   //console.log("sortedPeakInfo", sortedPeakInfo);
    //var mtnRanks = $('rank');
});

$("#preferences").on("click", "#distance-filter-btn", function () {
    event.preventDefault();
    console.log("DISTANCE FILTER");

    var mtns = $('.distance');
});