var burger = document.querySelector('.burger');
var menu = document.querySelector('#'+burger.dataset.target);
var  navbarItem = document.querySelectorAll('.navbar-item');
if(navbarItem){
    navbarItem.forEach(function(el){
        if(!el.innerHTML.includes("REGISTER")){
            el.addEventListener('click',function(){
                burger.classList.toggle('is-active');
                menu.classList.toggle('is-active');
        });
    }
    });
}
