$(function() {

    var baseURL = 'http://ajax.googleapis.com/ajax/services/search/web';
    var APIKey = 'ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg';

    var tmpl = _.template( $('#result__tpl').html() );

    var $searchInput = $('.search__input');
    var $resultBlock = $('.result-block');

    $('#search__form').on('submit', function(e) {
        e.preventDefault();


        var query = $searchInput.val();

        $.ajax({
            url: baseURL,
            type: 'GET',
            dataType: 'jsonp',
            data: {
                v: '1.0',
                rsz: 8,
                key: APIKey,
                q: query
            },
        })
        .done(function(data) {
            var results = data.responseData;
            showResults(results);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
        
        

        
    })

    function showResults(results) {
        var resultsHTML = tmpl(results);
        console.log(results)
        $resultBlock.fadeOut(400, function() {
            $(this).html('') 
            $resultBlock.append(resultsHTML).show();
        });
    }    

});