$(document).ready(function () {
    //header
    let headerTop = $('.header-top').outerHeight();
    console.log(headerTop / 2);
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll > headerTop / 2) {
            $('.header-top').slideUp();
            $('header').addClass("active");
            $('header').css({
                "height": "70px"
            });
        } else {
            $('.header-top').slideDown();
            $('header').css({
                "height": "140px"
            });
            $('header').removeClass("active");
        }
    });
    //back to top
    let backTop = $('.backtop__img');
    backTop.on('click', function () {
        console.log(1);
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    });
});