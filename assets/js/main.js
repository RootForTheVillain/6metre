$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $('nav').addClass("navbar-shadow");
    }
    else {
        $('nav').removeClass("navbar-shadow");
    }
});

$(document).ready(function() {
    $('#copyright-date').text(new Date().getFullYear());
});
