"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
  }
  ;
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
  $(document).on('click', '.js-mobile-link', function () {
    $(this).closest('.menu__item').children('.wrapper-menu-inner').removeClass('wrapper-menu-inner--no').addClass('wrapper-menu-inner--active');
  });

  // second inner 
  $(document).on('click', '.js-menu-inner-link', function () {
    $(this).closest('.menu-inner__item').children('.wrapper-menu-inner').removeClass('wrapper-menu-inner--no').addClass('wrapper-menu-inner--active');
  });

  // back menu
  $(document).on('click', '.js-link-back', function (e) {
    e.preventDefault();
    $(this).closest('.wrapper-menu-inner').removeClass('wrapper-menu-inner--active').addClass('wrapper-menu-inner--no');
  });

  // maps change
  $('.js-maps-label').on('click', function () {
    $(this).parents().siblings('div').find('.maps-hint').removeClass('maps-hint--active');
    $(this).next('.maps-hint').toggleClass('maps-hint--active');
  });

  // js-change-maps-hint mobile
  $(document).on('click', '.js-maps-hint__head-change', function () {
    $(this).parents().parent().siblings('div').find('.maps-hint__head').removeClass('maps-hint__head--active');
    $(this).parents().parent().siblings('div').find('.maps-hint__icon-change').removeClass('maps-hint__icon-change--active');
    $(this).parents().parent().siblings('div').find('.maps-hint__body').removeClass('maps-hint__body--active');
    $(this).toggleClass('maps-hint__head--active');
    $(this).find('.maps-hint__icon-change').toggleClass('maps-hint__icon-change--active');
    $(this).closest('.maps-hint').find('.maps-hint__body').toggleClass('maps-hint__body--active');
  });

  // js-change-language
  $('.js-change-language').on('click', function () {
    $(this).toggleClass('change-language--active');
    $(this).closest('.select-language').find('.list-select-language').toggleClass('list-select-language--active');
  });

  // header fixed
  $(function () {
    var menuTop = $('.header').offset().top;
    var blockIntro = $('.page-intro');
    var homeIntro = $('.home-intro');
    $(window).scroll(function () {
      if ($(window).scrollTop() > menuTop) {
        if (!$('.header').hasClass('header--active')) {
          $('.header').addClass('header--active');
          blockIntro.css('margin-top', '101px');
          homeIntro.css('margin-top', '101px');
        }
      } else {
        if ($('.header').hasClass('header--active')) {
          $('.header').removeClass('header--active');
          blockIntro.css('margin-top', '');
          homeIntro.css('margin-top', '');
        }
      }
    });
  });

  // select
  jQuery(function ($) {
    $(".select").on("click", ".select__head", function () {
      if ($(this).hasClass("open")) {
        $(this).removeClass("open");
        $(this).next().fadeOut();
        $(this).closest('.modal-form__item').find('.modal-form__label').addClass('modal-form__label--active');
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
    entry.forEach(function (change) {
      if (change.isIntersecting) {
        change.target.classList.add('element-animation--active');
      }
    });
  }
  var options = {
    threshold: [0.5]
  };
  var observer = new IntersectionObserver(onEntry, options);
  var elements = document.querySelectorAll('.element-animation');
  var _iterator = _createForOfIteratorHelper(elements),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var elm = _step.value;
      observer.observe(elm);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});