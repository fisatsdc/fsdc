jQuery(document).ready(function($) {
  var alterClass = function() {
    var windowSize = document.body.clientWidth;
    if (windowSize < 640) {
      $('.offset-class').removeClass('is-offset-1');
    } else if (windowSize >= 641) {
      $('.offset-class').addClass('is-offset-1');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});