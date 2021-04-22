$(function(){

    

    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infinite:false

    });

    $('.questions__item-title').on('click', function() {

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
    });
  
    $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
        sectionSelector:'.page-section',
        scrollOverflow:true,
        scrollingSpeed: 500,
	    menu: '#header__nav',
        anchors: ['top', 'products', 'benefits', 'specifications', 'questions', 'contacts', '.products__title'],
        'onLeave': function(anchorLink, index){
            if(index == '2'){
               $('.products__title').addClass('wow animate__animated animate__fadeInDown animate__delay-1s animate__faster'),
               $('.products__text').addClass('wow animate__animated animate__fadeInUp animate__delay-2s animate__faster'),
               $('.products__slider').addClass('wow animate__animated animate__fadeInRight animate__delay-3s animate__faster'),
               $('.products__slider-text').addClass('wow animate__animated animate__fadeInRight animate__delay-4s animate__faster')
            }
            if(index =='3'){
                $('.benefits__title').addClass('wow animate__animated animate__fadeInDown animate__delay-1s animate__faster'),
                $('.benefits__item-1').addClass('wow animate__animated animate__fadeInDown animate__delay-2s animate__faster'),
                $('.benefits__item-2').addClass('wow animate__animated animate__fadeInLeft animate__delay-3s animate__faster'),
                $('.benefits__item-3').addClass('wow animate__animated animate__fadeInDown animate__delay-4s animate__faster'),
                $('.benefits__item-4').addClass('wow animate__animated animate__fadeInLeft animate__delay-5s animate__faster')
            }
            if(index =='4'){
                $('.specifications__img').addClass('wow animate__animated animate__pulse animate__infinite animate__delay-1s animate__slower'),
                $('.specifications__title').addClass('wow animate__animated animate__fadeInDown animate__delay-1s animate__faster'),
                $('.specifications__box-1').addClass('wow animate__animated animate__fadeInBottomRight animate__delay-2s animate__faster'),
                $('.specifications__box-2').addClass('wow animate__animated animate__fadeInTopRight animate__delay-3s animate__faster'),
                $('.specifications__box-3').addClass('wow animate__animated animate__fadeInBottomLeft animate__delay-4s animate__faster'),
                $('.specifications__box-4').addClass('wow animate__animated animate__fadeInTopLeft animate__delay-5s animate__faster')
            }
            if(index == '5'){
                $('.questions__title').addClass('wow animate__animated animate__fadeInDown animate__delay-1s animate__faster'),
                $('.questions__item-1').addClass('wow animate__animated animate__fadeInLeft animate__delay-2s animate__faster'),
                $('.questions__item-2').addClass('wow animate__animated animate__fadeInLeft animate__delay-3s animate__faster'),
                $('.questions__item-3').addClass('wow animate__animated animate__fadeInLeft animate__delay-5s animate__faster'),
                $('.questions__item-4').addClass('wow animate__animated animate__fadeInLeft animate__delay-4s animate__faster')
            }
            if(index == '6'){
                $('.contacts__title').addClass('wow animate__animated animate__fadeInDown animate__delay-1s animate__faster'),
                $('.contacts__info-box').addClass('wow animate__animated animate__fadeInLeft animate__delay-2s animate__faster'),
                $('.contacts__form').addClass('wow animate__animated animate__fadeInUp animate__delay-3s animate__faster'),
                $('.contacts__social-item').addClass('wow animate__animated animate__fadeInLeft animate__delay-4s animate__faster'),
                $('.footer__copy').addClass('wow animate__animated animate__fadeInUp animate__delay-5s animate__faster')
            }
         },
	});
    

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('menu__btn--active');
        $('.menu__list').toggleClass('menu__list--active');
    });
    
    $('.menu__list-link').on('click', function(){
        $('.menu__btn').removeClass('menu__btn--active');
        $('.menu__list').removeClass('menu__list--active');
    });

    new WOW().init();

});

