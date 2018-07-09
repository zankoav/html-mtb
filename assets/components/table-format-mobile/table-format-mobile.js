import './table-format-mobile.scss';
import $ from "jquery";


let $options = $('.table-format-mobile__item-right-options');
let $selectedOption = $('.table-format-mobile__item-right-selected');
let opened = false;
let currentIndex = 0;

$('.table-format-mobile__item-right-options div').click(function () {
    let selectedHTML = $(this).clone();
    let index = $(this).index();
    if(index !== currentIndex){
        currentIndex = index;
        changeList(index);
        $selectedOption.html(selectedHTML);
    }
    $options.fadeOut(function () {
        opened = false;
    });
});

function changeList(index) {
    $('.js-table-body').hide(400,function () {
        let $ps = $(this).find('.js-table-item').find('p');
        $ps.removeClass('table-format-mobile__item-right-active');
        $($ps[index]).addClass('table-format-mobile__item-right-active');
        $(this).show(400);
    });
}

$('.table-format-mobile__item-right-header').click(function () {
    if (!opened) {
        $options.fadeIn();
        opened = true;
    }
});

$(window).click(function () {
    let closest = $(event.target).closest("div.table-format-mobile__item-right-header");
    if (!closest.length) {
        $options.fadeOut(function () {
            opened = false;
        });
    }
});

