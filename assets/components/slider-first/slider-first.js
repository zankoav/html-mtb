import './slider-first.scss';
import Swiper from 'swiper';
import $ from 'jquery';

let firstSwiper = new Swiper('.first-swiper-js', {
    speed: 600,
    parallax: true,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.first-swiper-pagination-js',
        clickable: true,
    },
    navigation: {
        nextEl: '.first-swiper-next-js'
    },
});

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

let currentIndex = firstSwiper.realIndex;


firstSwiper.on('slideChange', function () {
    let index = this.realIndex;
    if (currentIndex !== index) {
        currentIndex = index;
        changeTitle(currentIndex);
    }
});

function changeTitle(index) {
    $('.first-swiper-next-js').fadeOut();
    $('.slider-first__rout--first').find('.slider-first__title').fadeOut(function () {
        $($('.slider-first__rout--first').find('.slider-first__title')[index]).delay(500).fadeIn();
        $('.first-swiper-next-js').fadeIn();
    });
}