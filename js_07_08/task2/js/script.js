$(function() {

    var $formInput = $('.form__input');
    var $helpButton = $('.btn-show-help');

    var showTooltip = function(element) {
        // Remove default title and save data from this
        $(element)
            .data('title', $(element).attr('title'))
            .removeAttr('title');

        // Create tooltip element, insert it and show
        var $tooltip = $('<div class="tooltip">' + $(element).data('title') + '</div>');
        $(element).after($tooltip);
        $tooltip.fadeIn();
    };

    var hideTooltip = function(element) {
        // Getting back title
        $(element).attr('title', $(element).data('title'));

        // Hide and remove tooltip
        $('.tooltip').fadeOut('slow', function(element) {
            $(element).remove();
        });
    };

    $formInput.hover(

        function() {
            showTooltip(this);            
        },
        
        function () {
            hideTooltip(this);
        }
    );

    $helpButton.on('click', function(e) {
        e.preventDefault();
        showTooltip($formInput);
        setTimeout(function() {
            hideTooltip($formInput);
        }, 1000);
    });

});