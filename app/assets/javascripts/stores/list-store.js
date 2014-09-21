var ListStore = (function () {
  var _lists = [];

  return {
    createList: function (todoListTitle) {
      $.ajax({
        type: 'POST',
        url: '/lists',
        data: todoListTitle
      })
      .done(function (data) {
        _lists.push(data)
        this.triggerChange();
      }.bind(this))
      .fail(function (xhr) {
      }.bind(this));
    },

    getLists: function () {
      $.ajax({
        type: 'GET',
        url: '/lists'
      })
      .done(function (data) {
        _lists = data;
        this.triggerChange();
      }.bind(this))
      .fail(function (xhr) {
      });
    },

    lists: function () {
      return _lists;
    },

    addChangeEvent: function (callback) {
      $(this).on('change', callback);
    },

    triggerChange: function (data) {
      $(this).trigger('change', data);
    },

    deleteTodoList: function (todoId) {
      $.ajax({
        type: 'DELETE',
        url: '/lists/' + todoId
      })
      .done(function (data) {
        var listsLength = _lists.length
        for (var i = 0; i < listsLength; i++) {
          if (_lists[i].id === data.id) {
            _lists.splice(i, 1);
            return this.triggerChange();
          }
        }
      }.bind(this))
      .fail(function (xhr) {
      })
    },

    updateList: function (listUpdate) {
      $.ajax({
        type: 'PATCH',
        url: '/lists/' + listUpdate.id,
        data: listUpdate
      })
      .done(function (data) {
        var listsLength = _lists.length;
        for (var i = 0; i < listsLength; i++) {
          if (_lists[i].id === data.id) {
            _lists[i] = data;
            return this.triggerChange();
          }
        }
      }.bind(this))
    }
  }
}());
