$(function() {

  $('.owl-carousel').owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    // autoplay: true,
    navText: [
      '<i class="icon-ico-left-arrow"></i>',
      '<i class="icon-ico-right-arrow"></i>'
    ]
  });

});



$(window).load(function() {

    // $('.grid').masonry({
    //   // options
    //   itemSelector: '.grid-item',
    //   columnWidth: 300
    //   gutter: 10
    // });

    // init Masonry
    var $grid = $('.ideas__grid').masonry({
      // options
      itemSelector: '.ideas__item',
      columnWidth: '.grid-sizer',
      percentPosition: true,
      gutter: 20
    });

    // layout Masonry after each image loads
    $grid.imagesLoaded().progress( function() {
      $grid.masonry('layout');
    });

    $('.how-it-works__img').imagefill();
    $('.ideas__item').imagefill();

});

$(function() {

    var baseURL = 'https://pixabay.com/api/';
    var APIKey = '2661500-a86fdddd1f5dc433c40ef8f43';

    var $searchInput = $('.search__input');
    var $resultBlock = $('.result-block');

    $('.search__form').on('submit', function(e) {
        e.preventDefault();


        var query = $searchInput.val();

        $.ajax({
            url: baseURL,
            type: 'GET',
            dataType: 'jsonp',
            data: {
                key: APIKey,
                q: query,
                per_page: 7
            }
        })
        .done(function(data) {
            showResults(data);
        });
        
    })


});

function showResults(results) {
  
  var images = results.hits;

  if (images.length === 0) {
    $('.search__message').text('No Image found');
    return;
  }
  
  $('.ideas__item')
  .fadeOut('400')
  .each(function(index, el) {

    var title = images[index].tags;
    var imageSrc = images[index].webformatURL
    
    $(this).find('span').text(title);

    $(this).find('.ideas__img').attr('src', imageSrc)
      // when image loaded
    .load(function() {
      $('.ideas__item').imagefill()
        // some animation
      .fadeIn();
    });
  });
};       
