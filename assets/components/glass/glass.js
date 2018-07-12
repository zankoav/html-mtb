import './glass.scss';
import $ from "jquery";

let $glass = $('.glass');
const titles = {
    seller: "Стать партнером",
    buyer: "Стать клиентом"
};

$glass.click(function (event) {
    if (event.target === this) {
        $(this).fadeOut(function () {
            $(".modal")[0].reset();
            $(".modal").find('.modal__message-after').replaceWith('<button class="modal__item-button modal__item-button--blue" type="submit">Отправить</button>' );
        });

    }
});

$('.modal__close').click(function () {
    $glass.fadeOut(function () {
        $(".modal")[0].reset();
        $(".modal").find('.modal__message-after').replaceWith('<button class="modal__item-button modal__item-button--blue" type="submit">Отправить</button>' );
    });
});

$(document).keyup(function (e) {
    if (e.keyCode === 27) {
        $glass.fadeOut(function () {
            $(".modal")[0].reset();
            $(".modal").find('.modal__message-after').replaceWith('<button class="modal__item-button modal__item-button--blue" type="submit">Отправить</button>' );
        });
    }
});



$('.buttons__item[data-type]').click(function (event) {
    event.preventDefault();
    let type = $(this).data('type');
    $glass.find('.modal__title').html(titles[type]);
    $glass.find('[name="type"]').val(type);
    $glass.css('display', 'flex').hide().fadeIn();
});

$(".buttons__item--gray").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#catalog").offset().top
    }, 1600);
});

$('.buttons__item[data-scroll]').click(function (event) {
    event.preventDefault();
    let scrollTo = $(this).data('scroll');
    $('html, body').animate({
        scrollTop: $(`[data-slider=${scrollTo}]`).offset().top + 100
    }, 1600);
});

