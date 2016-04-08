$(function() {

    $('.niceCheck').click(function() {

        changeCheck($(this));

    });


    $('.niceCheck').each(function() {
    
        /* при загрузке страницы нужно проверить какое значение имеет чекбокс и в соответствии с ним выставить вид */
        changeCheckStart($(this));
         
    });

});

function changeCheck(el) {

    var $input = el.find('input').eq(0);
    
    if ( !$input.attr('checked') ) {
        el.addClass('niceChecked');
        $input.attr('checked', true)
    } else {
        el.removeClass('niceChecked');
        $input.attr('checked', false)
    }
    
    return true;
}

function changeCheckStart(el) {

    var $input = el.find('input').eq(0);
    
    if ( $input.attr('checked') ) {
        el.addClass('niceChecked');   
    }

    if ( $input.attr('disabled') ) {
        el.addClass('niceCheckDisabled');   
    }
    
    return true;
}