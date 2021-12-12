$(function () {

  $(".rightside-menu__close").on("click", function () {
    $(".rightside-menu").addClass("rightside-menu--close");
  });
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  });

 
  $(".header__btn-menu").on("click", function () {
    $(".menu").toggleClass("menu--open");
  });


  if($(window).width() < 651){
    $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
  }
   
  $(".top__slider").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });

  $(".contact-slider").slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        }
      }

    ]
  });

  $(".article-slider__box").slick({
    prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="./images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="./images/arrow-slide-right.svg" alt="arrow right"></button>',
  });


  let mixer = mixitup(".gallery__inner", {
    load: {
      filter: ".living",
    },
  });
});