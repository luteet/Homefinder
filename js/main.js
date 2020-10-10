$(function(){

    $('.featured__list--slider').slick({
        slidesToShow: 4,
        centerMode: false,
        centerPadding: "0px",
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
                breakpoint: 426,
                settings: {
                  slidesToShow: 1,
                }
              }
          ]
    })

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
    let filterFormCheck = false, filterFormBtn;
    $('.filter__nav--btn').on('click', function() {
        if(filterFormCheck == false) {
            filterFormCheck = true;
            filterFormBtn = $(this);
            setTimeout(function() {
                $('.filter__nav--btn, .filter__item').removeClass('active');
                $('.filter__item').fadeOut(0);
                filterFormBtn.addClass('active');
                $('#' + filterFormBtn.data('filter-form') + '').fadeIn(500).addClass('active');
                filterFormCheck = false;    
            }, 100)
            
        }
    });

});