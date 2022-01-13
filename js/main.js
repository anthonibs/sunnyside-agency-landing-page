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