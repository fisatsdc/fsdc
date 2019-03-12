var body = $("body");
var burger = document.querySelector(".burger");
var menu = document.querySelector("#" + burger.dataset.target);
var navbarItem = document.querySelectorAll(".navbar-item");
if (navbarItem) {
  navbarItem.forEach(function(el) {
    if (!el.innerHTML.includes("REGISTER")) {
      //To check if not register and remove is-active
      el.addEventListener("click", function() {
        burger.classList.toggle("is-active");
        menu.classList.toggle("is-active");
      });
    } else {
      var registerList = document.querySelector(".register-list");
      var registerMenu = document.querySelector(".register-menu");
      var registerItems = document.querySelectorAll(".list-text");
      if (registerItems) {
        registerItems.forEach(function(item) {
          item.addEventListener("click", function() {
            registerMenu.classList.toggle("is-closed");
            registerList.classList.toggle("is-invisible");
            burger.classList.toggle("is-active");
            menu.classList.toggle("is-active");
            body.removeClass("is-open");
          });
        });
      }
    }
  });
}
