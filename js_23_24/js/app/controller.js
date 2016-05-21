define(
  'app/controller',
  ['app/model', 'app/view', 'jquery'],
  function () {
    
    Controller = function (model, view) {
      var self = this;

      view.elements.addBtn.on('click', addItem);
      view.elements.listContainer.on('click', '.item-delete', removeItem);
      view.elements.listContainer.on('click', '.item-edit', editItem);
      view.elements.listContainer.on('blur', '.item-update', updateItem);
      view.elements.listContainer.on('keyup', '.item-update', function(e) {
        if (e.keyCode == 13) {
          e.target.blur();
        }
      });

      function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
      }

      function removeItem() {
        var item = $(this).data('value');
        model.removeItem(item);
        view.renderList(model.data);
      }

      function editItem() {
        var item = $(this).parent();
        var value = $(this).data('value');
        item.find('.todo-item').replaceWith('<input type="text" class="item-update">');
        item.find('.item-update').val(value).focus();
      }

      function updateItem() {
        var item = $(this).parent();
        var oldItem = item.find('.item-edit').data('value');
        var newValue = $(this).val().trim();

        if (newValue !== '') {
          model.updateItem(oldItem, newValue);
        }
        view.renderList(model.data);
      }
    };

    return Controller;    
  }
);