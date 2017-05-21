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

    loadPartial(window.location.hash);
    bindRouterLinks();
});

function bindRouterLinks() {
  $('.router-link').off('click').click(function(e) {
    e.stopPropagation();
    loadPartial($(this).attr('href'));
  });
}

function loadPartial(href) {
  href = href.toLowerCase();
  switch (href) {
    case '#about-6metre-financial':
    case '#360-degree-planning':
    case '#products-and-services':
    case '#contact':
      href = href.replace('#', '');
      $('body').removeAttr('id');
    break;
    default:
      href = 'home';
      $('body').attr('id', 'splash');
    break;
  }

  $('[data-include]').load(href + '.html', function() {
    bindRouterLinks();
    initPage(href);
  });
}

function initPage(href) {
  switch (href.toLowerCase()) {
    case 'about-6metre-financial':

      var today = new Date();
      $('.financial-advisor-experience').text(dateDiff(today, new Date('4/1/2008')));
      $('.lending-experience').text(dateDiff(today, new Date('4/1/2015')));
      $('.training-experience').text(dateDiff(today, new Date('4/1/2012')));

    break;
  }
}

function dateDiff(date1, date2) {
  var msInAYear = 31536000000;
  return Math.floor(Math.abs(date1 - date2) / msInAYear);
}
