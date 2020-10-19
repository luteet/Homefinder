$(function () {

  // ====================== <webp support test> ======================

  var supportedWebpCheck;

  function ThisIsWebP() {
    var def = $.Deferred(), crimg = new Image();
    crimg.onload = function () { def.resolve(); };
    crimg.onerror = function () { def.reject(); };
    crimg.src = "img/webp-test.webp";
    return def.promise();
  }

  ThisIsWebP().then(function () {

    supportedWebpCheck = true;
  }, function () {
    supportedWebpCheck = false;

  });

// ====================== </webp support test> ======================


  function lazyLoadAddClassLoaded() {
    $('img').on('load', function () {
      $(this).addClass('loaded')
    });
  }
  lazyLoadAddClassLoaded();


  // ====================== <при переключении слайда подргужать картинку> ======================

  let initLazy = false;
  function lazyLoadSliderImg(e) {
    if (initLazy == false) {
      ThisIsWebP().then(function () {
        supportedWebpCheck = true;
        $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
        initLazy = true;
        lazyLoadAddClassLoaded();
      }, function () {
        supportedWebpCheck = false;
        $(e).attr('src', $(e).data('src')).removeAttr('data-src');
        initLazy = true;
        lazyLoadAddClassLoaded();
      });
    }
    if (supportedWebpCheck == true) {
      $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
      lazyLoadAddClassLoaded();
    }
    if (supportedWebpCheck == false) {
      $(e).attr('src', $(e).data('src')).removeAttr('data-src');
      lazyLoadAddClassLoaded();
    }
  }

  // ====================== </при переключении слайда подргужать картинку> ======================



  // ====================== <скролинг к нужным секцтям (при нажатии на кнопку в "header")> ======================

  let scrollName, scrollElem, scrollTop, start_scroll = false;
  $('.btn-scroll').on('click', function (e) {
    e.preventDefault();
    if (start_scroll == false) {
      start_scroll = true;

      scrollName = $(this).attr('href'),
        scrollElem = $(scrollName),
        scrollTop = scrollElem.offset().top;

      if ($('.header').offset().top > scrollTop + 300) {
        scrollTop = scrollTop - $('.header').height() - 10;
      }
      else if ($('.header').offset().top < scrollTop && scrollTop - $('.header').offset().top <= 300) {
        scrollTop = scrollTop - $('.header').height() - 10;

      }

      if ($(this).hasClass('btn-scroll-last')) {
        scrollTop = $(document).height() - $(window).height();
      }

      $('.header__burger--btn, .header__nav').removeClass('active');
      $('body').removeClass('lock');




      if ($('.header').offset().top > scrollTop && $('.header').offset().top - scrollTop <= 300) {
        $('html, body').animate({
          scrollTop: scrollTop
        }, 1000);
      }
      else {
        $('html, body').animate({
          scrollTop: scrollTop
        }, 1500);
      }

      setTimeout(function () {
        start_scroll = false;
      }, 1500);
    }
  });

  // ====================== </скролинг к нужным секцтям (при нажатии на кнопку в "header")> ======================



  // ====================== <слайдер с домами и апартаментамы> ======================

  let sliderClass = '.featured__list--slider', imgLazy = $('.img-lazy-load');

  $(sliderClass).slick(getSliderSettings(0))

  function getSliderSettings(e) {
    return {
      slidesToShow: 4,
      infinite: false,
      adaptiveHeight: true,
      initialSlide: e,
      nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
      prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    }
  }

  // ====================== </слайдер с домами и апартаментамы> ======================



  // ====================== <слайдер с домами недели> ======================

  $('.house-week__slider').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    infinite: false,
    adaptiveHeight: true
  })

  // ====================== <слайдер с домами недели> ======================



  // ====================== <слайдер с отзывами> ======================

  $('.reviews__slider').slick({
    slidesToShow: 1,
    nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    infinite: false,
    adaptiveHeight: true
  })

  // ====================== </слайдер с отзывами> ======================



  // ====================== <Бургер (кнопка включения меню на моб.телефонах)> ======================

  let navElements = $('.header__burger--btn, .header__nav');
  $('.header__burger--btn').on('click', function () {
    navElements.toggleClass('active');
    $('body').toggleClass('lock');
  });

