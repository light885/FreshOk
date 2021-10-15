$(function () {
  $('.promotion__inner').slick({
    dots: false,
    
    nextArrow: '<button type="button" class="slick-next"><img src="images/icon/arrow_right.svg" alt="стрелка вправо"></button >',
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icon/arrow_left.svg" alt="стрелка влево"></button>',

    arrows: true,
    fade: true,
    autoplay: false,
    autoplaySpeed: 2000

  });

  var mixer = mixitup('.product__content');

});