import './modal.scss';
import $ from "jquery";


$('.modal__item--row').click(function () {
    let checkBox = $(this).find('[name="agree"]');
    let isChecked = !checkBox.prop("checked");
    checkBox.attr("checked", isChecked);
    $(this).find('.modal__checkbox').toggleClass('modal__checkbox--active');
});



let currentValue = '';

$('#phone').on('input', function () {

    let value = $(this).val();

    if (currentValue.length < value.length) {
        if (value.length === 3 || value.length === 6) {
            $(this).val(value + ' ');
        }

        if ((value.length === 4 && !value.endsWith(' ')) || (value.length === 7 && !value.endsWith(' '))) {
            let lastLetter = value.substr(-1);
            let oldValue = value.slice(0, -1);

            $(this).val(oldValue + ' ' + lastLetter);
        }
    } else if (value.endsWith(' ')) {
        $(this).val(value.slice(0, -1));
    }

    currentValue = $(this).val();

});

$(".modal").on("submit", function (event) {
    event.preventDefault();

    let data = $(this).serializeArray();
    let postData = {};

    for (let d of data) {

        if(d.value.length === 0){
            return;
        }

        postData[d.name] = d.value;
    }

    if(!$('#agree').prop('checked')){
        let $span = $('[for="agree"].modal__item-label');
        $span.addClass('modal__item-label--error');

        setTimeout(function () {
            $span.removeClass('modal__item-label--error');
        }, 3000);


        return;
    }

    $(this).find('button').fadeOut(400, function () {
        $(this).replaceWith( "<span class='modal__message-after'>Ваша форма отправлена</span>" );
        $('.modal__message-after').fadeIn(400);
    });

    // TODO : send postData by Ajax
    console.log(postData);

});