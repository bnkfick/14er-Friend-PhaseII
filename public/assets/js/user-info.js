$(function () {
    //Everything inside this function! :)
    
    //Toggle #preference-box partial
    //Show/Hide depending on Login Status
    // $(`#preference-box`).hide()
    function userInfoBtnState() {
        var btn = $(`#toggle-user-info-btn`);
        if ($(`#user-info-box:visible`)) {
            btn.removeClass(`fa-plus-square`);
        } else {
            btn.addClass(`fa-plus-square`);
        }
    }

    userInfoBtnState();

    $(`#user-info`).on('click', `#toggle-user-info-btn`, function () {
        var btn = $(`#toggle-user-info-btn`)

        if (btn.hasClass(`fa-plus-square`)) {
            btn.removeClass(`fa-plus-square`)
        } else {
            btn.addClass(`fa-plus-square`);
            // $(this).parent().parent().parent().addClass(`ptb-25`)
        };
        $(`#user-info-box`).slideToggle(500, `swing`, function () {

        });
    })





});