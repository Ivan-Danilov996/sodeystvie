$(document).ready(function() {

    $('.achievements__acts').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
    })

    $('.accordeon-item__trigger').click(function() {
        $(this).find('.plus').toggleClass("plus-active");
        $(this).next('.accordeon-item__content').slideToggle();
    })
})