$(function (){
    'use strict'
    //Adjust Slider Height
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();

    $('.slider , .carousel-item').height(windowHeight - (upperHeight + navHeight));
});
//Align Carousel Caption Center
$(function (){
    'use strict'
    var carouselHeight = $('.testimonials').innerHeight();
    $('.testimonials .carousel-caption').css({top:'50%',marginTop: -0.5*carouselHeight})
})

$(document).ready(function (){
    $('.featured-work ul li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all'){
            $('.shuffle-images .col-md-3').css('opacity','1');
        }
        else{
            $('.shuffle-images .col-md-3').css('opacity','0.08');
            $($(this).data('class')).parent().css('opacity','1');
        }
    });

})
