//const { on } = require("gulp");

$(function () {

  //$('body').addClass('js-on');

  var supportedWebpCheck = true;
  //image_srcNotWebp,
  //image_src_bg = '.webp-bg';

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


  function lazyLoadSliderForWebp(e) {
    
    if(supportedWebpCheck == true) {
      
      $('img').on('load', function (e) {
        $(this).addClass('loaded')
      });
    }
  }
  let initLazy = false;
  function lazyLoadSliderImg(e) {
    if(initLazy == false) {
      ThisIsWebP().then(function () {
        
        supportedWebpCheck = true;
        $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
        initLazy = true;
        $('img').on('load', function (e) {
          $(this).addClass('loaded')
        });
      }, function () {
        supportedWebpCheck = false;
        
        $(e).attr('src', $(e).data('src')).removeAttr('data-src');
        initLazy = true;
        $('img').on('load', function (e) {
          $(this).addClass('loaded')
        });
      });
    }
    if(supportedWebpCheck == true) {
      
      $(e).prev('[data-srcset]').attr('srcset', $(e).prev('[data-srcset]').data('srcset')).removeAttr('data-srcset');
      $('img').on('load', function (e) {
        $(this).addClass('loaded')
      });
    }
    else if(supportedWebpCheck == false) {
      $(e).attr('src', $(e).data('src')).removeAttr('data-src');
      $('img').on('load', function (e) {
        $(this).addClass('loaded')
      });
    }
    
  }

  
    
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

            if($(this).hasClass('btn-scroll-last')) {
              scrollTop = $(document).height() - $(window).height();
            }

            $('.header__burger--btn, .header__nav').removeClass('active');
            $('body').removeClass('lock');


            

            if ($('.header').offset().top > scrollTop && $('.header').offset().top - scrollTop <= 300 ) {
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

  let sliderClass = '.featured__list--slider', slideCurrentTab = 0;
  let imgLazy = $('.img-lazy-load');


  /* $(sliderClass).on('init', function (event, slick, direction) {
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function () {

      if (!$(this).hasClass('loaded')) {
        //lazyLoadSliderImg($(this));
        lazyLoadSliderForWebp($(this))

      }
    })
  }); */
  $('.house-week__slider, .reviews__slider, ' + sliderClass + '').on('init', function (event, slick, direction) {
    //supportedWebpCheck = true;
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    
    $.each($(imgLazy), function () {
      if (!$(this).hasClass('loaded')) {
        lazyLoadSliderImg($(this));
      }
    })
  });
  $('.house-week__slider').slick({
    slidesToShow: 1,
    //lazyLoad: 'ondemand',
    nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="2"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    infinite: false
  })
  $('.reviews__slider').slick({
    slidesToShow: 1,
    //lazyLoad: 'ondemand',
    nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev" data-type-arrow="1"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 71 39" enable-background="new 0 0 71 39" xml:space="preserve"><polygon fill="#006450" points="71,19.5 68.3,16.8 68.3,16.8 51.8,0.3 49.1,3 65.6,19.5 49.1,36 51.8,38.7 68.3,22.2 68.3,22.2 71,19.5 71,19.5 "/><rect x="0" y="17.6" fill="#006450" width="68.8" height="3.8"/></svg></button>',
    infinite: false
  })
  $(sliderClass).slick(getSliderSettings(0))

  /* $('.house-week__slider, .reviews__slider').on('afterChange', function (currentSlide) {

    
    lazyLoadSliderForWebp($(this).find('.slick-active').find('.img-lazy-load'))

  }); */
  let imgLazyElem;
  $(sliderClass).on('lazyLoaded', function (imageSource) {
    imgLazyElem = $(this).find('.slick-active').find('.img-lazy-load');
    lazyLoadSliderForWebp(imgLazyElem)

  });

  function getSliderSettings(e) {
    return {
      /* lazyLoad: 'ondemand', */
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


    if (e.hasClass('active') && checkTest == false) {
      //console.log(e)
      e.attr('data-current-slide-index', e.find('.slick-current').data('slick-index'));
      //slideCurrentTab = ;
      //console.log(e.data('current-slide-index'));
    }
    else {
      //console.log('none');
    }
  }

  $('.house-week__slider, .reviews__slider, ' + sliderClass + '').on('afterChange', function () {

      //sliderClass = sliderArrows.parent().find(sliderClass)
      
      imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
      
        $.each($(imgLazy), function () {
          if (!$(this).hasClass('loaded') && supportedWebpCheck == true) {
            lazyLoadSliderImg($(this));
          }
        })

  });

  $(sliderClass).on('swipe', function () {
    sliderSlideIndex($(this))
    imgLazy = $(this).find('.slick-active').find('.img-lazy-load');
    $.each($(imgLazy), function () {
      if (!$(this).hasClass('loaded') && supportedWebpCheck == true) {
        lazyLoadSliderForWebp($(this))
      }
      if (!$(this).hasClass('loaded') && supportedWebpCheck == false) {
        lazyLoadSliderImg($(this))
      }
    })
  });

  let sliderArrows, thisSlider;
  $('body').on('click', function (e) {
    if ($(e.target).parent('.slider__arrows')) {
      sliderArrows = $(e.target).parent('.slider__arrows');
      //console.log('arrow click')
      
      /* setTimeout(function () {
        
      }, 200) */

      //console.log($(sliderArrows).parent(sliderClass).attr('data-current-slide-index'))
      sliderSlideIndex($(sliderArrows).parent(sliderClass));
    }
    //if (($(ddList).parent().has(e.target).length != 0) && screenCheck950 == false) {
    if ($('.slide-btn').parent().has(e.target).length == 0) {
      /* if($(this).is('button')) {
      
      } */
      footerListSlide();
      //console.log($(e.target))
    }

  });

  $('img').on('load', function (e) {
    //console.log(e);
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
  //$(".filter__form--select").fadeOut(0);
  function startplugin() {
    $(".filter__form--select").customSelect("panel")
    $(".filter__form--select").fadeIn(500);
  }
  startplugin()
  

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

  $('[data-placeholder]').focus(function() {
    $(this).attr('placeholder', '');
}).blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
});

  function footerListSlide(e) {
    if($(window).width() < 426) {
      $('.slide-btn, .slide-list').removeClass('active');
      $('.slide-list').slideUp(500);
      if(e != undefined) {
        $(e).addClass('active').next('.slide-list').slideDown(500).addClass('active');
      }
    }
    else {
      return false;
    }
    
    //console.log(e);
  }
  

  $('.slide-btn').on('click', function() {
    if(!$(this).hasClass('active')) {
      footerListSlide($(this));
    }
    else {
      footerListSlide()
    }
    
  });

  $('.btn-sign-up').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

  AOS.init({
    once: true
  })

});