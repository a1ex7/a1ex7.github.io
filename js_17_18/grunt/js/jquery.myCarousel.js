(function( $ ){
  $.fn.myCarousel = function(options) {
    
    var settings = $.extend( {
        'width'         : 650,
        'offset'        : 225
    }, options);

    var currentLeftValue = 0;
    var carouselList = this.children('ul').addClass('myCarousel-list');

    var elementsCount = carouselList.find('li').length;
    var minimumOffset = - ((elementsCount - 3) * settings.offset);
    var maximumOffset = 0;

    carouselList.children('li').addClass('myCarousel-element');
    
    this.addClass('myCarousel-hider').width(settings.width + "px");

    this.before('<div class="myCarousel-arrow-left"><span>Влево</span></div>');
    this.after('<div class="myCarousel-arrow-right"><span>Вправо</span></div>');


    $('.myCarousel-arrow-left').on('click', function() {
        if (currentLeftValue < maximumOffset) {
            currentLeftValue += settings.offset;
            carouselList.animate({left: currentLeftValue + "px"}, 400);
        }
    });

    $('.myCarousel-arrow-right').on('click', function() {
        if (currentLeftValue > minimumOffset) {
            currentLeftValue -= settings.offset;
            carouselList.animate({left: currentLeftValue + "px"}, 400);
        }
    });

    return this;
  };
})( jQuery );