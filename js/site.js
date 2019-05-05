$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0){
            $('header').removeClass('header-hide');
        }
        else {
            $('header').addClass('header-hide');
        }
    });
});