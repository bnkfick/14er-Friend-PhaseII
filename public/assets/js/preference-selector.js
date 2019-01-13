$(function () {
    //Everything inside this function! :)

    //Toggle #about partial
    //Delete .hide() after dev
    $(`#about`).hide();

    $(`#about`).on(`click`, function () {
        $(`#about`).slideUp("slow");
    });

    //Toggle #preference-box partial
    //Show/Hide depending on Login Status
    // $(`#preference-box`).hide()
    function preferenceBtnState() {
        var btn = $(`#preference-btn`);
        if ($(`#preference-box:visible`)) {
            btn.removeClass(`fa-plus-square`);
        } else {
            btn.addClass(`fa-plus-square`);
        }
    }

    preferenceBtnState();

    $(`#preferences`).on('click', `#toggle-preference-box`, function () {
        var btn = $(`#preference-btn`)

        if (btn.hasClass(`fa-plus-square`)) {
            btn.removeClass(`fa-plus-square`)
        } else {
            btn.addClass(`fa-plus-square`);
            // $(this).parent().parent().parent().addClass(`ptb-25`)
        };
        $(`#preference-box`).slideToggle(500, `swing`, function () {

        });
    })

    //Sliders==========================================================
    //Credit for basic to https://seiyria.com/bootstrap-slider/#example-13
    $("#min-temp-slider").slider({
        ticks: [-20, -10, 0, 10, 20, 30, 40, 50, 60],
        ticks_labels: ["-20", "-10", "0", "10", "20", "30", "40", "50", "60"],
        ticks_snap_bounds: 5,
    });

    $("#max-wind-slider").slider({
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks_labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
        ticks_snap_bounds: 5,
    });

    $("#max-precip-slider").slider({
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks_labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
        ticks_snap_bounds: 5,
    });

    $("#max-dist-slider").slider({
        ticks: [0, 50, 100, 150, 200, 250, 300, 350, 400],
        ticks_labels: ["0", "50", "100", "150", "200", "250", "300", "350", "400"],
        ticks_snap_bounds: 25,
    });


    $("#preferences-submit-btn").on("click", function () {
        event.preventDefault();
        console.log("saving user preferences");
        //var currentUserId = firebase.auth().currentUser.uid;

        // Grabs user input
        //var userName = $("#user-name-input").val().trim();
        var user = $(this).data("userid");

        var windLimit = $("#max-wind-slider").slider('getValue');
        var precipLimit = $("#max-precip-slider").slider('getValue');
        var tempMin = $("#min-temp-slider").slider('getValue');
        var distMax = $("#max-dist-slider").slider('getValue');

        console.log(`userid: ${user}`);
        console.log(`windLimit: ${windLimit}`);
        console.log(`precipLimit: ${precipLimit}`);
        console.log(`tempMin: ${tempMin}`);
        console.log(`distMax: ${distMax}`);


        var newUserPref = {
            windLimit: windLimit,
            precipLimit: precipLimit,
            tempMin: tempMin,
            distMax: distMax
        };
        console.log(newUserPref);

        $.ajax("/api/user/preferences/" + user, {
            type: "POST",
            data: newUserPref
        }).then(
            function () {
                console.log("changed user preferences", newUserPref);

            }
        );
    });

    

});
