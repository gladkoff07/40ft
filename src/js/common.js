$(function () {
  // Mask
  $("input[name='phone']").mask("+0000 000-00-00");


  // menu mobile
  function mediaSize_1023() {
    /* Set the matchMedia */
    if (window.matchMedia('(max-width: 1023px)').matches) {
      /* Changes when we reach the min-width  */

      $('.header').find('.menu').removeClass('header__menu').appendTo('.menu-mobile__inner');
      $('.header').find('.block-phone').removeClass('header__block-phone').insertAfter('.menu-mobile__language');
      $('.header').find('.header__select-language').insertAfter('.menu-mobile__language-text');

      $('.menu__link').addClass('js-mobile-link');
      $('.menu-inner__link').addClass('js-menu-inner-link');
      $('.maps-hint__head').addClass('js-maps-hint__head-change');

    } else {
      /* Reset for CSS changes вЂ“ Still need a better way to do this! */

      $('.menu-mobile').find('.menu').addClass('header__menu').insertAfter('.header__logo');
      $('.menu-mobile').find('.block-phone').addClass('header__block-phone').insertAfter('.header__menu');
      $('.menu-mobile').find('.header__select-language').insertAfter('.header__block-phone');

      $('.menu-mobile').removeClass('menu-mobile--active');
      $('.menu__link').removeClass('js-mobile-link');
      $('.menu-inner__link').removeClass('js-menu-inner-link');
      $('.maps-hint__head').removeClass('js-maps-hint__head-change');
      $('body').removeClass('body-fixed');
    }
  };
  mediaSize_1023();
  /* Attach the function to the resize event listener */
  window.addEventListener('resize', mediaSize_1023);

  // mob menu open
  $('.js-mobile-button').on('click', function () {
    $('.menu-mobile').addClass('menu-mobile--active');
    $('body').addClass('body-fixed');
  }); 

  // close mobile menu
  $('.menu-mobile__close').on('click', function () {
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('body').removeClass('body-fixed');
  });

  // mobile menu inner change
  $(document).on('click', '.js-mobile-link', function() {

    $(this).closest('.menu__item')
            .children('.wrapper-menu-inner')
            .removeClass('wrapper-menu-inner--no')
            .addClass('wrapper-menu-inner--active');
  });

  // second inner 
  $(document).on('click', '.js-menu-inner-link', function() {

    $(this).closest('.menu-inner__item')
            .children('.wrapper-menu-inner')
            .removeClass('wrapper-menu-inner--no')
            .addClass('wrapper-menu-inner--active');
  });

  // back menu
  $(document).on('click', '.js-link-back', function(e) {

    e.preventDefault();
    $(this).closest('.wrapper-menu-inner').removeClass('wrapper-menu-inner--active').addClass('wrapper-menu-inner--no');
  });

  // maps change
  $('.js-maps-label').on('click', function() {
    $(this).parents().siblings('div').find('.maps-hint').removeClass('maps-hint--active');
    $(this).next('.maps-hint').toggleClass('maps-hint--active');
  });

  // js-change-maps-hint mobile
  $(document).on('click', '.js-maps-hint__head-change', function() {

    $(this).parents().parent().siblings('div').find('.maps-hint__head').removeClass('maps-hint__head--active');
    $(this).parents().parent().siblings('div').find('.maps-hint__icon-change').removeClass('maps-hint__icon-change--active');
    $(this).parents().parent().siblings('div').find('.maps-hint__body').removeClass('maps-hint__body--active');
    
    $(this).toggleClass('maps-hint__head--active');
    $(this).find('.maps-hint__icon-change').toggleClass('maps-hint__icon-change--active');
    $(this).closest('.maps-hint').find('.maps-hint__body').toggleClass('maps-hint__body--active');
  });

  // js-change-language
  $('.js-change-language').on('click', function() {
    $(this).toggleClass('change-language--active');
    $(this).closest('.select-language').find('.list-select-language').toggleClass('list-select-language--active');
  });

  // header fixed
  $(function() {
    let menuTop = $('.header').offset().top;
    let blockIntro = $('.page-intro');
    let homeIntro = $('.home-intro');

    $(window).scroll(function () {
      if ($(window).scrollTop() > menuTop) {
        if ( !$('.header').hasClass('header--active') ) {
          $('.header').addClass('header--active');
          blockIntro.css('margin-top','101px');
          homeIntro.css('margin-top','101px');
        }
      } else {
        if ( $('.header').hasClass('header--active') ) {
          $('.header').removeClass('header--active');
          blockIntro.css('margin-top','');
          homeIntro.css('margin-top','');
        }
      }
    });
  });

  // select
  jQuery(($) => {
    $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
          $(this).removeClass("open");
          $(this).next().fadeOut();
          $(this).closest('.modal-form__item').find('.modal-form__label').addClass('modal-form__label--active')
      } else {
          $(".select__head").removeClass("open");
          $(".select__list").fadeOut();
          $(this).addClass("open");
          $(this).next().fadeIn();
          $(this).closest('.modal-form__item').find('.modal-form__label').addClass('modal-form__label--active');
      }
    });

    $(".select").on("click", ".select__item", function () {
        $(".select__head").removeClass("open");
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest(".select").length) {
            $(".select__head").removeClass("open");
            $(".select__list").fadeOut();
            // $('.select').next('.modal-form__label').removeClass('modal-form__label--active');
        }
    });
  });

});

document.addEventListener('DOMContentLoaded', function () {

  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-animation--active');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  for (let elm of elements) {
    observer.observe(elm);
  }
});