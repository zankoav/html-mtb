import './slider-second.scss';
import Swiper from 'swiper';
import $ from "jquery";

let secondSwiper = new Swiper('.second-swiper-js', {
    speed: 600,
    spaceBetween: 30,
    parallax: true,
    loop: true,
    pagination: {
        el: '.second-swiper-pagination-js',
        clickable: true,
    },
    navigation: {
        nextEl: '.second-swiper-next-js'
    },
});

let currentIndex = secondSwiper.realIndex;


secondSwiper.on('slideChange', function () {
    currentIndex = this.realIndex;
    changeRout();
});


$('.slider-second__arrow').click(function () {
    currentIndex = $(this).data("slide");
    secondSwiper.slideTo(currentIndex + 1);
});

function changeRout() {

    $('.slider-second__rout-wrapper').fadeOut(300, function () {

        $(this)
            .find('.slider-second__title_deactivated')
            .removeClass('slider-second__title_deactivated');

        $(this)
            .find(`[data-slide=${currentIndex}]`)
            .parent()
            .addClass('slider-second__title_deactivated');

        let $items = $(".slider-second__title").removeClass('slider-second__title_animate').not(".slider-second__title_deactivated").css('opacity', 0);
        console.log($items.length);
        
        $(this).fadeIn(0, function () {

            for (let i = 0; i < $items.length; i++) {
                setTimeout(function () {
                    $($items[i]).addClass('slider-second__title_animate');
                }, 4 + 300 * i);
            }

        });

    });

}