var body = $('body');
var toggle = $('.register-menu');
var list = $('.register-list');
var click_count = 0;
var rem = 0;

toggle.unbind('click').on("click", function() {
  $(this).toggleClass('is-closed');
  console.log(toggle);
  if(!$(this).hasClass('is-closed')) {
      rem = click_count%2;
      body.addClass('is-open');
      list.removeClass('is-invisible');
  } else {
      body.removeClass('is-open');
      list.addClass('is-invisible');
  }
});

window.onclick = function(event) {
  click_count += 1;
  console.log(click_count);
  no = click_count%2;
  console.log("no : ",no);
  if(click_count%2==rem) {
    if(body.hasClass('is-open')) {
      body.removeClass('is-open');
      list.addClass('is-invisible');
      toggle.toggleClass('is-closed');
      flag = false;
    }
  }
}

$('.list-text').hover(function () {
  $(this).css('color', '#e65300' );
},
function () {
  $(this).css('color', '#edb235');
});