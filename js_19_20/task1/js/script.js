$(function() {

  /* Carousel */

  $(".owl-carousel").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true
  });

  /* Accordion */ 

  var $accordionItem = $('.accordion__item');

  $accordionItem.on('click', function() {
    $accordionItem.removeClass('accordion__item--open').addClass('accordion__item--closed');
    $(this).addClass('accordion__item--open');
  });


});