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
    //click_count += 1;
    //console.log("click_count : ",click_count);
    //if (click_count%2 == 0) {
      if(body.hasClass('is-open')) {
        register_click += 1;
        console.log('register-click : ',register_click);
        if (register_click%2 == 0) {
          body.removeClass('is-open');
          list.addClass('is-invisible');
          toggle.toggleClass('is-closed');
          //click_count = 1;
        }
      } else {
        hamburger_click += 1;
        if (hamburger_click%2 == 0) {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
        //click_count = 0;
      }
      }
    //} 
  } else {
    click_count += 1;
    if (click_count%2 == 0) {
      body.removeClass('is-open');
          list.addClass('is-invisible');
          toggle.toggleClass('is-closed');
    }
  }
}

/*
//To close hamburger-menu when clicked anywhere
window.onclick = function(event) {
  if(navbarMenu.hasClass('is-active')) {
    click_count = click_count +1;
    if (click_count%2 == 0) {
      console.log('enter if');
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    }
  }
}
*/

$('.list-text').hover(function () {
  $(this).css('color', '#e65300' );
},
function () {
  $(this).css('color', '#edb235');
});