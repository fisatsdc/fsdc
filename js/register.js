var body = $('body');
var toggle = $('.register-menu');
var list = $('.register-list');
var click_count = 0;
var register_click = 0;
var hamburger_click = 0;

toggle.unbind('click').on("click", function() {
  $(this).toggleClass('is-closed');
  console.log(toggle);
  if(!$(this).hasClass('is-closed')) {
      //rem = click_count%2;
      body.addClass('is-open');
      list.removeClass('is-invisible');
  } else {
      body.removeClass('is-open');
      list.addClass('is-invisible');
  }
});

window.onclick = function(event) {
  if (navbarMenu.hasClass('is-active')) {
    if(body.hasClass('is-open')) {
      register_click += 1;
      console.log('register-click : ',register_click);
      if (register_click%2 == 0) {
        body.removeClass('is-open');
        list.addClass('is-invisible');
        toggle.toggleClass('is-closed');
      }
    } else {
      hamburger_click += 1;
      if (hamburger_click%2 == 0) {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      }
    }
  } else {
    click_count += 1;
    if (click_count%2 == 0) {
      body.removeClass('is-open');
      list.addClass('is-invisible');
      toggle.toggleClass('is-closed');
    }
  }
}

$('.list-text').hover(function () {
  $(this).css('color', '#e65300' );
},
function () {
  $(this).css('color', '#edb235');
});