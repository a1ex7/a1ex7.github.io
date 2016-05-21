define(
  'app/view',
  ['app/model', 'jquery', 'lodash'],
  function () {

    View = function (model) {
        var self = this;

        function init() {
          var tmpl = _.template( $('#wrapper-template').html() );
          var wrapper = tmpl();
          
          $('body').append(wrapper);

          self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.item-list')
          };

          self.renderList(model.data);
        };

        self.renderList = function (data) {
          var tmpl = _.template( $('#list-template').html() );
          // debugger;
          var list = tmpl({data: data});
          self.elements.listContainer.html(list);
        };

        init();
    };

    return View;
      
  }
);

