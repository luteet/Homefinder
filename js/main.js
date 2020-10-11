$(function(){

    

    let navElements = $('.header__burger--btn, .header__nav');
    $('.header__burger--btn').on('click', function() {
        navElements.toggleClass('active');
        $('body').toggleClass('lock');
    });

    function customeMediaEvents(e) {
        if(e > 992) {
            navElements.removeClass('active').removeClass('anim-speed');
            $('body').removeClass('lock');
        }
        else if(e < 992) {
            navElements.addClass('anim-speed');
        }
    }
    customeMediaEvents($(window).width());
    $(window).resize(function() {
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
            if(scrolled <= ifHeaderTopDistance) {
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

    $('.featured__list--slider').slick({
        slidesToShow: 4,
        centerMode: false,
        centerPadding: "0px",
        infinite: false,
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
    })

    /* function sliderTab(e) {
        console.log('slide tab active')
        $('.featured__list--slider').slick({
            slidesToShow: 4,
            centerMode: false,
            centerPadding: "0px",
            appendArrows: '.featured__slider--nav',
            nextArrow: '<button type="button" class="slick-next slider__arrows slider__arrows--next"></button>',
            prevArrow: '<button type="button" class="slick-prev slider__arrows slider__arrows--prev"></button>',
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
        }).addClass('slider-active');
    } */

    function getSliderSettings(){
        return  { 
        slidesToShow: 4,
        centerMode: false,
        centerPadding: "0px",
        infinite: false,
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

    let btnTabCheck = false, btnTab = $('.btn__tab'), tabBlock, tabBlockId;
    /* $.each($(btnTab), function() {
        if($($(this).data('tab-for-block')).hasClass('slider')) {
            sliderTab($(this).data('tab-for-block'));
            console.log('i found this')
            return false;
        }
    }); */

    
    
    $('.btn__tab').on('click', function() {
        if(btnTabCheck == false) {
            btnTabCheck = true;
            btnTab = $(this);tabBlock = $(btnTab.data('tab-for-block'));tabBlockId = $(btnTab.data('tab-block-id'));
            setTimeout(function() {
                btnTab.parent().find('.btn__tab').removeClass('active');
                tabBlock.fadeOut(0).removeClass('active');
                
                
                btnTab.addClass('active');
                $(btnTab.data('tab-block-id')).fadeIn(500).addClass('active');
                btnTabCheck = false;
                if(tabBlock.hasClass('slider') && !tabBlock.hasClass('slider-active')) {
                    //sliderTab(tabBlock);
                    //$(tabBlock).on('')
                   $(tabBlock).slick('destroy');
                   $(tabBlock).slick(getSliderSettings());
                    console.log('init');
                }
            }, 100);
        }
    });

    /* $('.img-load-effect').on('load', function() {
        $(this).addClass('active');
    }); */

    //$('.tab__block.slider').css('display', 'none');

});