$(function() {

    $('.tabs__text:not(.tabs__text--active)').hide();
    var $tabsLink = $('.tabs__link');
    
    $tabsLink.on('click', function(e) {
        e.preventDefault();

        var tabId = $(this).attr('href');

        $tabsLink.removeClass('tabs__link--active');
        $(this).addClass('tabs__link--active');

        $('.tabs__text').hide();
        $(tabId).show();
    });

});