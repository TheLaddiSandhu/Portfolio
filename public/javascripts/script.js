$(document).ready(function(){
    $('.navbar .navmenu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.navmenubtn').click(function(){
        $('.navbar .navmenu').toggleClass("active");
        $('.navmenubtn i').toggleClass("active");
    })
  
});