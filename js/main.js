$(function(){

  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="previous"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="previous"></button>',
    vertical: true,
    verticalSwiping: true
  });

});

$(function(){
  $('.product__name').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product__content',
    vertical: true,
    prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="previous"></button>',
    nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="previous"></button>'
  });

  $('.product__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.product__name',
    arrows: false
    // fade: true
  });
});

		