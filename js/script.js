$(document).ready(function() {

    $('.achievements__acts').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        variableWidth: true,
        speed: 1100,
        dots: true,
        responsive: [
            {
              breakpoint: 425,
              settings: {
                slidesToShow: 1,
                dots: true,
              }
            },
        ],
    })

    $('.accordeon-item__trigger').click(function() {
        $(this).find('.plus').toggleClass("plus-active");
        $(this).next('.accordeon-item__content').slideToggle();
    })

    $("#phone").mask("+7(999) 999-9999");

    $("#modal-phone").mask("+7(999) 999-9999");



    $(".cause__btn").click(function() {
        $('html, body').animate({
            scrollTop: $(".price").offset().top +'px'
        }, {
            duration: 2000});
    });
})