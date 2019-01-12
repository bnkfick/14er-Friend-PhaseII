$(function () {
//Everything inside this function! :)
    
//Toggle #about partial
    //Delete .hide() after dev
    // $(`#about`).hide();

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
        var btn = $(`#preference-btn` )

        if (btn.hasClass(`fa-plus-square`)) {
            btn.removeClass(`fa-plus-square`)
        } else {
            btn.addClass(`fa-plus-square`);
            // $(this).parent().parent().parent().addClass(`ptb-25`)
        };
        $(`#preference-box`).slideToggle(500, `swing`, function () {
            
        });
    })

    


});
