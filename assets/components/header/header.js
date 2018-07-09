import './header.scss';
import $ from 'jquery';

$('.header__contacts').click(function (event) {
    event.preventDefault();
    if ($(window).height() < 768) {
        $('.header__logo').fadeOut(200);
        $('.header__contacts-wrapper').addClass('header__contacts-wrapper--activated');
    }else{
        $('.header__contacts-wrapper').addClass('header__contacts-wrapper--activated');
    }
});

$(window).click(function (event) {
    if ($(event.target).hasClass('header__contacts-wrapper') || $(event.target).parent('.header__contacts-wrapper').length) {
        return;
    }
    $('.header__contacts-wrapper').removeClass('header__contacts-wrapper--activated');
    if ($(window).height() < 768) {
        $('.header__logo').delay(500).fadeIn();
    }
});