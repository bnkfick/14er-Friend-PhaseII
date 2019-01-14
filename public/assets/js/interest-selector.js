$(function () {
    //Everything inside this function! :)

    
    //Sliders==========================================================
    //Credit for basic to https://seiyria.com/bootstrap-slider/#example-13
    $(".custom-slider").slider({
        value: 0,
        ticks: [0,  5,  10],
        ticks_labels: ["Beginner", "Intermediate", "Advanced"],
        ticks_snap_bounds: 0.5,
        handle: "square",
    });

    

    $(`.input-box`).on(`click`, function () {
        //Crux was to set data-value of parent to easily 'find' children
        var value = parseInt($(this).find(`input`).val());
        var resetTicks = $(this).find(`.slider-tick`).css("background", "#F7F7F7");
        var sliderElements = $(this).find(`.slider-selection.tick-slider-selection, .slider-tick.in-selection, .slider-handle  `)
        
        //set parent div to value
        $(this).attr("data-value", value);

        //turn-on interest button on slide
        if (value === 0) {
            $(this).parent().find('.interests-btn').attr('value', 'false').removeClass(`bg-yellow-glass`);
            // $(this).parent().find('.label-box').data("value", "false");
        } else {
            $(this).parent().find('.interests-btn').attr('value', 'true').addClass(`bg-yellow-glass`);
            // $(this).parent().find('.label-box').data("value", "true");
        }
        
    
        //Taget .readout div
        var readout = $(this).parent().find('.readout');
        var readoutBox = $(this).parent().find('.readout-box')
        if (value < 10) {
            readout.text(value);
        } else {
            readout.text(`${value}`);
        }
        
        // Set ranges
        var rangeStart = 0;
        var range1 = value <= 3;
        var range2 = (value > 3) && (value <= 6);
        var range3 = (value > 6) && (value <= 8);
        var range4 = (value > 8) && (value <= 10);
        
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

    $(`.input-box`).on(`slide`, function () {
        //Crux was to set data-value of parent to easily 'find' children
        var value = parseInt($(this).find(`input`).val());
        var resetTicks = $(this).find(`.slider-tick`).css("background", "#F7F7F7");
        var sliderElements = $(this).find(`.slider-selection.tick-slider-selection, .slider-tick.in-selection, .slider-handle  `)
        
        //set parent div to value
        $(this).attr("data-value", value);

        //turn-on interest button on slide
        if (value === 0) {
            $(this).parent().find('.interests-btn').attr('value', 'false').removeClass(`bg-yellow-glass`);
            // $(this).parent().find('.label-box').data("value", "false");
        } else {
            $(this).parent().find('.interests-btn').attr('value', 'true').addClass(`bg-yellow-glass`);
            // $(this).parent().find('.label-box').data("value", "true");
        }
        
    
        //Taget .readout div
        var readout = $(this).parent().find('.readout');
        var readoutBox = $(this).parent().find('.readout-box')
        if (value < 10) {
            readout.text(value);
        } else {
            readout.text(`${value}`);
        }
        
        // Set ranges
        var rangeStart = 0;
        var range1 = value <= 3;
        var range2 = (value > 3) && (value <= 6);
        var range3 = (value > 6) && (value <= 8);
        var range4 = (value > 8) && (value <= 10);
        
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
    
    $(".interests-btn").on('click', function () {
        if ($(this).attr('value') === "false"){
            $(this).attr('value', 'true').addClass(`bg-yellow-glass`);
        } else {
            $(this).attr('value', 'false').removeClass(`bg-yellow-glass`);
        }
    })
    

    $("#interests-submit-btn").on("click", function () {
        event.preventDefault();
        console.log("saving user interests");

        var user = $(this).data("userid");
        console.log("saving user id " + user);
        if( user == "undefined") {
            //User needs to sign up 
            return;
        }

        //Interests? Boolean
        var interest1 = $("#interest1").attr('value');
        var interest2 = $("#interest2").attr('value');
        var interest3 = $("#interest3").attr('value');
        var interest4 = $("#interest4").attr('value');
        var interest5 = $("#interest5").attr('value');
        var interest6 = $("#interest6").attr('value');
        var interest7 = $("#interest7").attr('value');
        var interest8 = $("#interest8").attr('value');
        var interest9 = $("#interest9").attr('value');

        //Experience Level
        var interest1Exp = parseInt($("#interest1Exp").val());
        var interest2Exp = parseInt($("#interest2Exp").val());
        var interest3Exp = parseInt($("#interest3Exp").val());
        var interest4Exp = parseInt($("#interest4Exp").val());
        var interest5Exp = parseInt($("#interest5Exp").val());
        var interest6Exp = parseInt($("#interest6Exp").val());
        var interest7Exp = parseInt($("#interest7Exp").val());
        var interest8Exp = parseInt($("#interest8Exp").val());
        var interest9Exp = parseInt($("#interest9Exp").val());

        var newUserInterests = {
            interest1: interest1,
            interest1Exp: interest1Exp,
            
            interest2: interest2,
            interest2Exp: interest2Exp,
            
            interest3: interest3,
            interest3Exp: interest3Exp,
            
            interest4: interest4,
            interest4Exp: interest4Exp,
            
            interest5: interest5,
            interest5Exp: interest5Exp,
            
            interest6: interest6,
            interest6Exp: interest6Exp,
            
            interest7: interest7,
            interest7Exp: interest7Exp,
            
            interest8: interest8,
            interest8Exp: interest8Exp,
            
            interest9: interest9,
            interest9Exp: interest9Exp,
        };
        console.log(newUserInterests);

        $.ajax("/api/user/profile/" + user, {
            type: "POST",
            data: newUserInterests
        }).then(
            function (data) {
                console.log(data);
                console.log("changed user profile", newUserInterests);
            }
        );
    });
});
