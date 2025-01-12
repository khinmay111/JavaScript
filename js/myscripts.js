//Popup!
$('.popup-open').click(
    function () {
        $('.popup').fadeIn();
    }
);

$('.popup-close').click(
    function () {
        $('.popup').fadeOut();
    }
);

$('.popup').click(
    function () {
        $('.popup').fadeOut();
    }
);

$('.popup-contents').click(
    function (e) {
        e.stopPropagation();
    }
);

//scroll events
$(window).scroll(function () {
    var scrollPos = $(window).scrollTop();

    //Animating the jiggle
    if (scrollPos > $('.animate-jiggle-demo').offset().top-500) {
        $('.animate-jiggle-demo').find('.box').addClass('rotate-jiggle');
    }
    else {
        $('.animate-jiggle-demo').find('.box').removeClass('rotate-jiggle');
    }

    //Animate a fade in
    if (scrollPos > $('.fade-in-demo').offset().top-500) {
        $('.fade-in-demo').addClass('fade');
    }
    else {
        $('.fade-in-demo').removeClass('fade');
    }

    //Animate a box rolling in
    if (scrollPos > $('.rotate-in-demo').offset().top-500) {
        $('.rotate-in-demo').find('.box').addClass('rotate-in');
    }
    else {
        $('.rotate-in-demo').find('.box').removeClass('rotate-in');
    }
});


ScrollReveal().reveal('.basic-reveal', { duration: 2000, distance: '50px', reset: true });

ScrollReveal().reveal('.circle', { delay: 1000, duration: 1000, distance: '25px', origin: 'right', interval: 250, reset: true});