// ====================== </Бургер (кнопка включения меню на моб.телефонах)> ======================



  // ====================== <запоминание слайда на котором остановился пользователь> ======================

  let slideIndex = false;
  function sliderSlideIndex(e) {
    if (e.hasClass('active') && slideIndex == false) {
      e.attr('data-current-slide-index', e.find('.slick-current').data('slick-index'));
    }
  }

  // ====================== </запоминание слайда на котором остановился пользователь> ======================



  // ====================== <подгрузка картинок при переключении слайдов> ======================

  function whenSlideLazyImgActive(e) {
    imgLazy = e.find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function () {
      if (!$(this).hasClass('loaded')) {
        lazyLoadSliderImg($(this));
      }
    })
  }
  $('.house-week__slider, .reviews__slider, ' + sliderClass + '').on('afterChange', function () {
    whenSlideLazyImgActive($(this));
  });

  $(sliderClass).on('swipe', function () {
    sliderSlideIndex($(this))
    whenSlideLazyImgActive($(this));
  });

  // ====================== </подгрузка картинок при переключении слайдов> ======================



  // ====================== <различние ивенты на "body"> ======================

  let sliderArrows;
  $('body').on('click', function (e) {

    // ====================== <запоминание индекса слайда при нажатии на элементы управления> ======================

    if ($(e.target).parent('.slider__arrows')) {
      sliderArrows = $(e.target).parent('.slider__arrows');
      sliderSlideIndex($(sliderArrows).parent(sliderClass));
    }

    // ====================== </запоминание индекса слайда при нажатии на элементы управления> ======================



    // ====================== <закрытие випадашкы в футере для моб. телефонов > ======================

    if ($('.slide-btn').parent().has(e.target).length == 0) {
      footerListSlide();
    }

    // ====================== </закрытие випадашкы в футере для моб. телефонов > ======================


  });

  // ====================== </различние ивенты на "body"> ======================


  
  // ====================== <медиа запросы как в CSS> ======================

  function customeMediaEvents(e) {
    if (e > 992) {
      navElements.removeClass('active').removeClass('anim-speed');
      $('body').removeClass('lock');
    }
    else if (e < 992) {
      navElements.addClass('anim-speed');
    }
  }
  customeMediaEvents($(window).width());
  $(window).resize(function () {
    customeMediaEvents($(window).width());
  });

  // ====================== </медиа запросы как в CSS> ======================



  // ====================== <активация плагина для "select"> ======================

  function startplugin() {
    $(".filter__form--select").customSelect("panel")
    $(".filter__form--select").fadeIn(500);
  }
  startplugin()

  // ====================== </активация плагина для "select"> ======================



  // ====================== <прятание шапки при скролле> ======================

  function hHeader(settings) {

    let header = settings.elemName,
      distance = settings.distance,
      scrollPrev = 0, ifHeaderTopClass, ifHeaderTopDistance,
      scrollDown = distance,
      distanceHide = settings.distanceHide,
      distanceShow = settings.distanceShow,
      scrolled = $(window).scrollTop(),
      scrollDownCheck = false,
      scrollTop = 0,
      scrollTopCheck = false,
      scrollToTop = false,
      scrollToDown = false;


    scrollDown = distanceHide;

    ifHeaderTopClass = settings.ifHeaderTop[0];
    ifHeaderTopDistance = settings.ifHeaderTop[1];

    function ifHeaderTop() {
      if (scrolled <= ifHeaderTopDistance) {
        $(header).addClass(ifHeaderTopClass);
      }
      else if (scrolled > ifHeaderTopDistance) {
        $(header).removeClass(ifHeaderTopClass);
      }
    }

    ifHeaderTop();

    let lazyImgCheck;
    function imgLazyActive() {
      lazyImgCheck = $(header).offset().top + $(window).height() + 50;
      $.each($('.slick-active .img-lazy-load'), function () {
        //console.log($(this))
        if (lazyImgCheck >= $(this).offset().top/*  && !$(this).hasClass('img-lazy-slider') */ && !$(this).hasClass('loaded')) {
          lazyLoadSliderImg($(this));
        }
        if ($('.slick-active .img-lazy-load .loaded').length == $('.slick-active .img-lazy-load').length) {
          console.log('stop');
          return false
        }
      });
    }
    imgLazyActive()

    $(window).scroll(function () {
      scrolled = $(window).scrollTop();
      if (scrolled == 0) {
        $(header).removeClass(settings.classToHide);
        scrollTopCheck = true;
      }
      imgLazyActive();
      ifHeaderTop();

      if (scrolled > 100 && scrolled > scrollPrev) {
        if (scrollToDown == false) {
          scrollToTop = false;
          scrollDown = scrolled + distanceHide;
          scrollDownCheck = false;
          scrollToDown = true;
        }

      } else if (scrollToTop == false) {

        scrollToDown = false;
        scrollTop = scrolled - distanceShow;
        scrollTopCheck = false;
        scrollToTop = true;
      }

      scrollPrev = scrolled;
      if (scrolled >= scrollDown && scrollDownCheck == false) {
        // hide elem
        $(header).addClass(settings.classToHide);
        scrollDownCheck = true;
      }
      if (scrollTop >= scrolled && scrollTopCheck == false) {
        // show elem
        $(header).removeClass(settings.classToHide);
        scrollTopCheck = true;
      }
    });
  }

  hHeader({
    elemName: $('.header'),
    classToHide: 'hide',
    distanceHide: 300,
    distanceShow: 100,
    ifHeaderTop: ['top', 0],
    classAnchorForTop: true,
  });

  // ====================== </прятание шапки при скролле> ======================


  // ====================== <переключение между блокамы при нажатии на табы вверху> ======================

  let btnTabCheck = false, btnTab = $('.btn__tab'), tabBlock, tabBlockId;

  $('.btn__tab').on('click', function () {
    if (btnTabCheck == false && !$(this).hasClass('active')) {
      checkTest = true;
      btnTabCheck = true;
      btnTab = $(this); tabBlock = $($(this).data('tab-for-block')); tabBlockId = $($(this).data('tab-block-id'));
      setTimeout(function () {
        btnTab.parent().find('.btn__tab').removeClass('active');
        tabBlock.fadeOut(0).removeClass('active');
        btnTab.addClass('active');
        $(btnTab.data('tab-block-id')).fadeIn(500).addClass('active');
        btnTabCheck = false;
        if (tabBlock.hasClass('slider') && !tabBlock.hasClass('slider-active')) {
          $(tabBlock).slick('destroy')//.attr('data-current-slide-index', slideCurrentTab);
          $(tabBlock).slick(getSliderSettings(Number($(tabBlockId).attr('data-current-slide-index'))));
          checkTest = false;
        }

      }, 100);
    }
  });

  // ====================== </переключение между блокамы при нажатии на табы вверху> ======================



  // ====================== <прятание "placeholder" при фокусе> ======================

  $('[data-placeholder]').focus(function () {
    $(this).attr('placeholder', '');
  }).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
  });

  // ====================== </прятание "placeholder" при фокусе> ======================



  // ====================== <выпадашка для меню в футере> ======================

  function footerListSlide(e) {
    if ($(window).width() < 426) {
      $('.slide-btn, .slide-list').removeClass('active');
      $('.slide-list').slideUp(500);
      if (e != undefined) {
        $(e).addClass('active').next('.slide-list').slideDown(500).addClass('active');
      }
    }
    else {
      return false;
    }
  }

  $('.slide-btn').on('click', function () {
    (!$(this).hasClass('active')) ? footerListSlide($(this)) : footerListSlide()
  });

  // ====================== </выпадашка для меню в футере> ======================



  // ====================== <попап регистрации> ======================

  $('.btn-sign-up').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#regist-name',
    
  });

  // ====================== </попап регистрации> ======================



  // ====================== <анимация при скролле> ======================

  AOS.init({
    once: true
  })

  // ====================== </анимация при скролле> ======================

});