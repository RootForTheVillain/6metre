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

    $.each($('[data-include]'), function() {
      $(this).load('assets/includes/' + $(this).data('include') + '.html');
    });

    /*if (window.location.href.indexOf('?') > -1) {
        $('#background-container').css('background-image', "url('assets/images/background - Copy.png')");
        console.log('god dammit')
    }*/
});
