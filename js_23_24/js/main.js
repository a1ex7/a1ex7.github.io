requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.12.3/jquery',
        lodash: 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.3.0/lodash',
        app: '../app'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

requirejs(
    [
        'app/model',
        'app/view',
        'app/controller',
        'jquery',
        'lodash'
    ],
    function (model, view, controller, $, _) {

        $(function(){

          var firstToDoList = ['Learn Java Script', 'Learn HTML', 'Make Cofee'];
          var model = new Model(firstToDoList);
          var view = new View(model);
          var controller = new Controller(model, view);

        });

    }
);