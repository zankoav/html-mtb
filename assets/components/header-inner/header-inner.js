import './header-inner.scss';
import './../header/header';
import $ from 'jquery';

$('.header-inner__mobile-back-to-catalog').click(function (event) {
    event.preventDefault();

    $('body').fadeOut(300, function () {
        $('.catalog-company, .header-inner__title, .header-inner__mobile-back-to-catalog, .header-inner__icon').remove();
        $('.catalog').removeClass('catalog--no-mobile');
        $('.category').removeClass('category--small');

        $(this).fadeIn(300);
    });


});