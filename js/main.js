let espera = 100;
let timeout = null;

$(window).bind('scroll',function(){
    clearTimeout(timeout);
    timeout = setTimeout(function(){

    if($(window).scrollTop() > 100)
    {
        $('.scroll-menu-topbar').animate({ height:"80px" });
    }
    else
    {
        $('.scroll-menu-topbar').animate({ height:"0px" });
    }    
    
    }, espera);
});


//Abrindo e Fechando O MENU MOBILE
const TOGGLE_MENU = document.querySelectorAll('.btn-menu');
const OPEN_ANIM_BTN = document.querySelector('.icon');
const MENU_MOBILE = document.querySelector('.navbar-container-mobile');
const OVERLAY_BLUR = document.querySelector('.block-blur-overlay');
for (let i = 0; i < TOGGLE_MENU.length; i++) {
  TOGGLE_MENU[i].addEventListener('click', function () {
      OPEN_ANIM_BTN.classList.toggle('open');
      MENU_MOBILE.classList.toggle('active');
      OVERLAY_BLUR.classList.toggle('active');
  });
}