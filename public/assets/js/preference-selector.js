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
        value: -20,
        ticks: [-20, -10, 0, 10, 20, 30, 40, 50, 60],
        // ticks_labels: ["-20", "-10", "0", "10", "20", "30", "40", "50", "60"],
        ticks_snap_bounds: 1,
        handle: "square",
    });

    $("#max-wind-slider").slider({
        value: 0,
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        // ticks_labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
        ticks_snap_bounds: 1,
        handle: "square",
    });

    $("#max-precip-slider").slider({
        value: 0,
        ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        // ticks_labels: ["0", "10", "20", "30", "40", "50", "60", "70", "80"],
        ticks_snap_bounds: 1,
        handle: "square",
    });

    $("#max-dist-slider").slider({
        value: 0,
        ticks: [0, 50, 100, 150, 200, 250, 300, 350, 400],
        // ticks_labels: ["0", "50", "100", "150", "200", "250", "300", "350", "400"],
        ticks_snap_bounds: 5,
        handle: "square",
    });

    $(`#min-temp-box`).on(`slide`, function () {
        //Crux was to set data-value of parent to easily 'find' children
        var value = parseInt($(this).find(`input`).val());
        var resetTicks = $(this).find(`.slider-tick`).css("background", "#F7F7F7");
        var sliderElements = $(this).find(`.slider-selection.tick-slider-selection, .slider-tick.in-selection, .slider-handle  `)
        
        //set parent div to value
        $(this).attr("data-value", value);
    
        //Taget .readout div
        var readout = $(this).parent().find('.readout');
        var readoutBox = $(this).parent().find('.readout-box')
        if (value < 60) {
            readout.text(value);
        } else {
            readout.text(`${value}+`);
        }
        
        // Set ranges
        var rangeStart = 0;
        var range1 = value <= 0;
        var range2 = (value > 0) && (value <= 20);
        var range3 = (value > 20) && (value <= 40);
        var range4 = (value > 40) && (value <= 60);
        
        // Set colors for ranges
        var blue = "#538D9F"
        var green = "rgb(152, 248, 114)"
        var yellow = "#ECBF2F"
        var red = "#ED463A"
        
        if (rangeStart) {
            resetTicks;
        } else if (range1) {
            resetTicks;
            sliderElements.css("background", blue);
            readoutBox.css("color", blue);
        } else if (range2) {
            resetTicks;
            sliderElements.css("background", green);
            readoutBox.css("color", green);
        } else if (range3) {
            resetTicks;
            sliderElements.css("background", yellow);
            readoutBox.css("color", yellow);
        } else if (range4) {
            sliderElements.css("background", red);
            readoutBox.css("color", red);
        };
      })
    //Fully custom CSS transformation based on value
    $(`#max-wind-box, #max-precip-box`).on(`slide`, function () {
        //Crux was to set data-value of parent to easily 'find' children
        var value = parseInt($(this).find(`input`).val());
        var resetTicks = $(this).find(`.slider-tick`).css("background", "#F7F7F7");
        var sliderElements = $(this).find(`.slider-selection.tick-slider-selection, .slider-tick.in-selection, .slider-handle  `)
        
        //set parent div to value
        $(this).attr("data-value", value);

        //Taget .readout div
        var readout = $(this).parent().find('.readout');
        var readoutBox = $(this).parent().find('.readout-box')
        if (value < 80) {
            readout.text(value);
        } else {
            readout.text(`${value}+`);
        }
        
        // Set ranges
        var rangeStart = 0;
        var range1 = value <= 20;
        var range2 = (value > 20) && (value <= 40);
        var range3 = (value > 40) && (value <= 60);
        var range4 = (value > 60) && (value <= 80);
        
        // Set colors for ranges
        var blue = "#538D9F"
        var green = "rgb(152, 248, 114)"
        var yellow = "#ECBF2F"
        var red = "#ED463A"
        
        if (rangeStart) {
            resetTicks;
        } else if (range1) {
            resetTicks;
            sliderElements.css("background", blue);
            readoutBox.css("color", blue);
        } else if (range2) {
            resetTicks;
            sliderElements.css("background", green);
            readoutBox.css("color", green);
        } else if (range3) {
            resetTicks;
            sliderElements.css("background", yellow);
            readoutBox.css("color", yellow);
        } else if (range4) {
            sliderElements.css("background", red);
            readoutBox.css("color", red);
        };
    })

  $(`#max-dist-box`).on(`slide`, function () {
    //Crux was to set data-value of parent to easily 'find' children
    var value = parseInt($(this).find(`input`).val());
    var resetTicks = $(this).find(`.slider-tick`).css("background", "#F7F7F7");
    var sliderElements = $(this).find(`.slider-selection.tick-slider-selection, .slider-tick.in-selection, .slider-handle  `)
    
    //set parent div to value
    $(this).attr("data-value", value);

    //Taget .readout div
    var readout = $(this).parent().find('.readout');
    var readoutBox = $(this).parent().find('.readout-box')
    if (value < 400) {
        readout.text(value);
    } else {
        readout.text(`${value}+`);
    }
    
    // Set ranges
    var rangeStart = 0;
    var range1 = value <= 100;
    var range2 = (value > 100) && (value <= 200);
    var range3 = (value > 200) && (value <= 300);
    var range4 = (value > 300) && (value <= 400);
    
    // Set colors for ranges
    var blue = "#538D9F"
    var green = "rgb(152, 248, 114)"
    var yellow = "#ECBF2F"
    var red = "#ED463A"
    
    if (rangeStart) {
        resetTicks;
    } else if (range1) {
        resetTicks;
        sliderElements.css("background", blue);
        readoutBox.css("color", blue);
    } else if (range2) {
        resetTicks;
        sliderElements.css("background", green);
        readoutBox.css("color", green);
    } else if (range3) {
        resetTicks;
        sliderElements.css("background", yellow);
        readoutBox.css("color", yellow);
    } else if (range4) {
        sliderElements.css("background", red);
        readoutBox.css("color", red);
    };
  })

    $("#preferences-submit-btn").on("click", function () {
        event.preventDefault();
        console.log("saving user preferences");
        //var currentUserId = firebase.auth().currentUser.uid;

        // Grabs user input
        //var userName = $("#user-name-input").val().trim();
        var user = $(this).data("userid");

        if( user == "undefined") {
            //User needs to sign up 
            return;
        }

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
            function (data) {
                console.log(data);
                console.log("changed user preferences", newUserPref);
            }
        );
    });
});
