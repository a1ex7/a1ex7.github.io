$(function() {

    var $formInput = $('.form__input');

    $formInput.hover(

        function() {

            // Remove default title and save data from this
            $(this)
                .data('title', $(this).attr('title'))
                .removeAttr('title');

            // Create tooltip element, insert it and show
            var $tooltip = $('<div class="tooltip">' + $(this).data('title') + '</div>');
            $(this).after($tooltip);
            $tooltip.fadeIn();
        },
        
        function () {

            // Getting back title
            $(this).attr('title', $(this).data('title'));

            // Hide and remove tooltip
            $('.tooltip').fadeOut('slow', function() {
                $(this).remove();
            });
        }
    );

});