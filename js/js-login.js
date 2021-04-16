window.onscroll = function() {stick()};
var menuSticky = document.querySelector('.top-menu');
var loginStick = document.querySelector('.login-btn')
var sticky = menuSticky.offsetTop;
function stick(){
    if(window.pageYOffset > sticky){
        menuSticky.classList.add("stick");
        loginStick.classList.add("btn-stick");
    }else {
        menuSticky.classList.remove("stick");
        loginStick.classList.remove("btn-stick");
    }
}