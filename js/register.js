var body = $('body');
var toggle = $('.register-menu');
var list = $('.register-list')

toggle.on("click", function() {
  $(this).toggleClass('is-closed');
  if(!$(this).hasClass('is-closed')) {
      body.addClass('is-open');
      list.removeClass('is-invisible');
  } else {
      body.removeClass('is-open');
      list.addClass('is-invisible');
  }
});

$('.list-text').hover(function () {
  $(this).css('color', '#e65300' );
},
function () {
  $(this).css('color', '#edb235');
});