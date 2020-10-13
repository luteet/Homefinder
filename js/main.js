//const { on } = require("gulp");

$(function () {

  
  function lazyLoadSliderForWebp(e) {
    $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
  }
  function lazyLoadSliderImg(e) {
    //console.log('E!2')
    //imgLazy = $(e).find('.slick-active').find('.img-lazy-load');
    $(e).attr('src', $(e).data('src')).removeAttr('data-src');
    $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
  }

  let sliderClass = '.featured__list--slider', slideCurrentTab = 0;
  let imgLazy = $('.img-lazy-load');


  $(sliderClass).on('init', function(event, slick, direction){
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function() {
      //console.log('find!');
      if (!$(this).hasClass('loaded')) {
        lazyLoadSliderImg($(this));
      }
    })
  });
  $('.house-week__slider').on('init', function(event, slick, direction){
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function() {
      //console.log('find!');
      if (!$(this).hasClass('loaded')) {
        lazyLoadSliderImg($(this));
      }
    })
  });
  $('.house-week__slider').slick({
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    infinite: false
  })
  $(sliderClass).slick(getSliderSettings(0))

  $('.house-week__slider').on('afterChange', function (currentSlide) {

    /* imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function() {
      if (!$(this).hasClass('loaded')) {
        lazyLoadSliderImg($(this));
      }
    }) */
    lazyLoadSliderForWebp($(this).find('.slick-active').find('.img-lazy-load'))
    
  });
  
  $(sliderClass).on('lazyLoaded', function(imageSource){
    console.log(imageSource);
    lazyLoadSliderForWebp($(this).find('.slick-active').find('.img-lazy-load'))

  });

  function getSliderSettings(e) {
    return {
      lazyLoad: 'ondemand',
      slidesToShow: 4,
      centerMode: false,
      centerPadding: "0px",
      infinite: false,
      initialSlide: e,
      //appendArrows: '.featured__slider--nav',
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

  let navElements = $('.header__burger--btn, .header__nav');
  $('.header__burger--btn').on('click', function () {
    navElements.toggleClass('active');
    $('body').toggleClass('lock');
  });

  /* $('.slick-arrow').on('click', function() {
    //console.log('click2')
  }); */

  
/* $(sliderClass).on('init', function() {
  
}); */
  /* imgLazy = imgLazy[0];
  $(imgLazy).attr('src', $(imgLazy).data('src')).removeAttr('data-src');
  $(imgLazy).prev('[data-srcset]').attr('srcset', $(imgLazy).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset'); */

  
  

  /* $(sliderClass).on('destroy', function(event, slick, direction){
    //$(this).attr('data-current-slide-index', $(this).find('.slick-current').data('slick-index'));
  }); */

  /* $(sliderClass).on('swipe', function(event, slick, direction){
    $(this).attr('data-current-slide-index', $(this).find('.slick-current').data('slick-index'));
    console.log('swipe')
  })

  $('.slider__arrows').on('click', function() {
    $(this).parent().attr('data-current-slide-index', $(this).parent().find('.slick-current').data('slick-index'));
    console.log('click')
  }); */
let checkTest = false;
  function sliderSlideIndex(e) {
    
    
    if(e.hasClass('active') && checkTest == false) {
      //console.log(e)
      e.attr('data-current-slide-index', e.find('.slick-current').data('slick-index'));
      //slideCurrentTab = ;
      //console.log(e.data('current-slide-index'));
    }
    else {
      //console.log('none');
    }
  }

  $(sliderClass).on('beforeChange', function () {

    
    
  });

  $(sliderClass).on('swipe', function () {
    sliderSlideIndex($(this))
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function() {
      if (!$(this).hasClass('loaded')) {
        //lazyLoadSliderImg($(this));
      }
    })
  });

  let sliderArrows;
  $('body').on('click', function(e) {
    if($(e.target).parent('.slider__arrows')) {
      sliderArrows = $(e.target).parent('.slider__arrows');
      //console.log('arrow click')
      setTimeout(function() {
        imgLazy = $(e.target).parents(sliderClass).find('.slick-active').find('.img-lazy-load');
        $.each($(imgLazy), function() {
          if (!$(this).hasClass('loaded')) {
            //lazyLoadSliderImg($(this));
          }
        })
      },200)
      
      console.log($(sliderArrows).parent(sliderClass).attr('data-current-slide-index'))
      sliderSlideIndex($(sliderArrows).parent(sliderClass));
    }

    
  });

  $('img').on('load', function() {
    console.log('load!');
    $(this).addClass('loaded')
  });

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

  $(".filter__form--select").customSelect("panel");

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

    $(window).scroll(function () {
      scrolled = $(window).scrollTop();
      if (scrolled == 0) {
        $(header).removeClass(settings.classToHide);
        scrollTopCheck = true;
      }

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



  

  let btnTabCheck = false, btnTab = $('.btn__tab'), tabBlock, tabBlockId;
  /* $.each($(btnTab), function() {
      if($($(this).data('tab-for-block')).hasClass('slider')) {
          sliderTab($(this).data('tab-for-block'));
          console.log('i found this')
          return false;
      }
  }); */



  $('.btn__tab').on('click', function () {
    if (btnTabCheck == false && !$(this).hasClass('active')) {
      checkTest = true;
      btnTabCheck = true;
      btnTab = $(this); tabBlock = $($(this).data('tab-for-block')); tabBlockId = $($(this).data('tab-block-id'));
      //slideCurrentTab = tabBlock.data('current-slide-index');
      //console.log(tabBlockId.data('current-slide-index'));
      if (tabBlock.hasClass('slider')) {
        //slideCurrentTab = tabBlockId.data('current-slide-index');
        console.log($(tabBlockId).attr('data-current-slide-index'));
      }
      setTimeout(function () {
        btnTab.parent().find('.btn__tab').removeClass('active');
        tabBlock.fadeOut(0).removeClass('active');


        btnTab.addClass('active');
        $(btnTab.data('tab-block-id')).fadeIn(500).addClass('active');
        btnTabCheck = false;
        if (tabBlock.hasClass('slider') && !tabBlock.hasClass('slider-active')) {
          
          //sliderTab(tabBlock);
          //$(tabBlock).on('')
          //slideCurrentTab = $(tabBlock).data('current-slide-index');
          console.log(Number($(tabBlockId).attr('data-current-slide-index')));
          $(tabBlock).slick('destroy')//.attr('data-current-slide-index', slideCurrentTab);
          $(tabBlock).slick(getSliderSettings(Number($(tabBlockId).attr('data-current-slide-index'))));
          checkTest = false;
          /* $(tabBlock).on('reInit', function() {
            console.log('init');
          }) */
          
        }
        
      }, 100);
    }
  });

  /* $('.img-load-effect').on('load', function() {
      $(this).addClass('active');
  }); */

  //$('.tab__block.slider').css('display', 'none');

});